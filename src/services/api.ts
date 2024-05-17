import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Certifique-se de que a URL base está correta
});

const fetchData = async (method: string, endpoint: string, data?: any) => {
  try {
    const response = await api.request({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao fazer solicitação ${method} para ${endpoint}: ${error.message}`);
  }
};

export default fetchData;
