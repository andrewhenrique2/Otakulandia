import styled from 'styled-components';
import { backgrounds } from '../../theme';

// Estilo para o componente de container com barra de rolagem
export const ScrollableContainer = styled.div`



  /* Largura da barra de rolagem */
  scrollbar-width: thin; /* Para navegadores que suportam a propriedade scrollbar-width */
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }
  form {
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .h3z {
    color: white;
    font-family: K2D;
    font-size: 3rem;
  }

  /* Estilo para o polegar (thumb) da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor de fundo do polegar */
    border-radius: 4px; /* Raio das bordas do polegar */
  }

  /* Estilo para a barra de rolagem quando estiver passando o mouse sobre ela */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor de fundo do polegar ao passar o mouse */
  }

  /* Estilo para a barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* Cor de fundo da barra de rolagem */
    border-radius: 4px; /* Raio das bordas da trilha */
  }
`;

export const LastFilmsContainer = styled.div`
  height: 100%;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #060606),
    url(${backgrounds.kage}) center/cover no-repeat;
  padding: 3rem 13rem 0 13rem;
  font-family: 'Helvetica Neue';
  position: relative;
  background-attachment: fixed;
`;

export const Container = styled.div`
  display: flex;
  height: 600px;
  flex-wrap: wrap; /* Permite que os cards fiquem lado a lado e quebrem a linha se necessário */
  gap: 3rem;
`;

export const TitleFilms = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  /* Aplicar estilos específicos para a imagem .film */
  .film {
    width: 60px;
    height: 60px;
    filter: hue-rotate(3deg) brightness(110%) saturate(100%) contrast(150%); /* Ajustar a cor da imagem para #FF5056 */
  }

  /* Aplicar estilos específicos para o texto dentro do p */
  p {
    margin: 0;
    font-size: 4rem;
    color: #FF5056; /* Cor do texto */
  }

  /* Estilizar o ícone */
  .IconLastReleases {
    font-size: 5rem;
    color: #FFFFFF; /* Cor do ícone */
  }
`;
