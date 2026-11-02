import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the build works both at a domain root and under /<repo>/ on GitHub Pages.
  base: './',
  server: { port: 5173 },
  build: { target: 'es2020', chunkSizeWarningLimit: 1200 },
});
