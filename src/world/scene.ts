import {
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DynamicDrawUsage,
  Fog,
  Group,
  HemisphereLight,
  IcosahedronGeometry,
  InstancedMesh,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Object3D,
  PlaneGeometry,
  PointLight,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  TorusGeometry,
  CircleGeometry,
} from 'three';
import { CONFIG } from '../config';
import type { Point, Prop, ZoneId } from '../types';
import { mulberry32 } from '../utils';
import type { MapData } from './map';

export interface WorldScene {
  scene: Scene;
  /** Opdaterer animationer, skygger og træers skjuling ud fra spillerens position. */
  update(t: number, dt: number, player: Point): void;
  setSealCollected(zone: ZoneId): void;
  setPickupTaken(index: number): void;
  /** 0 = intet beskyttelsesfelt, 1 = fuld beskyttelse. */
  setTowerProtection(p: number): void;
  /** Nulstiller segl, samleobjekter og tårnets beskyttelse til start. */
  reset(): void;
}

interface Placement {
  x: number;
  y: number;
  z: number;
  sx: number;
  sy: number;
  sz: number;
  rz?: number;
  ry?: number;
  color?: string;
}

const COLORS = {
  ground: '#141b22',
  trunk: '#2a2220',
  dead: '#3a342e',
  grave: '#5d6168',
  stone: '#4b4f57',
  stoneDark: '#2b2e35',
  wood: '#4a3322',
  amber: '#ffb347',
  seal: '#ffcf5a',
  ghost: '#7dff6a',
  crowns: ['#17301f', '#1c3a2a', '#132a2c', '#1e2c35'],
  bushes: ['#1d3324', '#21382a', '#1a2b2b'],
};

const dummy = new Object3D();

function placeInstances(mesh: InstancedMesh, items: Placement[]): void {
  const c = new Color();
  items.forEach((it, i) => {
    dummy.position.set(it.x, it.y, it.z);
    dummy.rotation.set(0, it.ry ?? 0, it.rz ?? 0);
    dummy.scale.set(it.sx, it.sy, it.sz);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (it.color) mesh.setColorAt(i, c.set(it.color));
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
}

function makeInstanced(geom: BufferGeometry, mat: Material, items: Placement[]): InstancedMesh {
  const mesh = new InstancedMesh(geom, mat, Math.max(1, items.length));
  mesh.count = items.length;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  // Tilføj instanceColor før vi skriver værdier.
  if (items.some((it) => it.color)) {
    mesh.setColorAt(0, new Color(1, 1, 1));
  }
  placeInstances(mesh, items);
  return mesh;
}

function paintGround(map: MapData): CanvasTexture {
  const half = CONFIG.map.half;
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2D-kontekst kunne ikke oprettes');

  const px = (v: number): number => ((v + half) * size) / (half * 2);
  const unit = size / (half * 2);

  ctx.fillStyle = COLORS.ground;
  ctx.fillRect(0, 0, size, size);

  const rnd = mulberry32(CONFIG.map.seed);
  for (let i = 0; i < 9000; i++) {
    const x = rnd() * size;
    const y = rnd() * size;
    const light = rnd() < 0.5;
    ctx.fillStyle = light
      ? `rgba(44,58,68,${0.2 + rnd() * 0.35})`
      : `rgba(6,8,12,${0.25 + rnd() * 0.4})`;
    ctx.fillRect(x, y, 2 + rnd() * 5, 2 + rnd() * 5);
  }

  for (const zone of Object.values(map.zones)) {
    const cx = px(zone.center.x);
    const cy = px(zone.center.z);
    const r = zone.radius * unit;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.15);
    grad.addColorStop(0, 'rgba(60,64,58,0.55)');
    grad.addColorStop(1, 'rgba(60,64,58,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.15, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = '#3a3a36';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 2.2 * unit;
  for (const path of map.paths) {
    ctx.beginPath();
    path.forEach((p, i) => {
      const x = px(p.x);
      const y = px(p.z);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function makeTorch(x: number, z: number, intensity: number): { group: Group; flame: Mesh; light: PointLight } {
  const group = new Group();
  group.position.set(x, 0, z);
  const pole = new Mesh(
    new CylinderGeometry(0.08, 0.1, 2.0, 6),
    new MeshLambertMaterial({ color: COLORS.wood, flatShading: true }),
  );
  pole.position.y = 1.0;
  pole.castShadow = true;
  group.add(pole);
  const bowl = new Mesh(
    new CylinderGeometry(0.22, 0.12, 0.26, 6),
    new MeshLambertMaterial({ color: '#2a2a2e', flatShading: true }),
  );
  bowl.position.y = 2.1;
  group.add(bowl);
  const flame = new Mesh(
    new ConeGeometry(0.22, 0.6, 6),
    new MeshBasicMaterial({ color: COLORS.amber }),
  );
  flame.position.y = 2.5;
  group.add(flame);
  const light = new PointLight(COLORS.amber, intensity, 16, 1.6);
  light.position.set(0, 2.6, 0);
  group.add(light);
  return { group, flame, light };
}

function makeSeal(): { group: Group; ring: Mesh } {
  const group = new Group();
  const disc = new Mesh(
    new CylinderGeometry(0.42, 0.42, 0.08, 12),
    new MeshLambertMaterial({ color: COLORS.seal, emissive: COLORS.seal, emissiveIntensity: 0.9, flatShading: true }),
  );
  group.add(disc);
  const ring = new Mesh(
    new TorusGeometry(0.62, 0.05, 6, 20),
    new MeshBasicMaterial({ color: COLORS.seal }),
  );
  ring.rotation.x = Math.PI / 2;
  group.add(ring);
  return { group, ring };
}

function makeWreck(p: Prop): Group {
  const g = new Group();
  g.position.set(p.x, 0, p.z);
  g.rotation.y = p.rot;
  const mat = new MeshLambertMaterial({ color: COLORS.wood, flatShading: true });
  const bed = new Mesh(new BoxGeometry(1.8, 0.5, 1.1), mat);
  bed.position.set(0, 0.7, 0);
  bed.rotation.z = 0.12;
  bed.castShadow = true;
  g.add(bed);
  const wheelMat = new MeshLambertMaterial({ color: '#2c1f16', flatShading: true });
  for (const side of [-1, 1]) {
    const wheel = new Mesh(new CylinderGeometry(0.42, 0.42, 0.12, 8), wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.rotation.x = 0.35 * side;
    wheel.position.set(0, 0.42, 0.62 * side);
    wheel.castShadow = true;
    g.add(wheel);
  }
  const shaft = new Mesh(new BoxGeometry(0.1, 0.1, 1.9), mat);
  shaft.position.set(1.3, 0.3, 0);
  shaft.rotation.y = 0.4;
  g.add(shaft);
  return g;
}

function makeTower(x: number, z: number, radius: number): { group: Group; ringMat: MeshBasicMaterial; domeMat: MeshBasicMaterial; discMat: MeshBasicMaterial; lanternMat: MeshBasicMaterial } {
  const group = new Group();
  group.position.set(x, 0, z);
  const stone = new MeshLambertMaterial({ color: COLORS.stone, flatShading: true });
  const dark = new MeshLambertMaterial({ color: COLORS.stoneDark, flatShading: true });

  const base = new Mesh(new CylinderGeometry(radius * 1.12, radius * 1.22, 1.2, 24), dark);
  base.position.y = 0.6;
  base.receiveShadow = true;
  group.add(base);

  const body = new Mesh(new CylinderGeometry(radius, radius * 1.06, 9, 24), stone);
  body.position.y = 5.7;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const windowMat = new MeshBasicMaterial({ color: '#0a0c10' });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const w = new Mesh(new BoxGeometry(0.42, 0.9, 0.14), windowMat);
    w.position.set(Math.sin(a) * (radius + 0.02), 6.2, Math.cos(a) * (radius + 0.02));
    w.rotation.y = a;
    group.add(w);
  }

  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const merlon = new Mesh(new BoxGeometry(0.5, 0.7, 0.5), stone);
    merlon.position.set(Math.sin(a) * (radius - 0.1), 10.35, Math.cos(a) * (radius - 0.1));
    merlon.castShadow = true;
    group.add(merlon);
  }

  const lanternMat = new MeshBasicMaterial({ color: '#c8ff9a', transparent: true, opacity: 0.85 });
  const lantern = new Mesh(new CylinderGeometry(1.5, 1.7, 2.0, 12), lanternMat);
  lantern.position.y = 11.6;
  group.add(lantern);

  const domeMat = new MeshBasicMaterial({ color: '#7dff9a', transparent: true, opacity: 0, depthWrite: false });
  const dome = new Mesh(new SphereGeometry(1.9, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
  dome.position.y = 12.7;
  group.add(dome);

  const spire = new Mesh(
    new ConeGeometry(0.35, 2.6, 8),
    new MeshLambertMaterial({ color: COLORS.seal, emissive: COLORS.seal, emissiveIntensity: 0.4, flatShading: true }),
  );
  spire.position.y = 14.5;
  group.add(spire);

  const discMat = new MeshBasicMaterial({ color: COLORS.ghost, transparent: true, opacity: 0, depthWrite: false });
  const disc = new Mesh(new CircleGeometry(CONFIG.tower.defenseRadius, 48), discMat);
  disc.rotation.x = -Math.PI / 2;
  disc.position.y = 0.05;
  group.add(disc);

  const ringMat = new MeshBasicMaterial({ color: COLORS.ghost, transparent: true, opacity: 0 });
  const ring = new Mesh(new TorusGeometry(CONFIG.tower.defenseRadius, 0.07, 6, 72), ringMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.1;
  group.add(ring);

  return { group, ringMat, domeMat, discMat, lanternMat };
}

/** Bygger hele verdens Three.js-scene ud fra kortdata. */
export function createWorld(map: MapData): WorldScene {
  const half = CONFIG.map.half;
  const scene = new Scene();
  scene.background = new Color('#0a1018');
  scene.fog = new Fog('#0a1018', 34, 92);

  const hemi = new HemisphereLight('#5a7aa8', '#0a0a12', 0.9);
  scene.add(hemi);

  const moon = new DirectionalLight('#a9c4ff', 1.1);
  moon.castShadow = true;
  moon.shadow.mapSize.set(1024, 1024);
  const sc = moon.shadow.camera;
  sc.left = -26;
  sc.right = 26;
  sc.top = 26;
  sc.bottom = -26;
  sc.near = 1;
  sc.far = 120;
  moon.shadow.bias = -0.0008;
  scene.add(moon);
  scene.add(moon.target);

  // Bakgrundsjord med zonepletter og stier.
  const groundGeo = new PlaneGeometry(half * 2, half * 2);
  groundGeo.rotateX(-Math.PI / 2);
  const ground = new Mesh(
    groundGeo,
    new MeshLambertMaterial({ map: paintGround(map) }),
  );
  ground.receiveShadow = true;
  scene.add(ground);

  // Træer: stamme og krone som instanced meshes.
  const trees = map.props.filter((p) => p.kind === 'tree');
  const deadTrees = map.props.filter((p) => p.kind === 'dead');
  const bushes = map.props.filter((p) => p.kind === 'bush');
  const graves = map.props.filter((p) => p.kind === 'grave');

  const trunkGeo = new CylinderGeometry(0.2, 0.3, 2.6, 6);
  trunkGeo.translate(0, 1.3, 0);
  const trunkMesh = makeInstanced(
    trunkGeo,
    new MeshLambertMaterial({ color: COLORS.trunk, flatShading: true }),
    trees.map((t) => ({ x: t.x, y: 0, z: t.z, sx: t.scale, sy: t.scale, sz: t.scale })),
  );
  scene.add(trunkMesh);

  const crownGeo = new IcosahedronGeometry(1, 0);
  const crownMat = new MeshLambertMaterial({ color: '#ffffff', flatShading: true });
  const crownMesh = new InstancedMesh(crownGeo, crownMat, Math.max(1, trees.length));
  crownMesh.count = trees.length;
  crownMesh.castShadow = true;
  crownMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  const crownColor = new Color();
  const crownRnd = mulberry32(CONFIG.map.seed + 7);
  trees.forEach((_, i) => {
    crownMesh.setColorAt(i, crownColor.set(COLORS.crowns[Math.floor(crownRnd() * COLORS.crowns.length)]));
  });
  scene.add(crownMesh);
  const crownFactor = new Float32Array(trees.length).fill(1);
  const crownBase = trees.map((t) => ({ x: t.x, z: t.z, s: t.scale }));

  const deadTrunkGeo = new CylinderGeometry(0.14, 0.22, 3.4, 5);
  deadTrunkGeo.translate(0, 1.7, 0);
  scene.add(
    makeInstanced(
      deadTrunkGeo,
      new MeshLambertMaterial({ color: COLORS.dead, flatShading: true }),
      deadTrees.map((t) => ({ x: t.x, y: 0, z: t.z, sx: t.scale, sy: t.scale, sz: t.scale, ry: t.rot })),
    ),
  );
  const branchGeo = new BoxGeometry(0.09, 1.0, 0.09);
  branchGeo.translate(0, 0.5, 0);
  const branches: Placement[] = [];
  for (const t of deadTrees) {
    for (const side of [-1, 1]) {
      branches.push({
        x: t.x,
        y: 2.0 * t.scale,
        z: t.z,
        sx: t.scale,
        sy: t.scale,
        sz: t.scale,
        rz: -side * 0.9,
        ry: t.rot,
      });
    }
  }
  scene.add(
    makeInstanced(branchGeo, new MeshLambertMaterial({ color: COLORS.dead, flatShading: true }), branches),
  );

  const bushGeo = new IcosahedronGeometry(0.9, 0);
  scene.add(
    makeInstanced(
      bushGeo,
      new MeshLambertMaterial({ color: '#ffffff', flatShading: true }),
      bushes.map((b, i) => ({
        x: b.x,
        y: 0.45 * b.scale,
        z: b.z,
        sx: 1.1 * b.scale,
        sy: 0.7 * b.scale,
        sz: 1.1 * b.scale,
        color: COLORS.bushes[i % COLORS.bushes.length],
      })),
    ),
  );

  const graveGeo = new BoxGeometry(0.5, 0.85, 0.16);
  graveGeo.translate(0, 0.42, 0);
  scene.add(
    makeInstanced(
      graveGeo,
      new MeshLambertMaterial({ color: COLORS.grave, flatShading: true }),
      graves.map((g) => ({ x: g.x, y: 0, z: g.z, sx: 1, sy: 1, sz: 1, ry: g.rot })),
    ),
  );

  for (const w of map.props.filter((p) => p.kind === 'wreck')) scene.add(makeWreck(w));

  for (const r of map.props.filter((p) => p.kind === 'ruinWall')) {
    const h = 1.2 + r.scale * 1.6;
    const wall = new Mesh(
      new BoxGeometry(2.2, h, 0.6),
      new MeshLambertMaterial({ color: COLORS.stone, flatShading: true }),
    );
    wall.position.set(r.x, h / 2, r.z);
    wall.rotation.y = r.rot;
    wall.castShadow = true;
    wall.receiveShadow = true;
    scene.add(wall);
  }

  // Tårn.
  const tower = makeTower(map.tower.x, map.tower.z, map.tower.r);
  scene.add(tower.group);
  const towerLight = new PointLight(COLORS.ghost, 0, 18, 1.6);
  towerLight.position.set(map.tower.x, 12, map.tower.z);
  scene.add(towerLight);

  // Fakler ved zonerne og tårnet.
  const torchLights: PointLight[] = [];
  const flames: Mesh[] = [];
  const torchSpots: Point[] = [
    { x: map.zones.camp.center.x + 4, z: map.zones.camp.center.z - 3 },
    { x: map.zones.lund.center.x - 4, z: map.zones.lund.center.z + 2 },
    { x: map.zones.chapel.center.x + 3, z: map.zones.chapel.center.z + 3 },
    { x: map.tower.x + 4.5, z: map.tower.z + 4.5 },
  ];
  for (const s of torchSpots) {
    const t = makeTorch(s.x, s.z, 22);
    scene.add(t.group);
    torchLights.push(t.light);
    flames.push(t.flame);
  }

  // Segler og samleobjekter.
  const seals: Record<ZoneId, Group> = {} as Record<ZoneId, Group>;
  const sealRings: Mesh[] = [];
  for (const zone of Object.values(map.zones)) {
    const s = makeSeal();
    s.group.position.set(zone.seal.x, 0.9, zone.seal.z);
    seals[zone.id] = s.group;
    sealRings.push(s.ring);
    scene.add(s.group);
  }

  const pickups: Group[] = map.pickups.map((p) => {
    const g = new Group();
    g.position.set(p.x, 0.6, p.z);
    const mat = new MeshLambertMaterial({ color: '#e8e4d8', emissive: '#7a1212', emissiveIntensity: 0.8, flatShading: true });
    const h = new Mesh(new BoxGeometry(0.46, 0.12, 0.12), mat);
    const v = new Mesh(new BoxGeometry(0.12, 0.12, 0.46), mat);
    g.add(h, v);
    scene.add(g);
    return g;
  });

  const flickerRnd = mulberry32(CONFIG.map.seed + 13);
  const flickerPhase = torchLights.map(() => flickerRnd() * 10);
  let protection = 0;

  function update(t: number, dt: number, player: Point): void {
    // Månen bevæger sig langsomt, så skyggerne bevæger sig.
    const sway = Math.sin(t * 0.05) * 5;
    moon.position.set(player.x - 18 + sway, 42, player.z + 14);
    moon.target.position.set(player.x, 0, player.z);
    moon.target.updateMatrixWorld();

    // Træer mellem kamera (+Z) og spiller skjules ved at skrumpe kronen.
    const k = Math.min(1, dt * 12);
    let crownsChanged = false;
    for (let i = 0; i < trees.length; i++) {
      const c = crownBase[i];
      const dz = c.z - player.z;
      const dx = Math.abs(c.x - player.x);
      const blocking = dz > 0.6 && dz < 8 && dx < 1.5 * c.s + 1.0;
      const target = blocking ? 0 : 1;
      const prev = crownFactor[i];
      crownFactor[i] = prev + (target - prev) * k;
      if (Math.abs(crownFactor[i] - prev) > 0.0005) {
        const f = Math.max(0.0001, crownFactor[i]);
        dummy.position.set(c.x, 3.0 * c.s, c.z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.set(1.5 * c.s * f, 2.1 * c.s * f, 1.5 * c.s * f);
        dummy.updateMatrix();
        crownMesh.setMatrixAt(i, dummy.matrix);
        crownsChanged = true;
      }
    }
    if (crownsChanged) crownMesh.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < torchLights.length; i++) {
      flickerPhase[i] += dt * 9;
      const f = 0.88 + Math.sin(flickerPhase[i]) * 0.07 + Math.sin(flickerPhase[i] * 2.7) * 0.05;
      torchLights[i].intensity = 22 * f;
      flames[i].scale.set(1, f + 0.1, 1);
    }

    const pulse = 0.5 + Math.sin(t * 2.2) * 0.5;
    towerLight.intensity = protection * (22 + pulse * 6);
    tower.ringMat.opacity = protection * (0.5 + pulse * 0.3);
    tower.domeMat.opacity = protection * 0.16;
    tower.discMat.opacity = protection * 0.12;

    for (const zone of Object.values(map.zones)) {
      const g = seals[zone.id];
      if (!g.visible) continue;
      g.position.y = 0.9 + Math.sin(t * 2 + zone.seal.x) * 0.12;
      g.rotation.y += dt * 0.8;
    }
    for (const ring of sealRings) ring.rotation.z += dt * 0.5;
    for (const g of pickups) {
      if (!g.visible) continue;
      g.position.y = 0.6 + Math.sin(t * 2.5 + g.position.x) * 0.08;
      g.rotation.y += dt * 1.2;
    }
  }

  return {
    scene,
    update,
    setSealCollected(zone: ZoneId): void {
      seals[zone].visible = false;
    },
    setPickupTaken(index: number): void {
      pickups[index].visible = false;
    },
    setTowerProtection(p: number): void {
      protection = Math.max(0, Math.min(1, p));
    },
    reset(): void {
      for (const g of Object.values(seals)) g.visible = true;
      for (const g of pickups) g.visible = true;
      protection = 0;
    },
  };
}
