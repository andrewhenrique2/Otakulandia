// src/services/animeApi.ts
import axios from 'axios';

const animeApi = axios.create({
  baseURL: 'https://kitsu.io/api/edge', // URL base para a API de animes
  timeout: 10000, // Tempo limite de 10 segundos
});

export default animeApi;
