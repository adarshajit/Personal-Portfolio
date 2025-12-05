import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/Components',
      '@pages': '/src/Pages',
      '@assets': '/src/Assets',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
});
