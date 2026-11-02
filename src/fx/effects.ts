import {
  BoxGeometry,
  BufferGeometry,
  CircleGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Scene,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three';

interface Fx {
  obj: Object3D;
  mat: MeshBasicMaterial;
  geo: BufferGeometry;
  age: number;
  life: number;
  vel?: Vector3;
  gravity: number;
  baseOpacity: number;
  /** Hvis true: opacity stiger mod slutningen (varsel). Ellers falder den. */
  rampUp: boolean;
  grow: number;
}

const MAX_FX = 220;

/** Varsler, partikler og andre korte effekter. Alt ryddes automatisk. */
export class Effects {
  private items: Fx[] = [];
  private readonly root = new Group();

  constructor(scene: Scene) {
    scene.add(this.root);
  }

  /** Sektorvarsel foran en fjende (sabelhug og øksehug). */
  sector(x: number, z: number, facing: number, arcHalf: number, radius: number, duration: number, color: string): void {
    const geo = new CircleGeometry(radius, 28, facing - Math.PI / 2 - arcHalf, arcHalf * 2);
    geo.rotateX(-Math.PI / 2);
    const mat = new MeshBasicMaterial({ color, transparent: true, opacity: 0.2, depthWrite: false });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(x, 0.05, z);
    this.add({ obj: mesh, mat, geo, life: duration, rampUp: true, baseOpacity: 0.55, gravity: 0, grow: 0 });
  }

  /** Linje-varsel (musketens sigte og bøddelens ladning). */
  line(x: number, z: number, facing: number, length: number, width: number, duration: number, color: string): void {
    const geo = new BoxGeometry(width, 0.02, length);
    geo.translate(0, 0, length / 2);
    const mat = new MeshBasicMaterial({ color, transparent: true, opacity: 0.2, depthWrite: false });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(x, 0.06, z);
    mesh.rotation.y = facing;
    this.add({ obj: mesh, mat, geo, life: duration, rampUp: true, baseOpacity: 0.7, gravity: 0, grow: 0 });
  }

  /** Ekspanderende ring, fx. ved sælgsaktivering eller bølgeudbrud. */
  ring(x: number, z: number, radius: number, duration: number, color: string): void {
    const geo = new TorusGeometry(1, 0.08, 6, 40);
    geo.rotateX(Math.PI / 2);
    const mat = new MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(x, 0.3, z);
    mesh.scale.setScalar(0.2);
    this.add({ obj: mesh, mat, geo, life: duration, rampUp: false, baseOpacity: 0.9, gravity: 0, grow: radius });
  }

  /** Helligt lys-kegle der falmer ud (helligt lys). */
  cone(x: number, z: number, facing: number, length: number, halfAngle: number, duration: number, color: string): void {
    const geo = new CircleGeometry(length, 24, facing - Math.PI / 2 - halfAngle, halfAngle * 2);
    geo.rotateX(-Math.PI / 2);
    const mat = new MeshBasicMaterial({ color, transparent: true, opacity: 0.6, depthWrite: false });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(x, 0.9, z);
    this.add({ obj: mesh, mat, geo, life: duration, rampUp: false, baseOpacity: 0.6, gravity: 0, grow: 0 });
  }

  /** Cirkel på jorden der viser et område (seglets beskyttelse). */
  disc(x: number, z: number, radius: number, duration: number, color: string, opacity: number): Object3D {
    const geo = new CircleGeometry(radius, 36);
    geo.rotateX(-Math.PI / 2);
    const mat = new MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(x, 0.07, z);
    this.add({ obj: mesh, mat, geo, life: duration, rampUp: false, baseOpacity: opacity, gravity: 0, grow: 0 });
    return mesh;
  }

  /** Lille partikelsky (træffer, mundingsild, død). */
  burst(x: number, y: number, z: number, color: string, count: number, speed: number): void {
    for (let i = 0; i < count; i++) {
      if (this.items.length >= MAX_FX) return;
      const geo = new BoxGeometry(0.12, 0.12, 0.12);
      const mat = new MeshBasicMaterial({ color, transparent: true, opacity: 1, depthWrite: false });
      const mesh = new Mesh(geo, mat);
      mesh.position.set(x, y, z);
      const a = Math.random() * Math.PI * 2;
      const s = speed * (0.4 + Math.random() * 0.6);
      const vel = new Vector3(Math.cos(a) * s, 1 + Math.random() * speed * 0.6, Math.sin(a) * s);
      this.add({ obj: mesh, mat, geo, life: 0.45 + Math.random() * 0.25, vel, gravity: 9, rampUp: false, baseOpacity: 1, grow: 0 });
    }
  }

  /** Mundingsild ved pistolskud. */
  flash(x: number, y: number, z: number, color: string): void {
    const geo = new SphereGeometry(0.35, 8, 6);
    const mat = new MeshBasicMaterial({ color, transparent: true, opacity: 1, depthWrite: false });
    const mesh = new Mesh(geo, mat);
    mesh.position.set(x, y, z);
    this.add({ obj: mesh, mat, geo, life: 0.12, rampUp: false, baseOpacity: 1, gravity: 0, grow: 0 });
  }

  update(dt: number): void {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const fx = this.items[i];
      fx.age += dt;
      const p = Math.min(1, fx.age / fx.life);
      if (fx.vel) {
        fx.vel.y -= fx.gravity * dt;
        fx.obj.position.addScaledVector(fx.vel, dt);
        if (fx.obj.position.y < 0.05) fx.vel.set(0, 0, 0);
      }
      if (fx.grow > 0) fx.obj.scale.setScalar(0.2 + (fx.grow - 0.2) * p);
      if (fx.rampUp) fx.mat.opacity = fx.baseOpacity * (0.25 + 0.75 * p);
      else fx.mat.opacity = fx.baseOpacity * (1 - p);
      if (p >= 1) this.remove(i);
    }
  }

  /** Fjerner alle effekter (ved genstart). */
  clear(): void {
    for (let i = this.items.length - 1; i >= 0; i--) this.remove(i);
  }

  private add(fx: Omit<Fx, 'age'>): void {
    if (this.items.length >= MAX_FX) {
      // Fjern ældste effekt for at holde ydelsen stabil.
      this.remove(0);
    }
    this.root.add(fx.obj);
    this.items.push({ ...fx, age: 0 });
  }

  private remove(index: number): void {
    const fx = this.items[index];
    this.root.remove(fx.obj);
    fx.geo.dispose();
    fx.mat.dispose();
    this.items.splice(index, 1);
  }
}
