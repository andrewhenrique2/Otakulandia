import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Redireciona as requisições que começam com '/api' para o backend
    },
  },
  resolve: {
    alias: {
      'axios': path.resolve(__dirname, 'node_modules/axios'),
      'uuid': path.resolve(__dirname, 'node_modules/uuid')
    }
  },
  build: {
    rollupOptions: {
      external: ['axios', 'uuid']
    }
  }
});
