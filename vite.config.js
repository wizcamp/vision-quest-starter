import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vision-quest/', // Students will change this to their repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
