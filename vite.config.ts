import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path-browserify';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Redireciona as requisições que começam com '/api' para o backend
    },
  },
  resolve: {
    alias: {
      'react-toastify': resolve('node_modules/react-toastify')
    }
  }
});
