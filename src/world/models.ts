import { BoxGeometry, ConeGeometry, CylinderGeometry, Group, Material, Mesh, MeshLambertMaterial, SphereGeometry } from 'three';

/** Delte geometrier cachet på tværs af figurer. */
const geo = {
  leg: new BoxGeometry(0.22, 0.9, 0.22),
  torso: new BoxGeometry(0.6, 0.8, 0.36),
  skirt: new BoxGeometry(0.66, 0.5, 0.44),
  cape: new BoxGeometry(0.72, 1.25, 0.08),
  head: new BoxGeometry(0.32, 0.34, 0.32),
  wig: new BoxGeometry(0.36, 0.2, 0.34),
  arm: new BoxGeometry(0.2, 0.7, 0.2),
  hand: new BoxGeometry(0.16, 0.14, 0.16),
  belt: new BoxGeometry(0.64, 0.07, 0.4),
  trim: new BoxGeometry(0.62, 0.08, 0.38),
  hat: new BoxGeometry(0.5, 0.12, 0.24),
  crown: new CylinderGeometry(0.2, 0.22, 0.12, 8),
  crownSpike: new ConeGeometry(0.05, 0.16, 4),
  eye: new SphereGeometry(0.045, 6, 4),
  blade: new BoxGeometry(0.04, 0.9, 0.03),
  guard: new BoxGeometry(0.3, 0.04, 0.06),
  hilt: new BoxGeometry(0.06, 0.16, 0.06),
  pistol: new BoxGeometry(0.08, 0.12, 0.42),
  musket: new BoxGeometry(0.08, 0.09, 1.5),
  musketTip: new BoxGeometry(0.05, 0.05, 0.25),
  axeHandle: new BoxGeometry(0.07, 1.5, 0.07),
  axeHead: new BoxGeometry(0.34, 0.42, 0.07),
  mask: new BoxGeometry(0.34, 0.4, 0.34),
  slit: new BoxGeometry(0.08, 0.04, 0.02),
};

export type HumanoidKind = 'christian' | 'soldier' | 'musketeer' | 'executioner';

export interface Humanoid {
  root: Group;
  body: Group;
  armR: Group;
  armL: Group;
  legR: Group;
  legL: Group;
  head: Group;
  /** Materialer der kan blinke ved hit. */
  flashMats: MeshLambertMaterial[];
  /** Materialer der skal disposes når figuren fjernes. */
  ownedMats: Material[];
  eyes: Mesh[];
  height: number;
}

interface Palette {
  coat: string;
  trim: string;
  pants: string;
  skin: string;
  hat: 'tricorn' | 'wig' | 'hood';
  weapon: 'sword' | 'musket' | 'axe' | 'none';
  cape?: string;
  eyeColor?: string;
  scale: number;
}

const PALETTES: Record<HumanoidKind, Palette> = {
  christian: {
    coat: '#4a1216',
    trim: '#d6a84a',
    pants: '#1d1f2b',
    skin: '#d9b38c',
    hat: 'wig',
    weapon: 'sword',
    cape: '#9c1c1f',
    scale: 1,
  },
  soldier: {
    coat: '#1f3d7a',
    trim: '#d8b43a',
    pants: '#2a2e3a',
    skin: '#aab8a0',
    hat: 'tricorn',
    weapon: 'sword',
    eyeColor: '#7dff6a',
    scale: 1,
  },
  musketeer: {
    coat: '#18305f',
    trim: '#c9a733',
    pants: '#25293a',
    skin: '#a7b59b',
    hat: 'tricorn',
    weapon: 'musket',
    eyeColor: '#8dff7a',
    scale: 1,
  },
  executioner: {
    coat: '#141218',
    trim: '#3a2f2a',
    pants: '#0d0c10',
    skin: '#d6cfbf',
    hat: 'hood',
    weapon: 'axe',
    eyeColor: '#9dff5a',
    scale: 1.2,
  },
};

/** Bygger en lav-poly figur med ledpivoter. Figuren vender mod +Z. */
export function buildHumanoid(kind: HumanoidKind): Humanoid {
  const p = PALETTES[kind];
  const ownedMats: Material[] = [];
  const flashMats: MeshLambertMaterial[] = [];
  const eyes: Mesh[] = [];

  const mat = (color: string): MeshLambertMaterial => {
    const m = new MeshLambertMaterial({ color, flatShading: true });
    ownedMats.push(m);
    flashMats.push(m);
    return m;
  };

  const root = new Group();
  const body = new Group();
  root.add(body);

  // Ben pivoteret i hoften (y = 0.9).
  const makeLeg = (x: number): Group => {
    const g = new Group();
    g.position.set(x, 0.9, 0);
    const leg = new Mesh(geo.leg, mat(p.pants));
    leg.position.y = -0.45;
    leg.castShadow = true;
    g.add(leg);
    body.add(g);
    return g;
  };
  const legR = makeLeg(0.14);
  const legL = makeLeg(-0.14);

  const torso = new Mesh(geo.torso, mat(p.coat));
  torso.position.set(0, 1.3, 0);
  torso.castShadow = true;
  body.add(torso);

  const skirt = new Mesh(geo.skirt, mat(p.coat));
  skirt.position.set(0, 0.7, 0);
  if (kind === 'executioner') body.add(skirt);

  const trim = new Mesh(geo.trim, mat(p.trim));
  trim.position.set(0, 1.72, 0);
  body.add(trim);

  if (kind !== 'executioner') {
    const belt = new Mesh(geo.belt, mat(p.trim));
    belt.position.set(0, 0.98, 0);
    body.add(belt);
  }

  if (p.cape) {
    const cape = new Mesh(geo.cape, mat(p.cape));
    cape.position.set(0, 1.2, -0.22);
    cape.castShadow = true;
    body.add(cape);
  }

  const head = new Group();
  head.position.set(0, 1.9, 0);
  body.add(head);
  const skull = new Mesh(geo.head, mat(p.skin));
  skull.position.y = 0.05;
  head.add(skull);

  if (p.hat === 'wig') {
    const wig = new Mesh(geo.wig, mat('#e6e2d6'));
    wig.position.set(0, 0.22, -0.02);
    head.add(wig);
    const crown = new Mesh(geo.crown, mat('#e0b64c'));
    crown.position.set(0, 0.36, 0);
    head.add(crown);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const spike = new Mesh(geo.crownSpike, mat('#e0b64c'));
      spike.position.set(Math.cos(a) * 0.16, 0.48, Math.sin(a) * 0.16);
      head.add(spike);
    }
  } else if (p.hat === 'tricorn') {
    const hat = new Mesh(geo.hat, mat('#15151c'));
    hat.position.set(0, 0.24, 0);
    head.add(hat);
  } else {
    const hood = new Mesh(geo.head, mat('#0c0b0f'));
    hood.scale.set(1.15, 1.2, 1.15);
    hood.position.set(0, 0.12, -0.02);
    head.add(hood);
    const mask = new Mesh(geo.mask, mat(p.skin));
    mask.position.set(0, 0.02, 0.1);
    head.add(mask);
    for (const x of [-0.08, 0.08]) {
      const slit = new Mesh(geo.slit, mat('#050505'));
      slit.position.set(x, 0.06, 0.19);
      head.add(slit);
    }
  }

  if (p.eyeColor) {
    for (const x of [-0.08, 0.08]) {
      const eyeMat = new MeshLambertMaterial({ color: '#000', emissive: p.eyeColor, emissiveIntensity: 1.6 });
      ownedMats.push(eyeMat);
      const eye = new Mesh(geo.eye, eyeMat);
      eye.position.set(x, 0.04, 0.17);
      head.add(eye);
      eyes.push(eye);
    }
  }

  // Arme pivoteret i skulderen (y = 1.6).
  const makeArm = (x: number): Group => {
    const g = new Group();
    g.position.set(x, 1.6, 0);
    const sleeve = new Mesh(geo.arm, mat(p.coat));
    sleeve.position.y = -0.35;
    sleeve.castShadow = true;
    g.add(sleeve);
    const hand = new Mesh(geo.hand, mat(p.skin));
    hand.position.y = -0.76;
    g.add(hand);
    body.add(g);
    return g;
  };
  const armR = makeArm(0.42);
  const armL = makeArm(-0.42);

  const attachWeapon = (hand: Group, weapon: Palette['weapon']): void => {
    if (weapon === 'sword') {
      const hilt = new Mesh(geo.hilt, mat('#d6a84a'));
      hilt.position.set(0, -0.8, 0);
      hand.add(hilt);
      const guard = new Mesh(geo.guard, mat('#d6a84a'));
      guard.position.set(0, -0.72, 0);
      hand.add(guard);
      const blade = new Mesh(geo.blade, mat('#c8d4e0'));
      blade.position.set(0, -1.3, 0);
      blade.castShadow = true;
      hand.add(blade);
    } else if (weapon === 'musket') {
      const barrel = new Mesh(geo.musket, mat('#3b2a1c'));
      barrel.position.set(0, -0.8, 0.45);
      hand.add(barrel);
    } else if (weapon === 'axe') {
      const handle = new Mesh(geo.axeHandle, mat('#4a3322'));
      handle.position.set(0, -1.2, 0);
      hand.add(handle);
      const head2 = new Mesh(geo.axeHead, mat('#8a929c'));
      head2.position.set(0, -1.9, 0.12);
      hand.add(head2);
    }
  };

  // Højre arm holder våben, venstre arm holder pistol/hånd.
  attachWeapon(armR, p.weapon);
  if (kind === 'christian') {
    const pistol = new Mesh(geo.pistol, mat('#6b4a2a'));
    pistol.position.set(0, -0.82, 0.22);
    armL.add(pistol);
  }

  if (kind === 'musketeer') {
    const musketBarrel = new Mesh(geo.musketTip, mat('#8a929c'));
    musketBarrel.position.set(0, -0.8, 1.0);
    armR.add(musketBarrel);
  }

  // Standardstilling: arme frem.
  armR.rotation.x = -1.2;
  armL.rotation.x = -1.2;
  if (p.weapon === 'axe') {
    armR.rotation.x = -1.5;
    armL.rotation.x = -1.5;
  }
  if (p.weapon === 'musket') {
    armR.rotation.x = -1.5;
    armL.rotation.x = -1.5;
  }

  root.scale.setScalar(p.scale);
  const height = 2.1 * p.scale;
  return { root, body, armR, armL, legR, legL, head, flashMats, ownedMats, eyes, height };
}

/** Frigør materialer der er ejet af en figur. */
export function disposeHumanoid(h: Humanoid): void {
  for (const m of h.ownedMats) m.dispose();
}

/** Sætter rødlig blink-tint på figuren (0 = normal, 1 = fuld). */
export function setFlash(h: Humanoid, amount: number): void {
  for (const m of h.flashMats) m.emissive.setRGB(amount * 0.9, amount * 0.1, amount * 0.05);
}

/** Nulstiller standardpositurer og bruger eventuel idle-animation. */
export function setRestPose(h: Humanoid, t: number): void {
  h.legR.rotation.x = 0;
  h.legL.rotation.x = 0;
  h.body.position.y = Math.sin(t * 2.2) * 0.02;
}
