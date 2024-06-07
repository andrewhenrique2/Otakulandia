import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Redireciona as requisições que começam com '/api' para o backend
    },
  },
  resolve: {
    alias: {
      'axios': 'axios'
    }
  },
  build: {
    rollupOptions: {
      external: ['axios']
    }
  }
});
