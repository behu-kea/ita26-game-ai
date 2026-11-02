export type Action = 'attack' | 'fire' | 'holy' | 'seal' | 'dash' | 'interact' | 'pause' | 'mute';

const KEY_ACTIONS: Record<string, Action> = {
  KeyQ: 'holy',
  KeyE: 'seal',
  Space: 'dash',
  KeyF: 'interact',
  Escape: 'pause',
  KeyM: 'mute',
};

const MOVE_KEYS: Record<string, [number, number]> = {
  KeyW: [0, -1],
  ArrowUp: [0, -1],
  KeyS: [0, 1],
  ArrowDown: [0, 1],
  KeyA: [-1, 0],
  ArrowLeft: [-1, 0],
  KeyD: [1, 0],
  ArrowRight: [1, 0],
};

/**
 * Samler tastatur- og museinput. Oprettes én gang, så der ikke tilføjes
 * dubletter af event listeners ved genstart.
 */
export class Input {
  private held = new Set<string>();
  private pending = new Set<Action>();
  /** Pointerposition i normaliserede enhedskoordinater (-1..1). */
  readonly pointer = { x: 0, y: 0 };
  private readonly canvas: HTMLElement;

  constructor(canvas: HTMLElement) {
    this.canvas = canvas;
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.held.delete(e.code));
    window.addEventListener('blur', () => this.held.clear());
    window.addEventListener('mousemove', (e) => this.onMove(e));
    canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  /** Bevægelse i skærmens retninger (x = højre, z = ned mod kameraet). */
  get move(): { x: number; z: number } {
    let x = 0;
    let z = 0;
    for (const code of this.held) {
      const m = MOVE_KEYS[code];
      if (m) {
        x += m[0];
        z += m[1];
      }
    }
    const len = Math.hypot(x, z);
    return len > 0 ? { x: x / len, z: z / len } : { x: 0, z: 0 };
  }

  /** Returnerer true én gang per tryk. */
  consume(action: Action): boolean {
    if (this.pending.has(action)) {
      this.pending.delete(action);
      return true;
    }
    return false;
  }

  clearPending(): void {
    this.pending.clear();
  }

  private onKeyDown(e: KeyboardEvent): void {
    if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
    if (e.repeat) return;
    this.held.add(e.code);
    const action = KEY_ACTIONS[e.code];
    if (action) this.pending.add(action);
  }

  private onMove(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  private onMouseDown(e: MouseEvent): void {
    this.onMove(e);
    if (e.button === 0) this.pending.add('attack');
    else if (e.button === 2) this.pending.add('fire');
  }
}
