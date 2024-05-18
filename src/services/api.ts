// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Certifique-se de que a URL base está correta
  timeout: 10000, // Aumentar o tempo limite para 10 segundos
});

export default api;
