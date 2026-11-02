import './style.css';
import { Game } from './game/game';

function showFatal(text: string): void {
  const errorScreen = document.getElementById('screen-error');
  const errorText = document.getElementById('error-text');
  if (errorText) errorText.textContent = text;
  errorScreen?.classList.remove('hidden');
}

function hasWebGL2(): boolean {
  try {
    const probe = document.createElement('canvas');
    return probe.getContext('webgl2') !== null;
  } catch {
    return false;
  }
}

function boot(): void {
  const container = document.getElementById('app');
  if (!container) {
    showFatal('Spillet kunne ikke starte: mangler spillets rodelement.');
    return;
  }
  if (!hasWebGL2()) {
    showFatal('Din browser understøtter ikke WebGL 2, som spillet kræver. Prøv en nyere version af Chrome, Edge eller Firefox.');
    return;
  }
  try {
    new Game(container);
  } catch (err) {
    console.error(err);
    showFatal('Spillet kunne ikke starte. Din grafikdriver eller browser blokerer muligvis WebGL.');
  }
}

boot();
