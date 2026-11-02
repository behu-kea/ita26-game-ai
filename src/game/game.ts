import { OrthographicCamera, PCFShadowMap, Plane, Raycaster, Vector2, Vector3, WebGLRenderer } from 'three';
import { CONFIG } from '../config';
import { AudioEngine } from '../audio';
import { Combat, type CombatContext } from '../combat/combat';
import { Effects } from '../fx/effects';
import { Input } from '../input';
import { Enemy, type EnemyMode } from '../entities/enemy';
import { Player, type PlayerSnapshot, type Upgrades } from '../entities/player';
import { Hud, type HudView } from '../ui/hud';
import { ZONE_DEFS, buildMap, isFree, type MapData } from '../world/map';
import { createWorld, type WorldScene } from '../world/scene';
import type { Circle, EnemyKind, Point, ZoneId } from '../types';
import { clamp, dist } from '../utils';

const P = CONFIG.player;
const ZONES: ZoneId[] = ['camp', 'lund', 'chapel'];
const ZONE_UPGRADE: Record<ZoneId, keyof Upgrades> = { camp: 'sword', lund: 'mana', chapel: 'shield' };
const UPGRADE_TEXT: Record<keyof Upgrades, string> = {
  sword: 'Din sabel er skærpet: større skade og længere rækkevidde.',
  mana: 'Din magi er stærkere: mere maksimal mana.',
  shield: 'Beskyttelsesmagien er forbedret: større felt og mindre skade.',
};
const ZONE_ENTER: Record<ZoneId, string> = {
  camp: 'Den forladte lejr. Ildstederne er slukket, men soldaterne er vågnet.',
  lund: 'De dødes lund. Musketererne sigter fra mellem gravene.',
  chapel: 'Det ødelagte kapel. Her ligger det sidste segl.',
};
const TUTORIAL = [
  'Bevæg dig med WASD eller piletasterne. Sigt med musen.',
  'Venstre museknap: sabelangreb. Højre museknap: flintlåspistol (genladning efter skud).',
  'Q: helligt lys · E: beskyttelsessegl · Mellemrum: undvig · F: interagér · Esc: pause',
];
const TUTORIAL_STEP_TIME = 9;
const TUTORIAL_MOVE_DISTANCE = 5;
const PICKUP_RANGE = 1.3;
const END_DELAY = 1.4;
const HINT_TOWER_RANGE = 12;

type Phase = 'menu' | 'playing' | 'paused' | 'ended';
type Stage = 'explore' | 'defense' | 'boss';
type Pending = 'wave' | 'boss' | null;
type Tag = ZoneId | 'wave' | 'boss' | 'pursuit';
interface ZoneState {
  spawned: boolean;
  sealed: boolean;
}
type ZoneStates = Record<ZoneId, ZoneState>;
interface Checkpoint {
  player: PlayerSnapshot;
  zones: ZoneStates;
  pickups: boolean[];
}

function freshZones(): ZoneStates {
  return {
    camp: { spawned: false, sealed: false },
    lund: { spawned: false, sealed: false },
    chapel: { spawned: false, sealed: false },
  };
}

function cloneZones(z: ZoneStates): ZoneStates {
  return { camp: { ...z.camp }, lund: { ...z.lund }, chapel: { ...z.chapel } };
}

function lowerName(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

/** Spilets tilstand, forløb og samspil mellem modulerne. Kører én sløjfe via requestAnimationFrame. */
export class Game {
  private readonly map: MapData;
  private readonly world: WorldScene;
  private readonly renderer: WebGLRenderer;
  private readonly camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 200);
  private readonly input: Input;
  private readonly audio = new AudioEngine();
  private readonly fx: Effects;
  private readonly combat: Combat;
  private readonly hud: Hud;
  private readonly raycaster = new Raycaster();
  private readonly ground = new Plane(new Vector3(0, 1, 0), 0);
  private readonly aimPoint = new Vector3();
  private readonly ndc = new Vector2();
  private readonly projected = new Vector3();
  private readonly enemies: Enemy[] = [];
  private readonly tags = new Map<Enemy, Tag>();
  private readonly focus: Point;
  private readonly pickupTaken: boolean[];
  private player: Player;
  private phase: Phase = 'menu';
  private stage: Stage = 'explore';
  private zones: ZoneStates = freshZones();
  private protection: number = CONFIG.tower.maxProtection;
  private pending: Pending = null;
  private timer = 0;
  private waveIndex = 0;
  private boss: Enemy | null = null;
  private aim: Point;
  private shake = 0;
  private time = 0;
  private last: number;
  private checkpoint: Checkpoint | null = null;
  private endResult: 'won' | 'lost' | null = null;
  private endText = '';
  private endTimer = 0;
  private tutorialStep = -1;
  private tutorialTimer = 0;
  private tutorialMoved = 0;
  private heartTimer = 0;
  private ambientTimer = 14;

  constructor(container: HTMLElement) {
    this.map = buildMap();
    this.world = createWorld(this.map);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFShadowMap;
    container.appendChild(this.renderer.domElement);

    this.input = new Input(this.renderer.domElement);
    this.fx = new Effects(this.world.scene);
    this.combat = new Combat(this.world.scene, this.fx, (name) => this.audio.play(name));
    this.hud = new Hud({
      onStart: () => this.start(),
      onToggleSound: () => this.toggleSound(),
      onResume: () => this.resume(),
      onRestart: () => this.newGame(),
      onRetry: () => this.retry(),
      onNewGame: () => this.newGame(),
    });

    this.player = new Player(this.world.scene, this.map.start);
    this.pickupTaken = this.map.pickups.map(() => false);
    this.focus = { x: this.map.start.x, z: this.map.start.z };
    this.aim = { x: this.map.start.x, z: this.map.start.z - 1 };
    this.last = performance.now();

    this.hud.setSoundLabel(this.audio.isMuted);
    this.hud.showHud(false);
    this.hud.showScreen('menu');
    this.onResize();
    this.updateCamera(0);

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('pointerdown', () => this.audio.unlock());
    this.renderer.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.phase = 'ended';
      this.hud.setError('Grafikken blev afbrudt. Genindlæs siden for at fortsætte.');
      this.hud.showHud(false);
      this.hud.showScreen('error');
    });

    requestAnimationFrame(this.frame);
  }

  private readonly frame = (now: number): void => {
    requestAnimationFrame(this.frame);
    const dt = clamp((now - this.last) / 1000, 0, 0.05);
    this.last = now;

    if (this.input.consume('mute')) this.toggleSound();
    if (this.input.consume('pause')) this.togglePause();

    const playing = this.phase === 'playing';
    const sim = playing ? dt : 0;
    this.updateCamera(sim);
    if (playing) this.simulate(dt);

    this.time += sim;
    this.world.update(this.time, sim, this.player);
    this.fx.update(sim);
    this.audio.update(sim);
    this.hud.tickMessage(sim);
    if (this.phase !== 'menu' && this.phase !== 'ended') this.hud.update(this.buildView());

    this.renderer.render(this.world.scene, this.camera);
    this.input.clearPending();
  };

  private start(): void {
    this.audio.unlock();
    this.newGame();
  }

  private newGame(): void {
    this.resetState();
    this.player.dispose();
    this.player = new Player(this.world.scene, this.map.start);
    this.checkpoint = null;
    this.focus.x = this.map.start.x;
    this.focus.z = this.map.start.z;
    this.tutorialStep = 0;
    this.tutorialTimer = 0;
    this.tutorialMoved = 0;
    this.beginPlay('Skovens udkant. Find de tre kongelige segl og vend tilbage til Rundetårn.', 6);
  }

  /** Genindlæser tilstanden fra checkpointet før slutkampen. */
  private retry(): void {
    const cp = this.checkpoint;
    if (!cp) {
      this.newGame();
      return;
    }
    this.resetState();
    this.zones = cloneZones(cp.zones);
    this.pickupTaken.splice(0, this.pickupTaken.length, ...cp.pickups);
    this.player.restore({ ...cp.player, hp: P.maxHp, mana: this.player.maxMana });
    for (const z of ZONES) if (this.zones[z].sealed) this.world.setSealCollected(z);
    this.pickupTaken.forEach((taken, i) => {
      if (taken) this.world.setPickupTaken(i);
    });
    this.beginPlay('Du er tilbage ved Rundetårn. Tryk F for at tænde beskyttelsen igen.', 5);
  }

  private beginPlay(message: string, seconds: number): void {
    this.phase = 'playing';
    this.hud.showScreen(null);
    this.hud.showHud(true);
    this.hud.showMessage(message, seconds);
  }

  private togglePause(): void {
    if (this.phase === 'playing') {
      this.phase = 'paused';
      this.hud.showScreen('pause');
      this.audio.suspend();
    } else if (this.phase === 'paused') {
      this.resume();
    }
  }

  private resume(): void {
    if (this.phase !== 'paused') return;
    this.phase = 'playing';
    this.hud.showScreen(null);
    this.audio.resume();
  }

  private toggleSound(): void {
    this.hud.setSoundLabel(this.audio.toggleMuted());
  }

  /** Nulstiller verdenen og alle forløbstilstande. Lytter og knapper er allerede bundet. */
  private resetState(): void {
    for (const e of this.enemies) e.dispose();
    this.enemies.length = 0;
    this.tags.clear();
    this.combat.clear();
    this.fx.clear();
    this.world.reset();
    this.hud.clearMessage();

    this.zones = freshZones();
    this.pickupTaken.fill(false);
    this.stage = 'explore';
    this.protection = CONFIG.tower.maxProtection;
    this.pending = null;
    this.timer = 0;
    this.waveIndex = 0;
    this.boss = null;
    this.shake = 0;
    this.endResult = null;
    this.endText = '';
    this.endTimer = 0;
    this.heartTimer = 0;
    this.ambientTimer = 14;
    this.aim = { x: this.player.x, z: this.player.z - 1 };
  }

  private simulate(dt: number): void {
    const p = this.player;
    const move = this.input.move;
    const solids = this.map.solids;
    const half = CONFIG.map.half;

    p.update(dt, move, this.computeAim(), solids, half);

    if (this.input.consume('attack')) {
      const sw = p.trySwing();
      if (sw) this.combat.swing(sw, this.enemies);
    }
    if (this.input.consume('fire')) {
      const shot = p.tryFire();
      if (shot) this.combat.fire(shot);
    }
    if (this.input.consume('holy')) {
      const cone = p.tryHoly();
      if (cone) this.combat.holy(cone, this.enemies);
    }
    if (this.input.consume('seal') && p.trySeal()) this.audio.play('seal');
    if (this.input.consume('dash')) p.tryDash(move);
    if (this.input.consume('interact')) this.interact();

    const pc: Circle = { x: p.x, z: p.z, r: P.radius };
    const goal = this.enemyGoal(pc);
    for (const e of this.enemies) e.update(dt, pc, goal, solids, half);

    const ctx: CombatContext = {
      player: p,
      enemies: this.enemies,
      tower: this.map.tower,
      towerExposed: this.stage !== 'explore',
      solids,
      half,
    };
    const report = this.combat.update(dt, ctx);
    if (report.towerDamage > 0) this.protection = Math.max(0, this.protection - report.towerDamage);
    if (report.playerDamage > 0) this.shake = Math.min(1, this.shake + 0.6);

    for (const e of [...this.enemies]) if (e.done) this.removeEnemy(e);

    this.collectPickups();
    this.updateZones();
    this.updateDefense(dt);
    this.updateTutorial(dt, move);
    this.updateAmbient(dt);
    this.checkOutcome();

    if (this.endResult) {
      this.endTimer -= dt;
      if (this.endTimer <= 0) this.finish();
    }
  }

  private computeAim(): Point {
    this.ndc.set(this.input.pointer.x, this.input.pointer.y);
    this.raycaster.setFromCamera(this.ndc, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.ground, this.aimPoint);
    if (hit) this.aim = { x: hit.x, z: hit.z };
    return this.aim;
  }

  private updateCamera(dt: number): void {
    const p = this.player;
    const k = 1 - Math.exp(-CONFIG.camera.follow * dt);
    this.focus.x += (p.x - this.focus.x) * k;
    this.focus.z += (p.z - this.focus.z) * k;
    this.shake = Math.max(0, this.shake - CONFIG.camera.shakeDecay * dt);

    const s = dt > 0 ? this.shake * 0.35 : 0;
    const fx = this.focus.x + (Math.random() * 2 - 1) * s;
    const fz = this.focus.z + (Math.random() * 2 - 1) * s;
    this.camera.position.set(fx, CONFIG.camera.offsetY, fz + CONFIG.camera.offsetZ);
    this.camera.lookAt(fx, 0, fz);
    this.camera.updateMatrixWorld();
  }

  private onResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    const halfH = CONFIG.camera.viewHeight / 2;
    const halfW = halfH * (w / Math.max(1, h));
    this.camera.left = -halfW;
    this.camera.right = halfW;
    this.camera.top = halfH;
    this.camera.bottom = -halfH;
    this.camera.updateProjectionMatrix();
  }

  private interact(): void {
    const p = this.player;
    for (const z of ZONES) {
      if (this.zones[z].sealed || !this.zoneCleared(z)) continue;
      const seal = ZONE_DEFS[z].seal;
      if (dist(p.x, p.z, seal.x, seal.z) <= P.interactRange + 0.6) {
        this.takeSeal(z);
        return;
      }
    }

    const t = this.map.tower;
    if (dist(p.x, p.z, t.x, t.z) <= CONFIG.tower.interactDistance && this.stage === 'explore') {
      const n = this.sealCount();
      if (n < ZONES.length) {
        this.hud.showMessage(`Rundetårn kræver alle tre segl. Du har ${n}/3.`, 3);
        return;
      }
      this.activateTower();
    }
  }

  private takeSeal(z: ZoneId): void {
    this.zones[z].sealed = true;
    this.world.setSealCollected(z);
    const kind = ZONE_UPGRADE[z];
    this.player.applyUpgrade(kind);
    const seal = ZONE_DEFS[z].seal;
    this.fx.burst(seal.x, 1, seal.z, '#f2c14e', 18, 3);
    this.audio.play('seal');
    this.audio.play('upgrade');
    this.hud.showMessage(`Kongeligt segl ${this.sealCount()}/3 fundet. ${UPGRADE_TEXT[kind]}`, 6);
  }

  private activateTower(): void {
    this.checkpoint = {
      player: this.player.snapshot(),
      zones: cloneZones(this.zones),
      pickups: this.pickupTaken.slice(),
    };
    this.stage = 'defense';
    this.protection = CONFIG.tower.maxProtection;
    this.world.setTowerProtection(1);
    for (const e of [...this.enemies]) if (this.tags.get(e) === 'pursuit') this.removeEnemy(e);
    this.pending = 'wave';
    this.timer = CONFIG.tower.waveDelay;
    this.waveIndex = 0;
    this.hud.showMessage(
      'Rundetårns beskyttelse er tændt! Advarsel: Tårnet kan kun tage skade nu. Brydes beskyttelsen, er spillet tabt.',
      6,
    );
    this.audio.play('warn');
  }

  private updateZones(): void {
    const p = this.player;
    for (const z of ZONES) {
      if (this.zones[z].spawned || !this.unlocked(z)) continue;
      const def = ZONE_DEFS[z];
      if (dist(p.x, p.z, def.center.x, def.center.z) > def.radius) continue;
      this.spawnZone(z);
    }
  }

  private unlocked(z: ZoneId): boolean {
    if (z === 'camp') return true;
    return z === 'lund' ? this.zones.camp.sealed : this.zones.lund.sealed;
  }

  private spawnZone(z: ZoneId): void {
    const def = ZONE_DEFS[z];
    this.zones[z].spawned = true;
    for (const group of def.spawns) {
      for (let i = 0; i < group.count; i++) {
        const pt = this.freePoint(def.center, def.radius * 0.45, def.radius * 0.75);
        this.addEnemy(group.kind, pt.x, pt.z, z, 'normal');
      }
    }
    if (z !== 'camp') this.spawnPursuer();
    this.hud.showMessage(ZONE_ENTER[z], 4);
  }

  /** Bøddelen forfølger spilleren i en iscenesat sekvens. Han kan forsinkes, men ikke dø før slutkampen. */
  private spawnPursuer(): void {
    const pt = this.freePoint(this.player, 12, 14, CONFIG.enemies.executioner.radius);
    this.addEnemy('executioner', pt.x, pt.z, 'pursuit', 'pursuit');
    this.hud.showMessage('Tunge skridt bag dig. Bøddelen forfølger dig, løb!', 4);
    this.shake = Math.max(this.shake, 0.4);
    this.audio.play('warn');
  }

  private updateDefense(dt: number): void {
    if (this.stage === 'explore') return;
    if (this.pending) {
      this.timer -= dt;
      if (this.timer > 0) return;
      if (this.pending === 'wave') this.spawnWave();
      else this.spawnBoss();
      return;
    }
    if (this.stage !== 'defense') return;
    const waveAlive = this.enemies.some((e) => this.tags.get(e) === 'wave' && e.alive);
    if (waveAlive) return;
    if (this.waveIndex < CONFIG.waves.length) {
      this.pending = 'wave';
      this.timer = CONFIG.tower.waveDelay;
    } else {
      this.pending = 'boss';
      this.timer = CONFIG.tower.bossDelay;
    }
  }

  private spawnWave(): void {
    const wave = CONFIG.waves[this.waveIndex];
    this.waveIndex++;
    this.pending = null;
    const t = this.map.tower;
    for (let i = 0; i < wave.soldiers; i++) {
      const pt = this.freePoint(t, CONFIG.tower.approachRadius - 1.5, CONFIG.tower.approachRadius + 1.5);
      this.addEnemy('soldier', pt.x, pt.z, 'wave', 'normal');
    }
    for (let i = 0; i < wave.musketeers; i++) {
      const pt = this.freePoint(t, CONFIG.tower.approachRadius - 1.5, CONFIG.tower.approachRadius + 1.5);
      this.addEnemy('musketeer', pt.x, pt.z, 'wave', 'normal');
    }
    this.hud.showMessage(`Bølge ${this.waveIndex} af ${CONFIG.waves.length} nærmer sig tårnet.`, 3);
  }

  private spawnBoss(): void {
    this.pending = null;
    this.stage = 'boss';
    const pt = this.freePoint(this.map.tower, 13, 15, CONFIG.enemies.executioner.radius);
    this.boss = this.addEnemy('executioner', pt.x, pt.z, 'boss', 'boss');
    this.hud.showMessage('Bøddelen træder frem af tågen. Besejr ham for at redde Rundetårn.', 5);
    this.audio.play('warn');
    this.shake = Math.max(this.shake, 0.6);
  }

  private addEnemy(kind: EnemyKind, x: number, z: number, tag: Tag, mode: EnemyMode): Enemy {
    const e = new Enemy(this.world.scene, kind, x, z, mode);
    e.alert();
    this.enemies.push(e);
    this.tags.set(e, tag);
    return e;
  }

  private removeEnemy(e: Enemy): void {
    const i = this.enemies.indexOf(e);
    if (i >= 0) this.enemies.splice(i, 1);
    this.tags.delete(e);
    e.dispose();
  }

  /** Et tilfældigt punkt i en ring om centrum, der ikke ligger i en forhindring. */
  private freePoint(center: Point, rMin: number, rMax: number, radius: number = CONFIG.enemies.soldier.radius): Point {
    for (let i = 0; i < 40; i++) {
      const a = Math.random() * Math.PI * 2;
      const d = rMin + Math.random() * (rMax - rMin);
      const x = center.x + Math.sin(a) * d;
      const z = center.z + Math.cos(a) * d;
      if (isFree(x, z, radius, this.map.solids, CONFIG.map.half)) return { x, z };
    }
    return { x: center.x, z: center.z };
  }

  private zoneCleared(z: ZoneId): boolean {
    return this.zones[z].spawned && !this.enemies.some((e) => this.tags.get(e) === z && e.alive);
  }

  private sealCount(): number {
    return ZONES.filter((z) => this.zones[z].sealed).length;
  }

  private collectPickups(): void {
    const p = this.player;
    this.map.pickups.forEach((pt, i) => {
      if (this.pickupTaken[i] || dist(p.x, p.z, pt.x, pt.z) > PICKUP_RANGE) return;
      this.pickupTaken[i] = true;
      this.world.setPickupTaken(i);
      p.heal();
      this.audio.play('pickup');
      this.hud.showMessage('Du finder en helbredende urt.', 2.5);
    });
  }

  private updateTutorial(dt: number, move: { x: number; z: number }): void {
    if (this.tutorialStep < 0) return;
    if (this.tutorialStep === 0) {
      this.tutorialMoved += Math.hypot(move.x, move.z) * P.speed * dt;
      if (this.tutorialMoved >= TUTORIAL_MOVE_DISTANCE) this.tutorialStep = 1;
      return;
    }
    this.tutorialTimer += dt;
    if (this.tutorialTimer < TUTORIAL_STEP_TIME) return;
    this.tutorialTimer = 0;
    this.tutorialStep = this.tutorialStep === 1 ? 2 : -1;
  }

  private updateAmbient(dt: number): void {
    this.ambientTimer -= dt;
    if (this.ambientTimer <= 0) {
      this.ambientTimer = 12 + Math.random() * 14;
      this.audio.play('twig');
    }
    if (this.player.alive && this.player.hp < 30) {
      this.heartTimer -= dt;
      if (this.heartTimer <= 0) {
        this.heartTimer = 0.9;
        this.audio.play('heartbeat');
      }
    }
  }

  private checkOutcome(): void {
    if (this.endResult) return;
    if (!this.player.alive) {
      this.conclude('lost', 'Christian d. 6. faldt i skoven, og Rundetårn står uden sin konge.');
    } else if (this.stage !== 'explore' && this.protection <= 0) {
      this.conclude('lost', 'Beskyttelsen brød sammen, og de forbandte soldater nåede Rundetårn.');
    } else if (this.stage === 'boss' && this.boss && !this.boss.alive) {
      this.conclude('won', 'Bøddelen er besejret. Rundetårn står stadig, og natten er forbi.');
    }
  }

  private conclude(result: 'won' | 'lost', text: string): void {
    this.endResult = result;
    this.endText = text;
    this.endTimer = END_DELAY;
  }

  private finish(): void {
    const won = this.endResult === 'won';
    this.phase = 'ended';
    this.endResult = null;
    this.hud.showHud(false);
    this.hud.setEnd(
      won ? 'Rundetårn står' : 'Forbandelsen vandt',
      this.endText,
      !won && this.checkpoint !== null,
    );
    this.hud.showScreen('end');
    this.audio.play(won ? 'victory' : 'defeat');
  }

  private enemyGoal(pc: Circle): Circle {
    const t = this.map.tower;
    if (this.stage !== 'explore' && dist(pc.x, pc.z, t.x, t.z) > CONFIG.tower.defenseRadius) return t;
    return pc;
  }

  private objective(): string {
    if (this.stage === 'boss') return 'Besejr bøddelen';
    if (this.stage === 'defense') return 'Forsvar Rundetårn';
    for (const z of ZONES) {
      if (this.zones[z].sealed) continue;
      const name = lowerName(ZONE_DEFS[z].name);
      if (!this.zones[z].spawned) return `Find ${name}`;
      if (!this.zoneCleared(z)) return `Ryd ${name}`;
      return 'Tag det kongelige segl (F)';
    }
    return 'Vend tilbage til Rundetårn og tænd beskyttelsen (F)';
  }

  private indicatorTarget(): Point | null {
    if (this.stage === 'boss') return this.boss?.alive ? this.boss : null;
    if (this.stage === 'defense') return this.map.tower;
    if (this.sealCount() >= ZONES.length) return this.map.tower;
    for (const z of ZONES) {
      if (this.zones[z].sealed) continue;
      if (!this.zones[z].spawned) return ZONE_DEFS[z].center;
      return this.zoneCleared(z) ? ZONE_DEFS[z].seal : null;
    }
    return null;
  }

  private indicatorView(): HudView['indicator'] {
    const t = this.indicatorTarget();
    if (!t) return { visible: false, ndcX: 0, ndcY: 0 };
    this.projected.set(t.x, 0.5, t.z).project(this.camera);
    const x = this.projected.x;
    const y = this.projected.y;
    const onScreen = Math.abs(x) <= 0.9 && Math.abs(y) <= 0.9;
    return { visible: !onScreen, ndcX: x, ndcY: y };
  }

  private currentHint(): string | null {
    const p = this.player;
    const t = this.map.tower;
    if (this.stage === 'explore' && dist(p.x, p.z, t.x, t.z) <= HINT_TOWER_RANGE && this.sealCount() < ZONES.length) {
      return 'Rundetårn kan først tændes, når du har alle tre segl.';
    }
    for (const z of ZONES) {
      if (this.zones[z].sealed || !this.zoneCleared(z)) continue;
      const seal = ZONE_DEFS[z].seal;
      if (dist(p.x, p.z, seal.x, seal.z) <= P.interactRange + 0.6) return 'Tryk F for at tage det kongelige segl.';
    }
    if (this.enemies.some((e) => this.tags.get(e) === 'pursuit' && e.alive)) {
      return 'Bøddelen forfølger dig. Forsink ham med sabel eller helligt lys, eller undvig.';
    }
    if (this.stage === 'defense') return 'Bliv tæt på Rundetårn, så fjenderne jagter dig dér.';
    if (this.stage === 'boss') return 'Bøddelen laver varslede stormløb. Undgå hans linje og lamm ham med helligt lys.';
    if (this.tutorialStep >= 0) return TUTORIAL[this.tutorialStep];
    return null;
  }

  private countdownText(): string | null {
    if (!this.pending) return null;
    const s = Math.ceil(Math.max(0, this.timer));
    if (this.pending === 'wave') return `Bølge ${this.waveIndex + 1} af ${CONFIG.waves.length} om ${s} s`;
    return `Bøddelen kommer om ${s} s`;
  }

  private buildView(): HudView {
    const p = this.player;
    const cd = p.cd;
    return {
      hp: p.hp,
      maxHp: P.maxHp,
      mana: p.mana,
      maxMana: p.maxMana,
      cooldowns: {
        sword: cd.sword / P.sword.cooldown,
        pistol: cd.pistol / P.pistol.reload,
        holy: cd.holy / P.holy.cooldown,
        seal: cd.seal / P.seal.cooldown,
        dash: cd.dash / P.dashCooldown,
      },
      sealCount: this.sealCount(),
      objective: this.objective(),
      hint: this.currentHint(),
      tower: { visible: this.stage !== 'explore', protection: this.protection / CONFIG.tower.maxProtection },
      boss: {
        visible: this.stage === 'boss' && !!this.boss && this.boss.alive,
        hp: this.boss ? this.boss.hp / this.boss.maxHp : 0,
      },
      countdown: this.countdownText(),
      indicator: this.indicatorView(),
    };
  }
}
