import { CONFIG } from '../config';
import type { Circle, Point, Prop, ZoneDef, ZoneId } from '../types';
import { mulberry32, dist } from '../utils';

export interface MapData {
  zones: Record<ZoneId, ZoneDef>;
  props: Prop[];
  solids: Circle[];
  paths: Point[][];
  start: Point;
  pickups: Point[];
  tower: Circle;
}

const START: Point = { x: 0, z: 48 };

const PATHS: Point[][] = [
  [START, { x: 0, z: 38 }, { x: -14, z: 32 }, { x: -28, z: 26 }],
  [{ x: -28, z: 26 }, { x: -12, z: 22 }, { x: 8, z: 20 }, { x: 30, z: 14 }],
  [{ x: 30, z: 14 }, { x: 16, z: 0 }, { x: -4, z: -10 }, { x: -26, z: -18 }],
  [{ x: -26, z: -18 }, { x: -14, z: -28 }, { x: -6, z: -38 }, { x: 0, z: -44 }],
];

const PICKUPS: Point[] = [
  { x: -8, z: 31 },
  { x: 14, z: 18 },
  { x: 6, z: -6 },
  { x: -18, z: -24 },
];

const CHAPEL: Point = { x: -26, z: -18 };

export const ZONE_DEFS: Record<ZoneId, Omit<ZoneDef, 'id'>> = {
  camp: {
    name: 'den forladte lejr',
    center: { x: -28, z: 26 },
    radius: 11,
    seal: { x: -31, z: 24 },
    spawns: [{ kind: 'soldier', count: 3 }],
  },
  lund: {
    name: 'De dødes lund',
    center: { x: 30, z: 14 },
    radius: 12,
    seal: { x: 33, z: 12 },
    spawns: [
      { kind: 'soldier', count: 2 },
      { kind: 'musketeer', count: 3 },
    ],
  },
  chapel: {
    name: 'det ødelagte kapel',
    center: CHAPEL,
    radius: 11,
    seal: { x: CHAPEL.x, z: CHAPEL.z + 0.5 },
    spawns: [
      { kind: 'soldier', count: 2 },
      { kind: 'musketeer', count: 1 },
    ],
  },
};

/** Afstand fra punkt til en polylinje. */
function distToPolyline(px: number, pz: number, pts: Point[]): number {
  let best = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len2 = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((px - a.x) * dx + (pz - a.z) * dz) / len2));
    best = Math.min(best, dist(px, pz, a.x + dx * t, a.z + dz * t));
  }
  return best;
}

/** Bygger den faste kortlayout. Skoven er seedet; stier, zoner og mål holdes fri. */
export function buildMap(): MapData {
  const rnd = mulberry32(CONFIG.map.seed);
  const half = CONFIG.map.half;
  const tower: Circle = { x: CONFIG.tower.x, z: CONFIG.tower.z, r: CONFIG.tower.radius };
  const zones = {} as Record<ZoneId, ZoneDef>;
  (Object.keys(ZONE_DEFS) as ZoneId[]).forEach((id) => {
    zones[id] = { id, ...ZONE_DEFS[id] };
  });

  const props: Prop[] = [];
  const solids: Circle[] = [tower];
  const reserved: Point[] = [START, ...PICKUPS, ...Object.values(zones).map((z) => z.seal)];

  const add = (p: Prop) => {
    props.push(p);
    if (p.solid) solids.push(p);
  };

  // Faste props: ødelagt kapel og vogn i lejren.
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + 0.2;
    // Gab i muren mod øst, hvor stien kommer ind.
    if (i === 0 || i === 8) continue;
    const r = 5.5;
    add({
      kind: 'ruinWall',
      x: CHAPEL.x + Math.cos(a) * r,
      z: CHAPEL.z + Math.sin(a) * r,
      r: 1.0,
      rot: a,
      scale: 0.8 + ((i * 37) % 5) * 0.12,
      solid: true,
    });
  }
  add({ kind: 'wreck', x: -34, z: 31, r: 1.3, rot: 0.4, scale: 1, solid: true });

  const free = (x: number, z: number, r: number, extra: number): boolean => {
    if (Math.abs(x) > half - 4 || Math.abs(z) > half - 4) return false;
    for (const s of solids) {
      if (dist(x, z, s.x, s.z) < s.r + r + extra) return false;
    }
    for (const p of reserved) {
      if (dist(x, z, p.x, p.z) < 2.8) return false;
    }
    for (const path of PATHS) {
      if (distToPolyline(x, z, path) < 3.4 + r) return false;
    }
    if (dist(x, z, tower.x, tower.z) < 7.5) return false;
    if (dist(x, z, START.x, START.z) < 7) return false;
    for (const zone of Object.values(zones)) {
      if (dist(x, z, zone.center.x, zone.center.z) < zone.radius * 0.7) return false;
    }
    return true;
  };

  // Gravsten i zonerne (fast antal, tilfældig placering i zonens ring).
  const graveCounts: Record<ZoneId, number> = { camp: 4, lund: 12, chapel: 4 };
  (Object.keys(graveCounts) as ZoneId[]).forEach((id) => {
    const zone = zones[id];
    let placed = 0;
    for (let tries = 0; tries < 400 && placed < graveCounts[id]; tries++) {
      const a = rnd() * Math.PI * 2;
      const d = 4 + rnd() * (zone.radius - 4.5);
      const x = zone.center.x + Math.cos(a) * d;
      const z = zone.center.z + Math.sin(a) * d;
      if (!free(x, z, 0.4, 0.4)) continue;
      add({ kind: 'grave', x, z, r: 0.38, rot: rnd() * 0.5 - 0.25, scale: 0.9 + rnd() * 0.3, solid: true });
      placed++;
    }
  });

  // Skov: træer og døde træer udenfor stier og zoner.
  let trees = 0;
  for (let tries = 0; tries < 900 && trees < 185; tries++) {
    const x = (rnd() * 2 - 1) * (half - 4);
    const z = (rnd() * 2 - 1) * (half - 4);
    const r = 0.55;
    if (!free(x, z, r, 0.8)) continue;
    const dead = rnd() < 0.18;
    add({
      kind: dead ? 'dead' : 'tree',
      x,
      z,
      r: dead ? 0.42 : r,
      rot: rnd() * Math.PI * 2,
      scale: 0.85 + rnd() * 0.45,
      solid: true,
    });
    trees++;
  }

  // Lavt buskads uden kollision, til atmosfære.
  let bushes = 0;
  for (let tries = 0; tries < 800 && bushes < 90; tries++) {
    const x = (rnd() * 2 - 1) * (half - 4);
    const z = (rnd() * 2 - 1) * (half - 4);
    if (!free(x, z, 0.5, 0.2)) continue;
    add({ kind: 'bush', x, z, r: 0.5, rot: rnd() * 6, scale: 0.7 + rnd() * 0.6, solid: false });
    bushes++;
  }

  return { zones, props, solids, paths: PATHS, start: START, pickups: PICKUPS, tower };
}

/** Skubber en position ud af solide cirkler og ud over kortets grænser. */
export function resolveCircle(p: Point, radius: number, solids: Circle[], half: number): void {
  const lim = half - 1;
  p.x = Math.max(-lim, Math.min(lim, p.x));
  p.z = Math.max(-lim, Math.min(lim, p.z));
  for (const s of solids) {
    const dx = p.x - s.x;
    const dz = p.z - s.z;
    const d = Math.hypot(dx, dz);
    const minD = s.r + radius;
    if (d < minD && d > 1e-6) {
      const push = (minD - d) / d;
      p.x += dx * push;
      p.z += dz * push;
    } else if (d <= 1e-6) {
      p.x += minD;
    }
  }
}

/** Tjekker om en position er fri for solide objekter. */
export function isFree(x: number, z: number, radius: number, solids: Circle[], half: number): boolean {
  if (Math.abs(x) > half - 1 || Math.abs(z) > half - 1) return false;
  for (const s of solids) {
    if (dist(x, z, s.x, s.z) < s.r + radius) return false;
  }
  return true;
}
