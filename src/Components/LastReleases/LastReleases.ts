import styled from 'styled-components';
import { backgrounds } from '../../theme';


// Estilo para o componente de container com barra de rolagem
export const ScrollableContainer = styled.div`
  /* Largura da barra de rolagem */
  scrollbar-width: thin; /* Para navegadores que suportam a propriedade scrollbar-width */
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
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


export const LastReleasesContainer = styled.div`
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
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Define o número de colunas */
  grid-gap: 15px; /* Adiciona espaçamento entre os cards */
`;
export const TitleLastAnimes = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  /* Aplicar estilos específicos para a imagem .fire */
  .fire {
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


export const ReleaseVideo = styled.div`
    margin-top: 1.9rem;
    border: 3px solid #171518;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #100e0e;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1.5); /* Adiciona uma sombra escura */
    border-radius: 10px;

    max-width: 100%; /* Defina o máximo de largura para 100% do contêiner pai */


    h1 {
        filter: brightness(150%);
        max-width: 60%;
        max-height: 8%;
        font-family: K2D;
        border-radius: 10px;
        margin: .8rem auto;
        background-color: #282424;
        padding: .5rem;
        font-size: 2rem;
        color: #ffa50a;
    }
`;

export const LogoImg = styled.img`
    border-radius: 10px;
     max-width: 100%;
   height: 350px; 
   object-fit: cover;

`;

export const TitleFilms = styled.div`

display: flex;
gap: 2.3rem;
margin: 8rem 0 0 2rem;

p {
  font-size: 2.8rem;
  color: #ffffffff;
}

img {
  width: 60px;
  height: 60px;
}

`;