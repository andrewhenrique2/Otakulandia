import axios from 'axios'; // Importe o axios para lidar com requisições HTTP

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Defina a URL base para suas solicitações
});

// Função para fazer uma solicitação genérica ao backend
const fetchData = async (method: string, endpoint: string, data?: any) => {
  try {
    // Faça uma solicitação ao backend usando o método especificado e o endpoint fornecido
    const response = await api.request({
      method,
      url: endpoint,
      data,
    });
    return response.data; // Retorne os dados recebidos do backend
  } catch (error) {
    throw new Error(`Erro ao fazer solicitação ${method} para ${endpoint}: ${error.message}`);
  }
};

export default fetchData; // Exporte a função fetchData para uso em outros componentes
