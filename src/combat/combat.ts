import { Mesh, MeshBasicMaterial, Scene, SphereGeometry } from 'three';
import type { SfxName } from '../audio';
import { CONFIG } from '../config';
import type { Enemy, Strike, Telegraph } from '../entities/enemy';
import type { HolyCone, PistolShot, Player, SwordSwing } from '../entities/player';
import type { Effects } from '../fx/effects';
import type { Circle } from '../types';
import { isFree } from '../world/map';
import { angleDiff, dist } from '../utils';

const PROJECTILE_Y = 1.3;
const MAX_STEP = 0.25;
const TELEGRAPH_COLOR = '#d9523a';
const GHOST = '#7dff6a';

interface Projectile {
  mesh: Mesh;
  x: number;
  y: number;
  z: number;
  dx: number;
  dz: number;
  speed: number;
  travelled: number;
  maxRange: number;
  damage: number;
  towerDamage: number;
  fromEnemy: boolean;
}

export interface CombatContext {
  player: Player;
  enemies: Enemy[];
  tower: Circle;
  /** True under det afsluttende forsvar, hvor tårnet kan tage skade. */
  towerExposed: boolean;
  solids: Circle[];
  half: number;
}

export interface CombatReport {
  playerDamage: number;
  towerDamage: number;
}

/** Om et punkt med radius er inden for en sektor (kegle/bue) foran origo. */
function inSector(
  ox: number,
  oz: number,
  facing: number,
  arcHalf: number,
  range: number,
  tx: number,
  tz: number,
  tr: number,
): boolean {
  const dx = tx - ox;
  const dz = tz - oz;
  const d = Math.hypot(dx, dz);
  if (d > range + tr) return false;
  if (d <= tr) return true;
  const ang = Math.atan2(dx, dz);
  return Math.abs(angleDiff(ang, facing)) <= arcHalf + Math.asin(Math.min(1, tr / d));
}

/** Kamp: sabel, pistol, helligt lys, fjendeangreb, projektiler og bøddelens opladning. */
export class Combat {
  private readonly projectiles: Projectile[] = [];
  private readonly shotGeo = new SphereGeometry(0.14, 8, 6);
  private readonly playerMat = new MeshBasicMaterial({ color: '#ffd27a' });
  private readonly enemyMat = new MeshBasicMaterial({ color: GHOST });

  constructor(
    private readonly scene: Scene,
    private readonly fx: Effects,
    private readonly sfx: (name: SfxName) => void,
  ) {}

  /** Sabelhug: sektor foran kongen. Returnerer antal ramte fjender. */
  swing(sw: SwordSwing, enemies: Enemy[]): number {
    this.fx.sector(sw.x, sw.z, sw.facing, sw.arcHalf, sw.range, CONFIG.player.sword.swingTime, '#f2e6b8');
    this.sfx('swing');
    let hits = 0;
    for (const e of enemies) {
      if (!e.alive) continue;
      if (!inSector(sw.x, sw.z, sw.facing, sw.arcHalf, sw.range, e.x, e.z, e.radius)) continue;
      if (e.receiveHit(sw.damage, 0, sw.x, sw.z)) {
        hits++;
        this.fx.burst(e.x, 1, e.z, '#c83a2b', 10, 4);
      }
    }
    if (hits > 0) this.sfx('hit');
    return hits;
  }

  /** Flintlåspistol: et hurtigt projektil, der stopper ved første fjende eller forhindring. */
  fire(shot: PistolShot): void {
    this.fx.flash(shot.x + shot.dirX * 0.6, PROJECTILE_Y, shot.z + shot.dirZ * 0.6, '#ffd27a');
    this.sfx('shot');
    this.spawn(shot.x, shot.z, shot.dirX, shot.dirZ, false, shot.damage, 0, 42, CONFIG.player.pistol.range);
  }

  /** Helligt lys: kegle der skader og lammer fjender i området. Returnerer antal ramte. */
  holy(cone: HolyCone, enemies: Enemy[]): number {
    this.fx.cone(cone.x, cone.z, cone.facing, cone.length, cone.halfAngle, CONFIG.player.holy.flashTime, '#c9ffb0');
    this.sfx('holy');
    let hits = 0;
    for (const e of enemies) {
      if (!e.alive) continue;
      if (!inSector(cone.x, cone.z, cone.facing, cone.halfAngle, cone.length, e.x, e.z, e.radius)) continue;
      if (e.receiveHit(cone.damage, cone.stun, cone.x, cone.z)) {
        hits++;
        this.fx.burst(e.x, 1, e.z, '#c9ffb0', 12, 3.5);
      }
    }
    return hits;
  }

  /**
   * Behandler fjendernes varsler, angreb, opladning og projektiler.
   * Kaldes efter at fjenderne er opdateret i samme frame.
   */
  update(dt: number, ctx: CombatContext): CombatReport {
    const report: CombatReport = { playerDamage: 0, towerDamage: 0 };

    for (const e of ctx.enemies) {
      for (const ev of e.takeEvents()) {
        switch (ev.type) {
          case 'telegraph':
            this.showTelegraph(ev.telegraph);
            break;
          case 'strike':
            this.resolveStrike(ev.strike, ctx, report);
            break;
          case 'enraged':
            this.fx.ring(e.x, e.z, 3, 0.6, GHOST);
            this.sfx('warn');
            break;
          case 'died':
            this.fx.burst(e.x, 1, e.z, GHOST, 16, 3);
            this.sfx('death');
            break;
          case 'vanished':
            this.fx.burst(e.x, 1, e.z, GHOST, 24, 2);
            this.sfx('warn');
            break;
        }
      }
    }

    for (const e of ctx.enemies) {
      if (!e.chargeCanHit) continue;
      const tower = ctx.tower;
      if (ctx.towerExposed && dist(e.x, e.z, tower.x, tower.z) <= e.radius + tower.r) {
        report.towerDamage += CONFIG.enemies.executioner.chargeTowerDamage;
        e.markChargeHit();
        this.fx.ring(tower.x, tower.z, tower.r + 0.5, 0.5, GHOST);
        this.sfx('stomp');
      } else if (dist(e.x, e.z, ctx.player.x, ctx.player.z) <= e.radius + CONFIG.player.radius + 0.1) {
        report.playerDamage += this.hurtPlayer(CONFIG.enemies.executioner.chargeDamage, ctx.player);
        e.markChargeHit();
        this.sfx('stomp');
      }
    }

    this.stepProjectiles(dt, ctx, report);
    return report;
  }

  /** Fjerner alle projektiler fra scenen. */
  clear(): void {
    for (const p of this.projectiles) this.scene.remove(p.mesh);
    this.projectiles.length = 0;
  }

  dispose(): void {
    this.clear();
    this.shotGeo.dispose();
    this.playerMat.dispose();
    this.enemyMat.dispose();
  }

  private showTelegraph(t: Telegraph): void {
    if (t.shape === 'sector') {
      this.fx.sector(t.x, t.z, t.facing, t.arcHalf, t.radius, t.duration, TELEGRAPH_COLOR);
    } else {
      this.fx.line(t.x, t.z, t.facing, t.length, t.width, t.duration, TELEGRAPH_COLOR);
    }
  }

  private resolveStrike(s: Strike, ctx: CombatContext, report: CombatReport): void {
    if (s.kind === 'shot') {
      this.spawn(s.x, s.z, s.dirX, s.dirZ, true, s.damage, s.towerDamage, CONFIG.enemies.musketeer.shotSpeed, CONFIG.enemies.musketeer.shotRange, s.y);
      return;
    }
    const p = ctx.player;
    if (inSector(s.x, s.z, s.facing, s.arcHalf, s.range, p.x, p.z, CONFIG.player.radius)) {
      report.playerDamage += this.hurtPlayer(s.damage, p);
      return;
    }
    const tower = ctx.tower;
    if (ctx.towerExposed && s.towerDamage > 0 && inSector(s.x, s.z, s.facing, s.arcHalf, s.range, tower.x, tower.z, tower.r)) {
      report.towerDamage += s.towerDamage;
      this.fx.burst(tower.x, 2, tower.z, GHOST, 8, 2.5);
      this.sfx('hit');
    }
  }

  /** Påfører kongen skade og returnerer den faktiske skade. */
  private hurtPlayer(amount: number, p: Player): number {
    const dealt = p.takeDamage(amount);
    if (dealt > 0) {
      this.fx.burst(p.x, 1.2, p.z, '#ff5a4a', 12, 4);
      this.sfx('hurt');
    }
    return dealt;
  }

  private spawn(
    x: number,
    z: number,
    dx: number,
    dz: number,
    fromEnemy: boolean,
    damage: number,
    towerDamage: number,
    speed: number,
    maxRange: number,
    y: number = PROJECTILE_Y,
  ): void {
    const mesh = new Mesh(this.shotGeo, fromEnemy ? this.enemyMat : this.playerMat);
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(fromEnemy ? 1 : 0.8);
    this.scene.add(mesh);
    this.projectiles.push({
      mesh,
      x,
      y,
      z,
      dx,
      dz,
      speed,
      travelled: 0,
      maxRange,
      damage,
      towerDamage,
      fromEnemy,
    });
  }

  /** Flytter projektiler i korte delskridt, så hurtige skud ikke springer over fjender. */
  private stepProjectiles(dt: number, ctx: CombatContext, report: CombatReport): void {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      const total = p.speed * dt;
      const steps = Math.max(1, Math.ceil(total / MAX_STEP));
      const stepLen = total / steps;
      let remove = false;

      for (let s = 0; s < steps && !remove; s++) {
        const px = p.x;
        const pz = p.z;
        p.x += p.dx * stepLen;
        p.z += p.dz * stepLen;
        p.travelled += stepLen;

        if (p.travelled >= p.maxRange || !isFree(p.x, p.z, 0.05, ctx.solids, ctx.half)) {
          remove = true;
          break;
        }

        if (p.fromEnemy) {
          if (ctx.towerExposed && dist(p.x, p.z, ctx.tower.x, ctx.tower.z) <= ctx.tower.r + 0.15) {
            report.towerDamage += p.towerDamage;
            this.fx.burst(p.x, p.y, p.z, GHOST, 8, 2.5);
            remove = true;
          } else if (dist(p.x, p.z, ctx.player.x, ctx.player.z) <= CONFIG.player.radius + 0.15) {
            report.playerDamage += this.hurtPlayer(p.damage, ctx.player);
            remove = true;
          }
        } else {
          for (const e of ctx.enemies) {
            if (!e.alive) continue;
            if (dist(p.x, p.z, e.x, e.z) <= e.radius + 0.2) {
              if (e.receiveHit(p.damage, 0, px, pz)) this.fx.burst(e.x, 1.2, e.z, '#c83a2b', 10, 4);
              this.sfx('hit');
              remove = true;
              break;
            }
          }
        }
      }

      p.mesh.position.set(p.x, p.y, p.z);
      if (remove) {
        this.scene.remove(p.mesh);
        this.projectiles.splice(i, 1);
      }
    }
  }
}
