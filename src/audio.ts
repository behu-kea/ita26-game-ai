export type SfxName =
  | 'swing'
  | 'shot'
  | 'reload'
  | 'holy'
  | 'seal'
  | 'hit'
  | 'hurt'
  | 'pickup'
  | 'upgrade'
  | 'stomp'
  | 'bell'
  | 'twig'
  | 'heartbeat'
  | 'warn'
  | 'death'
  | 'victory'
  | 'defeat';

/**
 * Syntetiseret lyd via WebAudio. Ingen lydfiler kræves. AudioContext oprettes
 * først efter et brugerklik (unlock), som browsere kræver.
 */
export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private muted = false;
  private paused = false;
  private bellTimer = 0;
  private music: HTMLAudioElement | null = null;

  get isMuted(): boolean {
    return this.muted;
  }

  /** Kaldes fra en brugerhandling (klik) for at tillade lyd. */
  unlock(): void {
    if (this.paused) return;
    if (!this.ctx) {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.6;
      this.master.connect(this.ctx.destination);
      this.noise = this.makeNoise();
      this.startDrone();
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume();
    this.startMusic();
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(muted ? 0 : 0.6, this.ctx.currentTime, 0.05);
    }
    if (this.music) this.music.muted = muted;
  }

  toggleMuted(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  /** Stopper lyd når spillet er pauset. */
  suspend(): void {
    this.paused = true;
    if (this.ctx && this.ctx.state === 'running') void this.ctx.suspend();
    this.music?.pause();
  }

  resume(): void {
    this.paused = false;
    if (this.ctx && this.ctx.state === 'suspended') void this.ctx.resume();
    this.startMusic();
  }

  /** Starter baggrundsmusikken én gang; den spiller videre, indtil den pauses. */
  private startMusic(): void {
    if (this.paused) return;
    if (!this.music) {
      this.music = new Audio(`${import.meta.env.BASE_URL}music.m4a`);
      this.music.loop = true;
      this.music.volume = 0.45;
      this.music.muted = this.muted;
    }
    if (this.music.paused) void this.music.play().catch(() => undefined);
  }

  /** Kaldes hvert billede for ambiente klokker. */
  update(dt: number): void {
    if (!this.ctx) return;
    this.bellTimer -= dt;
    if (this.bellTimer <= 0) {
      this.bellTimer = 28 + Math.random() * 14;
      this.play('bell');
    }
  }

  play(name: SfxName): void {
    const ctx = this.ctx;
    const out = this.master;
    if (!ctx || !out || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    switch (name) {
      case 'swing':
        this.noiseBurst(0.18, 0.25, 1800, t, 'bandpass');
        break;
      case 'shot':
        this.noiseBurst(0.25, 0.7, 900, t, 'lowpass');
        this.tone(160, 0.2, 'sawtooth', 0.25, t, 60);
        break;
      case 'reload':
        this.tone(900, 0.05, 'square', 0.12, t);
        this.tone(640, 0.06, 'square', 0.12, t + 0.35);
        break;
      case 'holy':
        this.tone(520, 0.9, 'sine', 0.18, t, 1040);
        this.tone(780, 0.8, 'triangle', 0.1, t + 0.05, 1560);
        break;
      case 'seal':
        this.tone(330, 1.2, 'sine', 0.22, t, 660);
        this.tone(495, 1.2, 'sine', 0.12, t + 0.1, 990);
        break;
      case 'hit':
        this.noiseBurst(0.12, 0.45, 2400, t, 'highpass');
        this.tone(220, 0.12, 'square', 0.12, t, 90);
        break;
      case 'hurt':
        this.tone(180, 0.35, 'sawtooth', 0.3, t, 70);
        this.noiseBurst(0.2, 0.3, 700, t, 'lowpass');
        break;
      case 'pickup':
        this.tone(660, 0.12, 'sine', 0.2, t);
        this.tone(990, 0.18, 'sine', 0.2, t + 0.08);
        break;
      case 'upgrade':
        [392, 523, 659, 784].forEach((f, i) => this.tone(f, 0.5, 'triangle', 0.18, t + i * 0.09));
        break;
      case 'stomp':
        this.tone(70, 0.3, 'sine', 0.7, t, 40);
        this.noiseBurst(0.1, 0.25, 400, t, 'lowpass');
        break;
      case 'bell':
        this.tone(196, 3.2, 'sine', 0.16, t);
        this.tone(293, 3.0, 'sine', 0.07, t + 0.02);
        break;
      case 'twig':
        this.noiseBurst(0.06, 0.5, 3200, t, 'highpass');
        this.tone(900, 0.05, 'square', 0.08, t + 0.02, 300);
        break;
      case 'heartbeat':
        this.tone(60, 0.18, 'sine', 0.6, t, 45);
        this.tone(55, 0.16, 'sine', 0.45, t + 0.22, 40);
        break;
      case 'warn':
        this.tone(440, 0.25, 'square', 0.12, t);
        this.tone(440, 0.25, 'square', 0.12, t + 0.35);
        break;
      case 'death':
        this.tone(300, 1.0, 'sawtooth', 0.2, t, 50);
        this.noiseBurst(0.6, 0.3, 500, t, 'lowpass');
        break;
      case 'victory':
        [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.8, 'triangle', 0.2, t + i * 0.2));
        break;
      case 'defeat':
        [330, 277, 220, 165].forEach((f, i) => this.tone(f, 0.9, 'sawtooth', 0.14, t + i * 0.35, f * 0.8));
        break;
    }
  }

  private makeNoise(): AudioBuffer {
    const ctx = this.ctx as AudioContext;
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  /** Lav vind/drone-baggrund. */
  private startDrone(): void {
    const ctx = this.ctx as AudioContext;
    const out = this.master as GainNode;
    const low = ctx.createOscillator();
    low.type = 'sine';
    low.frequency.value = 52;
    const lowGain = ctx.createGain();
    lowGain.gain.value = 0.05;
    low.connect(lowGain).connect(out);
    low.start();

    const wind = ctx.createBufferSource();
    wind.buffer = this.noise;
    wind.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 380;
    filter.Q.value = 0.7;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.05;
    wind.connect(filter).connect(windGain).connect(out);
    wind.start();
  }

  private tone(freq: number, dur: number, type: OscillatorType, vol: number, when: number, slideTo?: number): void {
    const ctx = this.ctx as AudioContext;
    const out = this.master as GainNode;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, when);
    if (slideTo !== undefined) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), when + dur);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(vol, when + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    osc.connect(gain).connect(out);
    osc.start(when);
    osc.stop(when + dur + 0.05);
  }

  private noiseBurst(dur: number, vol: number, freq: number, when: number, type: BiquadFilterType): void {
    const ctx = this.ctx as AudioContext;
    const out = this.master as GainNode;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol, when);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    src.connect(filter).connect(gain).connect(out);
    src.start(when, Math.random());
    src.stop(when + dur + 0.05);
  }
}
