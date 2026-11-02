import { CircleGeometry, Mesh, MeshBasicMaterial, Scene } from 'three';
import { CONFIG } from '../config';
import type { Circle, Point } from '../types';
import { buildHumanoid, disposeHumanoid, setFlash, setRestPose, type Humanoid } from '../world/models';
import { resolveCircle } from '../world/map';

const P = CONFIG.player;
const HIT_FLASH = 0.18;
const SHOT_HEIGHT = 1.3;

export interface Upgrades {
  sword: boolean;
  mana: boolean;
  shield: boolean;
}

export interface SwordSwing {
  x: number;
  z: number;
  facing: number;
  range: number;
  arcHalf: number;
  damage: number;
}

export interface PistolShot {
  x: number;
  y: number;
  z: number;
  dirX: number;
  dirZ: number;
  damage: number;
}

export interface HolyCone {
  x: number;
  z: number;
  facing: number;
  length: number;
  halfAngle: number;
  damage: number;
  stun: number;
}

export interface PlayerSnapshot {
  x: number;
  z: number;
  hp: number;
  mana: number;
  upgrades: Upgrades;
}

export const NO_UPGRADES: Upgrades = { sword: false, mana: false, shield: false };

/** Kongen: bevægelse, sigte, evner, mana og beskyttelsesseglet. */
export class Player {
  readonly humanoid: Humanoid;
  x = 0;
  z = 0;
  /** Vinkel mod sigtepunktet; 0 peger mod +Z (ned mod kameraet). */
  facing = 0;
  hp: number = P.maxHp;
  mana: number = P.baseMana;
  maxMana: number = P.baseMana;
  upgrades: Upgrades = { ...NO_UPGRADES };
  swordDamage: number = P.sword.damage;
  swordRange: number = P.sword.range;
  sealRadius: number = P.seal.radius;
  sealReduction: number = P.seal.reduction;
  /** Resterende cooldown i sekunder for hver evne. */
  readonly cd = { sword: 0, pistol: 0, holy: 0, seal: 0, dash: 0 };

  private swing = 0;
  private dashTime = 0;
  private dashDx = 0;
  private dashDz = 0;
  private iFrames = 0;
  private flash = 0;
  private sealTime = 0;
  private sealX = 0;
  private sealZ = 0;
  private walkPhase = 0;
  private age = 0;
  private readonly scene: Scene;
  private readonly sealGeo: CircleGeometry;
  private readonly sealMat: MeshBasicMaterial;
  private readonly sealMesh: Mesh;

  constructor(scene: Scene, start: Point) {
    this.scene = scene;
    this.humanoid = buildHumanoid('christian');
    scene.add(this.humanoid.root);

    this.sealGeo = new CircleGeometry(1, 40);
    this.sealGeo.rotateX(-Math.PI / 2);
    this.sealMat = new MeshBasicMaterial({ color: '#7dff8a', transparent: true, opacity: 0.2, depthWrite: false });
    this.sealMesh = new Mesh(this.sealGeo, this.sealMat);
    this.sealMesh.visible = false;
    scene.add(this.sealMesh);

    this.restore({ x: start.x, z: start.z, hp: P.maxHp, mana: P.baseMana, upgrades: { ...NO_UPGRADES } });
  }

  get sealActive(): boolean {
    return this.sealTime > 0;
  }

  get dashing(): boolean {
    return this.dashTime > 0;
  }

  get invulnerable(): boolean {
    return this.iFrames > 0;
  }

  get alive(): boolean {
    return this.hp > 0;
  }

  /** Sætter tilstanden (bruges til nyt spil og checkpoint). Nulstiller timere. */
  restore(s: PlayerSnapshot): void {
    this.x = s.x;
    this.z = s.z;
    this.hp = s.hp;
    this.upgrades = { ...s.upgrades };
    this.applyStats();
    this.mana = Math.min(this.maxMana, s.mana);
    this.cd.sword = 0;
    this.cd.pistol = 0;
    this.cd.holy = 0;
    this.cd.seal = 0;
    this.cd.dash = 0;
    this.swing = 0;
    this.dashTime = 0;
    this.iFrames = 0;
    this.flash = 0;
    this.sealTime = 0;
    this.humanoid.root.position.set(this.x, 0, this.z);
  }

  snapshot(): PlayerSnapshot {
    return { x: this.x, z: this.z, hp: this.hp, mana: this.mana, upgrades: { ...this.upgrades } };
  }

  /** Opdaterer bevægelse, sigte, timere og udseende. move er normaliseret i skærmens retninger. */
  update(dt: number, move: { x: number; z: number }, aim: Point, solids: Circle[], half: number): void {
    this.age += dt;
    for (const k of Object.keys(this.cd) as (keyof typeof this.cd)[]) {
      this.cd[k] = Math.max(0, this.cd[k] - dt);
    }
    this.swing = Math.max(0, this.swing - dt);
    this.iFrames = Math.max(0, this.iFrames - dt);
    this.flash = Math.max(0, this.flash - dt);
    this.sealTime = Math.max(0, this.sealTime - dt);
    this.dashTime = Math.max(0, this.dashTime - dt);
    this.mana = Math.min(this.maxMana, this.mana + P.manaRegen * dt);

    let vx: number;
    let vz: number;
    if (this.dashTime > 0) {
      vx = this.dashDx * P.dashSpeed;
      vz = this.dashDz * P.dashSpeed;
    } else {
      vx = move.x * P.speed;
      vz = move.z * P.speed;
    }
    const moving = Math.hypot(vx, vz) > 0.1;
    this.x += vx * dt;
    this.z += vz * dt;
    resolveCircle(this, P.radius, solids, half);

    // Sigtet følger musen direkte, så målingen på jordplanet er præcis.
    if (Math.hypot(aim.x - this.x, aim.z - this.z) > 0.01) {
      this.facing = Math.atan2(aim.x - this.x, aim.z - this.z);
    }

    if (moving) this.walkPhase += dt * 9;
    this.updateModel(moving);
    this.updateSealMesh();
  }

  /** Sabelhug i retningen af sigtet. Returnerer null hvis cooldown er aktiv. */
  trySwing(): SwordSwing | null {
    if (this.cd.sword > 0 || this.dashing) return null;
    this.cd.sword = P.sword.cooldown;
    this.swing = P.sword.swingTime;
    return {
      x: this.x,
      z: this.z,
      facing: this.facing,
      range: this.swordRange,
      arcHalf: P.sword.arcHalf,
      damage: this.swordDamage,
    };
  }

  /** Flintlåspistol: ubegrænset ammunition med genladningstid. */
  tryFire(): PistolShot | null {
    if (this.cd.pistol > 0 || this.dashing) return null;
    this.cd.pistol = P.pistol.reload;
    const dirX = Math.sin(this.facing);
    const dirZ = Math.cos(this.facing);
    return {
      x: this.x + dirX * 0.7,
      y: SHOT_HEIGHT,
      z: this.z + dirZ * 0.7,
      dirX,
      dirZ,
      damage: P.pistol.damage,
    };
  }

  /** Helligt lys: kegle foran kongen. Bruger mana. */
  tryHoly(): HolyCone | null {
    const h = P.holy;
    if (this.cd.holy > 0 || this.mana < h.manaCost) return null;
    this.mana -= h.manaCost;
    this.cd.holy = h.cooldown;
    return {
      x: this.x,
      z: this.z,
      facing: this.facing,
      length: h.length,
      halfAngle: h.halfAngle,
      damage: h.damage,
      stun: h.stun,
    };
  }

  /** Beskyttelsesseglet: et område omkring kongen der reducerer skade. Bruger mana. */
  trySeal(): boolean {
    if (this.cd.seal > 0 || this.mana < P.seal.manaCost) return false;
    this.mana -= P.seal.manaCost;
    this.cd.seal = P.seal.cooldown;
    this.sealTime = P.seal.duration;
    this.sealX = this.x;
    this.sealZ = this.z;
    return true;
  }

  /** Undvigelse. Giver usårlighed under hele udfaldet. */
  tryDash(move: { x: number; z: number }): boolean {
    if (this.cd.dash > 0 || this.dashing) return false;
    let dx = move.x;
    let dz = move.z;
    if (dx === 0 && dz === 0) {
      dx = Math.sin(this.facing);
      dz = Math.cos(this.facing);
    }
    this.dashDx = dx;
    this.dashDz = dz;
    this.dashTime = P.dashTime;
    this.iFrames = Math.max(this.iFrames, P.dashTime + 0.05);
    this.cd.dash = P.dashCooldown;
    return true;
  }

  /** Påfører skade. Returnerer den faktiske skade (0 hvis usårlig eller død). */
  takeDamage(amount: number): number {
    if (this.iFrames > 0 || this.hp <= 0) return 0;
    let dmg = amount;
    if (this.isInSeal(this.x, this.z)) dmg *= 1 - this.sealReduction;
    this.hp = Math.max(0, this.hp - dmg);
    this.iFrames = P.hitIFrames;
    this.flash = HIT_FLASH;
    return dmg;
  }

  heal(): void {
    this.hp = Math.min(P.maxHp, this.hp + P.heal);
  }

  isInSeal(x: number, z: number): boolean {
    if (this.sealTime <= 0) return false;
    return Math.hypot(x - this.sealX, z - this.sealZ) <= this.sealRadius;
  }

  applyUpgrade(kind: keyof Upgrades): void {
    this.upgrades[kind] = true;
    this.applyStats();
    if (kind === 'mana') this.mana = Math.min(this.maxMana, this.mana + (P.upgradedMana - P.baseMana));
  }

  dispose(): void {
    this.scene.remove(this.humanoid.root);
    disposeHumanoid(this.humanoid);
    this.scene.remove(this.sealMesh);
    this.sealGeo.dispose();
    this.sealMat.dispose();
  }

  private applyStats(): void {
    const u = this.upgrades;
    this.swordDamage = u.sword ? P.sword.upgradedDamage : P.sword.damage;
    this.swordRange = u.sword ? P.sword.upgradedRange : P.sword.range;
    this.maxMana = u.mana ? P.upgradedMana : P.baseMana;
    this.sealRadius = u.shield ? P.seal.upgradedRadius : P.seal.radius;
    this.sealReduction = u.shield ? P.seal.upgradedReduction : P.seal.reduction;
  }

  private updateModel(moving: boolean): void {
    const h = this.humanoid;
    const root = h.root;
    root.position.set(this.x, 0, this.z);
    root.rotation.y = this.facing;
    // Blink under usårlighed, så det er tydeligt at kongen er beskyttet.
    root.visible = this.iFrames > 0 ? Math.floor(this.iFrames * 20) % 2 === 0 : true;

    setRestPose(h, this.age);
    const stride = moving ? Math.sin(this.walkPhase) * 0.7 : 0;
    h.legR.rotation.x = stride;
    h.legL.rotation.x = -stride;

    const s = this.swing > 0 ? 1 - this.swing / P.sword.swingTime : 0;
    h.armR.rotation.x = -1.2 - Math.sin(s * Math.PI) * 0.9;
    setFlash(h, this.flash > 0 ? this.flash / HIT_FLASH : 0);
  }

  private updateSealMesh(): void {
    const active = this.sealTime > 0;
    this.sealMesh.visible = active;
    if (!active) return;
    this.sealMesh.position.set(this.sealX, 0.08, this.sealZ);
    this.sealMesh.scale.setScalar(this.sealRadius);
    this.sealMat.opacity = 0.16 + 0.06 * Math.sin(this.age * 4);
  }
}
