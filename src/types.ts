export type ZoneId = 'camp' | 'lund' | 'chapel';
export type EnemyKind = 'soldier' | 'musketeer' | 'executioner';

export interface Point {
  x: number;
  z: number;
}

export interface Circle extends Point {
  r: number;
}

export type PropKind = 'tree' | 'dead' | 'grave' | 'wreck' | 'ruinWall' | 'bush';

export interface Prop extends Circle {
  kind: PropKind;
  rot: number;
  scale: number;
  solid: boolean;
}

export interface ZoneDef {
  id: ZoneId;
  name: string;
  center: Point;
  radius: number;
  seal: Point;
  spawns: { kind: EnemyKind; count: number }[];
}
