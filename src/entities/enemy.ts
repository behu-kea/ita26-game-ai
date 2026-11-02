import { Scene } from 'three';
import { CONFIG } from '../config';
import type { Circle, EnemyKind } from '../types';
import { buildHumanoid, disposeHumanoid, setFlash, setRestPose, type Humanoid } from '../world/models';
import { isFree, resolveCircle } from '../world/map';
import { approachAngle, dist } from '../utils';

/** normal: almindelig fjende. pursuit: bøddelen i forfølgelse (kan ikke dø). boss: slutbossen. */
export type EnemyMode = 'normal' | 'pursuit' | 'boss';

export type Telegraph =
  | { shape: 'sector'; x: number; z: number; facing: number; radius: number; arcHalf: number; duration: number }
  | { shape: 'line'; x: number; z: number; facing: number; length: number; width: number; duration: number };

export type Strike =
  | { kind: 'melee'; x: number; z: number; facing: number; range: number; arcHalf: number; damage: number; towerDamage: number }
  | { kind: 'shot'; x: number; y: number; z: number; dirX: number; dirZ: number; damage: number; towerDamage: number };

export type EnemyEvent =
  | { type: 'telegraph'; telegraph: Telegraph }
  | { type: 'strike'; strike: Strike }
  | { type: 'enraged' }
  | { type: 'died' }
  | { type: 'vanished' };

type State = 'idle' | 'chase' | 'windup' | 'recover' | 'charge' | 'stunned' | 'dying' | 'vanish';
type Plan = 'melee' | 'shot' | 'charge';

/** Fælles felter fra CONFIG.enemies. Ikke alle typer har alle felter. */
interface EnemyCfg {
  hp: number;
  speed: number;
  damage: number;
  radius: number;
  windup: number;
  cooldown: number;
  towerDamage: number;
  detect?: number;
  range?: number;
  minRange?: number;
  maxRange?: number;
  shotRange?: number;
  enragedSpeed?: number;
  pursuitDamage?: number;
  pursuitSpeed?: number;
  pursuitTime?: number;
  pursuitStuns?: number;
  stunTime?: number;
  chargeCooldown?: number;
  chargeWindup?: number;
  chargeSpeed?: number;
  chargeTime?: number;
  chargeDamage?: number;
  chargeTowerDamage?: number;
}

const DEATH_TIME = 0.6;
const SHOT_HEIGHT = 1.4;
const SOLDIER_ARC = 0.9;
const BOSS_ARC = 1.1;
/** Afvigelser fra målretningen, prøves i rækkefølge. */
const STEER_OFFSETS = [0, 0.4, -0.4, 0.8, -0.8, 1.2, -1.2, 1.7, -1.7, 2.4, -2.4];

/** En fjende der søger mod et mål, varsler sine angreb og rammer. */
export class Enemy {
  readonly kind: EnemyKind;
  readonly mode: EnemyMode;
  readonly humanoid: Humanoid;
  readonly maxHp: number;
  readonly radius: number;
  hp: number;
  x: number;
  z: number;
  facing = 0;
  state: State;

  private readonly c: EnemyCfg;
  private readonly scene: Scene;
  private readonly baseScale: number;
  private readonly events: EnemyEvent[] = [];
  private timer = 0;
  private cool = 0.8;
  private chargeCool = 0;
  private plan: Plan = 'melee';
  private windupTotal = 1;
  private plannedFacing = 0;
  private plannedReach = 0;
  private chargeHitDone = false;
  private stunsTaken = 0;
  private pursuitLeft = 0;
  private enrageSent = false;
  private flash = 0;
  private attackAnim = 0;
  private walk = 0;
  private age = 0;
  private kx = 0;
  private kz = 0;

  constructor(scene: Scene, kind: EnemyKind, x: number, z: number, mode: EnemyMode = 'normal') {
    this.scene = scene;
    this.kind = kind;
    this.mode = mode;
    this.c = CONFIG.enemies[kind];
    this.maxHp = this.c.hp;
    this.hp = this.c.hp;
    this.radius = this.c.radius;
    this.x = x;
    this.z = z;
    this.humanoid = buildHumanoid(kind);
    this.humanoid.root.rotation.order = 'YXZ';
    this.baseScale = this.humanoid.root.scale.x;
    scene.add(this.humanoid.root);

    if (mode === 'pursuit') {
      this.pursuitLeft = this.c.pursuitTime ?? 45;
      this.state = 'chase';
    } else {
      this.state = 'idle';
    }
    if (mode === 'boss') this.chargeCool = 3;
    this.updateModel(0, false);
  }

  get alive(): boolean {
    return this.state !== 'dying' && this.state !== 'vanish';
  }

  /** True når død- eller forsvindingsanimationen er færdig og objektet kan fjernes. */
  get done(): boolean {
    return !this.alive && this.timer <= 0;
  }

  get enraged(): boolean {
    return this.mode === 'boss' && this.hp <= this.maxHp * 0.5;
  }

  /** Bøddelen kan ramme spilleren under en opladning, én gang per opladning. */
  get chargeCanHit(): boolean {
    return this.state === 'charge' && !this.chargeHitDone;
  }

  markChargeHit(): void {
    this.chargeHitDone = true;
  }

  /** Fjende der ser spilleren går i jagt. */
  alert(): void {
    if (this.state === 'idle') this.state = 'chase';
  }

  takeEvents(): EnemyEvent[] {
    const out = this.events.slice();
    this.events.length = 0;
    return out;
  }

  /**
   * Modtager et hit. Returnerer true hvis hittet registreredes.
   * Bøddelen i forfølgelse tager ikke skade, men bliver forsinket af hvert hit.
   */
  receiveHit(damage: number, stun: number, fromX: number, fromZ: number): boolean {
    if (!this.alive) return false;
    this.alert();

    if (this.mode === 'pursuit') {
      this.stunsTaken++;
      if (this.stunsTaken >= (this.c.pursuitStuns ?? 3)) {
        this.startVanish();
      } else {
        this.startStun(this.c.stunTime ?? 2.5);
      }
      return true;
    }

    this.hp = Math.max(0, this.hp - damage);
    this.flash = 0.2;
    const ang = Math.atan2(this.x - fromX, this.z - fromZ);
    this.kx += Math.sin(ang) * 3.5;
    this.kz += Math.cos(ang) * 3.5;

    if (this.hp <= 0) {
      this.die();
      return true;
    }
    if (this.mode === 'boss' && this.enraged && !this.enrageSent) {
      this.enrageSent = true;
      this.events.push({ type: 'enraged' });
    }
    if (stun > 0) this.startStun(stun);
    return true;
  }

  update(dt: number, player: Circle, goal: Circle, solids: Circle[], half: number): void {
    this.age += dt;
    this.flash = Math.max(0, this.flash - dt);
    this.attackAnim = Math.max(0, this.attackAnim - dt);
    this.cool = Math.max(0, this.cool - dt);
    this.chargeCool = Math.max(0, this.chargeCool - dt);

    this.applyKnockback(dt, solids, half);

    let moving = false;
    switch (this.state) {
      case 'dying':
      case 'vanish':
        this.timer -= dt;
        break;
      case 'idle':
        if (this.c.detect !== undefined && dist(this.x, this.z, player.x, player.z) <= this.c.detect) this.alert();
        break;
      case 'stunned':
        this.timer -= dt;
        if (this.timer <= 0) this.state = 'chase';
        break;
      case 'windup':
        this.timer -= dt;
        if (this.timer <= 0) this.finishWindup();
        break;
      case 'recover':
        this.timer -= dt;
        if (this.timer <= 0) this.state = 'chase';
        break;
      case 'charge':
        moving = this.updateCharge(dt, solids, half);
        break;
      case 'chase':
        moving = this.updateChase(dt, goal, solids, half);
        break;
    }

    if (this.mode === 'pursuit' && this.alive && this.state !== 'idle') {
      this.pursuitLeft -= dt;
      if (this.pursuitLeft <= 0) this.startVanish();
    }

    this.updateModel(dt, moving);
  }

  dispose(): void {
    this.scene.remove(this.humanoid.root);
    disposeHumanoid(this.humanoid);
  }

  private updateChase(dt: number, goal: Circle, solids: Circle[], half: number): boolean {
    const c = this.c;
    const d = dist(this.x, this.z, goal.x, goal.z);

    if (this.kind === 'musketeer') {
      const minR = c.minRange ?? 4;
      const maxR = c.maxRange ?? 8;
      if (d < minR) {
        // Holder afstand: træder tilbage væk fra målet.
        this.steer(dt, this.x + (this.x - goal.x), this.z + (this.z - goal.z), this.moveSpeed * 0.9, solids, half);
        this.faceToward(goal.x, goal.z, dt);
        return true;
      }
      if (d > maxR) {
        this.steer(dt, goal.x, goal.z, this.moveSpeed, solids, half);
        this.faceToward(goal.x, goal.z, dt);
        return true;
      }
      this.faceToward(goal.x, goal.z, dt);
      if (this.cool <= 0 && d <= (c.shotRange ?? maxR)) this.beginWindup('shot', goal);
      return false;
    }

    if (this.mode === 'boss' && this.chargeCool <= 0 && d >= 4 && d <= 13) {
      this.beginWindup('charge', goal);
      return false;
    }

    const reach = (c.range ?? 0) + goal.r;
    if (d <= reach) {
      this.faceToward(goal.x, goal.z, dt);
      if (this.cool <= 0) this.beginWindup('melee', goal);
      return false;
    }

    this.steer(dt, goal.x, goal.z, this.moveSpeed, solids, half);
    return true;
  }

  private beginWindup(plan: Plan, goal: Circle): void {
    const c = this.c;
    this.plan = plan;
    this.state = 'windup';
    this.plannedFacing = Math.atan2(goal.x - this.x, goal.z - this.z);
    this.facing = this.plannedFacing;

    if (plan === 'melee') {
      this.windupTotal = c.windup;
      this.plannedReach = (c.range ?? 0) + goal.r;
      this.timer = c.windup;
      this.events.push({
        type: 'telegraph',
        telegraph: {
          shape: 'sector',
          x: this.x,
          z: this.z,
          facing: this.plannedFacing,
          radius: this.plannedReach,
          arcHalf: this.arc,
          duration: c.windup,
        },
      });
    } else if (plan === 'shot') {
      this.windupTotal = c.windup;
      this.timer = c.windup;
      this.events.push({
        type: 'telegraph',
        telegraph: {
          shape: 'line',
          x: this.x,
          z: this.z,
          facing: this.plannedFacing,
          length: c.shotRange ?? 16,
          width: 0.22,
          duration: c.windup,
        },
      });
    } else {
      this.windupTotal = c.chargeWindup ?? 1.3;
      this.timer = this.windupTotal;
      this.events.push({
        type: 'telegraph',
        telegraph: {
          shape: 'line',
          x: this.x,
          z: this.z,
          facing: this.plannedFacing,
          length: (c.chargeSpeed ?? 11) * (c.chargeTime ?? 0.7) + 0.5,
          width: 1.2,
          duration: this.windupTotal,
        },
      });
    }
  }

  private finishWindup(): void {
    const c = this.c;
    if (this.plan === 'charge') {
      this.state = 'charge';
      this.timer = c.chargeTime ?? 0.7;
      this.chargeHitDone = false;
      this.chargeCool = c.chargeCooldown ?? 7;
      return;
    }

    if (this.plan === 'shot') {
      const dirX = Math.sin(this.plannedFacing);
      const dirZ = Math.cos(this.plannedFacing);
      this.events.push({
        type: 'strike',
        strike: {
          kind: 'shot',
          x: this.x + dirX * 0.8,
          y: SHOT_HEIGHT,
          z: this.z + dirZ * 0.8,
          dirX,
          dirZ,
          damage: c.damage,
          towerDamage: c.towerDamage,
        },
      });
    } else {
      const damage = this.mode === 'pursuit' ? (c.pursuitDamage ?? c.damage) : c.damage;
      this.events.push({
        type: 'strike',
        strike: {
          kind: 'melee',
          x: this.x,
          z: this.z,
          facing: this.plannedFacing,
          range: this.plannedReach,
          arcHalf: this.arc,
          damage,
          towerDamage: c.towerDamage,
        },
      });
    }
    this.attackAnim = 0.25;
    this.enterRecover(c.cooldown);
  }

  private enterRecover(cooldown: number): void {
    this.state = 'recover';
    this.timer = 0.35;
    this.cool = cooldown;
  }

  private updateCharge(dt: number, solids: Circle[], half: number): boolean {
    const speed = this.c.chargeSpeed ?? 11;
    const nx = this.x + Math.sin(this.plannedFacing) * speed * dt;
    const nz = this.z + Math.cos(this.plannedFacing) * speed * dt;
    if (isFree(nx, nz, this.radius, solids, half)) {
      this.x = nx;
      this.z = nz;
    } else {
      this.timer = 0;
    }
    this.timer -= dt;
    if (this.timer <= 0) this.enterRecover(this.c.cooldown);
    return true;
  }

  private startStun(time: number): void {
    this.state = 'stunned';
    this.timer = time;
  }

  private die(): void {
    this.state = 'dying';
    this.timer = DEATH_TIME;
    this.events.push({ type: 'died' });
  }

  private startVanish(): void {
    if (this.state === 'vanish') return;
    this.state = 'vanish';
    this.timer = DEATH_TIME;
    this.events.push({ type: 'vanished' });
  }

  private get arc(): number {
    return this.kind === 'executioner' ? BOSS_ARC : SOLDIER_ARC;
  }

  private get moveSpeed(): number {
    if (this.mode === 'pursuit') return this.c.pursuitSpeed ?? this.c.speed;
    if (this.enraged) return this.c.enragedSpeed ?? this.c.speed;
    return this.c.speed;
  }

  /** Simpel steering: vælger første frie retning tæt på målretningen. */
  private steer(dt: number, gx: number, gz: number, speed: number, solids: Circle[], half: number): void {
    const desired = Math.atan2(gx - this.x, gz - this.z);
    const probe = speed * dt + 0.15;
    for (const off of STEER_OFFSETS) {
      const a = desired + off;
      const nx = this.x + Math.sin(a) * probe;
      const nz = this.z + Math.cos(a) * probe;
      if (isFree(nx, nz, this.radius, solids, half)) {
        this.x += Math.sin(a) * speed * dt;
        this.z += Math.cos(a) * speed * dt;
        this.facing = approachAngle(this.facing, a, 8 * dt);
        resolveCircle(this, this.radius, solids, half);
        return;
      }
    }
  }

  private faceToward(gx: number, gz: number, dt: number): void {
    this.facing = approachAngle(this.facing, Math.atan2(gx - this.x, gz - this.z), 10 * dt);
  }

  private applyKnockback(dt: number, solids: Circle[], half: number): void {
    if (Math.abs(this.kx) < 0.01 && Math.abs(this.kz) < 0.01) return;
    this.x += this.kx * dt;
    this.z += this.kz * dt;
    const decay = Math.exp(-10 * dt);
    this.kx *= decay;
    this.kz *= decay;
    resolveCircle(this, this.radius, solids, half);
  }

  private updateModel(dt: number, moving: boolean): void {
    const h = this.humanoid;
    const root = h.root;
    root.position.set(this.x, 0, this.z);
    root.rotation.y = this.facing;

    if (this.state === 'dying') {
      const k = 1 - this.timer / DEATH_TIME;
      root.rotation.x = Math.min(1.5, k * 1.6);
    } else {
      root.rotation.x = 0;
    }
    if (this.state === 'vanish') {
      const k = Math.max(0.001, this.timer / DEATH_TIME);
      root.scale.setScalar(this.baseScale * k);
    } else {
      root.scale.setScalar(this.baseScale);
    }

    if (moving) this.walk += dt * 7;
    setRestPose(h, this.age);
    const stride = moving ? Math.sin(this.walk) * 0.6 : 0;
    h.legR.rotation.x = stride;
    h.legL.rotation.x = -stride;

    const armBase = this.kind === 'musketeer' ? -1.5 : -1.2;
    let armRot = armBase;
    if (this.state === 'windup' && this.plan !== 'shot') {
      const raise = 1 - this.timer / this.windupTotal;
      armRot = armBase - raise * 0.8;
    }
    if (this.attackAnim > 0) {
      armRot = armBase - 0.8 * (this.attackAnim / 0.25);
    }
    h.armR.rotation.x = armRot;
    h.armL.rotation.x = armBase;

    setFlash(h, this.flash / 0.2);
  }
}
