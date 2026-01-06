import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : undefined, // Let --base flag work for builds
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
}));
