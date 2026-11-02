export interface HudView {
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  /** Resterende andel af cooldown (0 = klar) for hver evne. */
  cooldowns: Record<'sword' | 'pistol' | 'holy' | 'seal' | 'dash', number>;
  sealCount: number;
  objective: string;
  hint: string | null;
  tower: { visible: boolean; protection: number };
  boss: { visible: boolean; hp: number };
  countdown: string | null;
  indicator: { visible: boolean; ndcX: number; ndcY: number };
}

export interface ScreenButtons {
  onStart(): void;
  onToggleSound(): void;
  onResume(): void;
  onRestart(): void;
  onRetry(): void;
  onNewGame(): void;
}

export type Screen = 'menu' | 'pause' | 'end' | 'error' | null;

function el<T extends HTMLElement>(id: string): T {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Mangler element i HTML: #${id}`);
  return node as T;
}

/** HUD og overlays (menu, pause, slut). DOM-elementerne bindes én gang. */
export class Hud {
  private readonly hud = el('hud');
  private readonly hpFill = el('hp-fill');
  private readonly hpText = el('hp-text');
  private readonly manaFill = el('mana-fill');
  private readonly manaText = el('mana-text');
  private readonly sealCount = el('seal-count');
  private readonly objective = el('objective');
  private readonly hint = el('hint');
  private readonly message = el('message');
  private readonly towerPanel = el('tower-panel');
  private readonly towerFill = el('tower-fill');
  private readonly towerText = el('tower-text');
  private readonly bossPanel = el('boss-panel');
  private readonly bossFill = el('boss-fill');
  private readonly countdown = el('countdown');
  private readonly indicator = el('indicator');
  private readonly cooldownEls = new Map<string, HTMLElement>();
  private readonly screens: Record<Exclude<Screen, null>, HTMLElement> = {
    menu: el('screen-menu'),
    pause: el('screen-pause'),
    end: el('screen-end'),
    error: el('screen-error'),
  };
  private messageTimer = 0;
  private lastHint: string | null = null;

  constructor(buttons: ScreenButtons) {
    for (const node of Array.from(document.querySelectorAll<HTMLElement>('[data-cd]'))) {
      this.cooldownEls.set(node.dataset.cd ?? '', node);
    }
    el('btn-start').addEventListener('click', () => buttons.onStart());
    el('btn-sound').addEventListener('click', () => buttons.onToggleSound());
    el('btn-sound-pause').addEventListener('click', () => buttons.onToggleSound());
    el('mute-btn').addEventListener('click', () => buttons.onToggleSound());
    el('btn-resume').addEventListener('click', () => buttons.onResume());
    el('btn-restart').addEventListener('click', () => buttons.onRestart());
    el('btn-retry').addEventListener('click', () => buttons.onRetry());
    el('btn-new').addEventListener('click', () => buttons.onNewGame());
  }

  showHud(visible: boolean): void {
    this.hud.classList.toggle('hidden', !visible);
  }

  showScreen(screen: Screen): void {
    for (const key of Object.keys(this.screens) as (keyof typeof this.screens)[]) {
      this.screens[key].classList.toggle('hidden', key !== screen);
    }
  }

  setEnd(title: string, text: string, canRetry: boolean): void {
    el('end-title').textContent = title;
    el('end-text').textContent = text;
    el('btn-retry').classList.toggle('hidden', !canRetry);
  }

  setError(text: string): void {
    el('error-text').textContent = text;
  }

  setSoundLabel(muted: boolean): void {
    const label = muted ? 'Lyd: fra' : 'Lyd: til';
    el('btn-sound').textContent = label;
    el('btn-sound-pause').textContent = label;
    el('mute-btn').textContent = label;
  }

  /** Midlertidig besked i midten af skærmen. */
  showMessage(text: string, seconds = 4): void {
    this.message.textContent = text;
    this.message.classList.remove('hidden');
    this.messageTimer = seconds;
  }

  clearMessage(): void {
    this.messageTimer = 0;
    this.message.classList.add('hidden');
  }

  tickMessage(dt: number): void {
    if (this.messageTimer <= 0) return;
    this.messageTimer -= dt;
    if (this.messageTimer <= 0) this.message.classList.add('hidden');
  }

  update(v: HudView): void {
    const hpFrac = v.maxHp > 0 ? v.hp / v.maxHp : 0;
    const manaFrac = v.maxMana > 0 ? v.mana / v.maxMana : 0;
    this.hpFill.style.width = `${Math.max(0, hpFrac) * 100}%`;
    this.manaFill.style.width = `${Math.max(0, manaFrac) * 100}%`;
    this.hpText.textContent = `${Math.ceil(v.hp)}`;
    this.manaText.textContent = `${Math.floor(v.mana)}`;

    for (const [key, node] of this.cooldownEls) {
      const frac = v.cooldowns[key as keyof HudView['cooldowns']] ?? 0;
      node.classList.toggle('ready', frac <= 0);
      const overlay = node.querySelector('i') as HTMLElement | null;
      if (overlay) overlay.style.height = `${Math.min(1, Math.max(0, frac)) * 100}%`;
    }

    this.sealCount.textContent = `${v.sealCount}/3`;
    this.objective.textContent = v.objective;
    if (v.hint !== this.lastHint) {
      this.lastHint = v.hint;
      this.hint.textContent = v.hint ?? '';
      this.hint.classList.toggle('hidden', !v.hint);
    }

    this.towerPanel.classList.toggle('hidden', !v.tower.visible);
    if (v.tower.visible) {
      const pct = Math.round(Math.max(0, v.tower.protection) * 100);
      this.towerFill.style.width = `${pct}%`;
      this.towerText.textContent = `${pct}%`;
    }

    this.bossPanel.classList.toggle('hidden', !v.boss.visible);
    if (v.boss.visible) this.bossFill.style.width = `${Math.max(0, v.boss.hp) * 100}%`;

    if (v.countdown) {
      this.countdown.textContent = v.countdown;
      this.countdown.classList.remove('hidden');
    } else {
      this.countdown.classList.add('hidden');
    }

    this.updateIndicator(v.indicator);
  }

  /** Placerer pilen ved skærmkanten, når målet er uden for synsfeltet. */
  private updateIndicator(ind: { visible: boolean; ndcX: number; ndcY: number }): void {
    if (!ind.visible) {
      this.indicator.classList.add('hidden');
      return;
    }
    const m = Math.max(Math.abs(ind.ndcX), Math.abs(ind.ndcY), 1e-6);
    const sx = (ind.ndcX / m) * 0.86;
    const sy = (ind.ndcY / m) * 0.86;
    const px = ((sx + 1) / 2) * window.innerWidth;
    const py = ((1 - sy) / 2) * window.innerHeight;
    const angleDeg = (Math.atan2(ind.ndcX, ind.ndcY) * 180) / Math.PI;
    this.indicator.style.left = `${px}px`;
    this.indicator.style.top = `${py}px`;
    this.indicator.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;
    this.indicator.classList.remove('hidden');
  }
}
