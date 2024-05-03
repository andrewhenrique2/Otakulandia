import styled, { keyframes } from 'styled-components';
import { backgrounds } from '../../theme';

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

const fireAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(20deg);
  }
`;

// Estilizar o componente LastReleases
export const LastReleases = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  /* Aplicar estilos específicos para o texto dentro do p */
  p {
    margin: 0;
    font-size: 4rem;
    color: #ff5733; /* Cor inicial do texto */
    animation: ${fireAnimation} 5s ease-in-out infinite; /* Ajustar a duração e a curva de tempo */
  }

  /* Aplicar estilos específicos para a imagem .fire */
  .fire {
    width: 60px;
    height: 60px;
    filter: hue-rotate(3deg) brightness(110%) saturate(100%) contrast(150%); /* Ajustar a cor da imagem para #FF5056 */
    animation: ${fireAnimation} 5s ease-in-out infinite; /* Ajustar a duração e a curva de tempo */
  }
`;

export const ReleasesContainer = styled.div`
 height: 100%;
  background: 
    linear-gradient(rgba(36, 36, 36, 0.9), #100e0e), /* Aqui ajustamos a transparência para 0.9 */
    url(${backgrounds.kage}) center/cover no-repeat;
  padding: 3rem 13rem 0 13rem;
  padding-bottom: 8rem;
  font-family: 'Helvetica Neue';
  position: relative;
  background-attachment: fixed;
`;




// LAST RELEASES VIDEOS
export const LastReleasesVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Define o número de colunas */
  grid-gap: 15px; /* Adiciona espaçamento entre os cards */
`;

export const ReleaseVideo = styled.div`

    margin-top: 1.9rem;
    border: 3px solid #151714;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #100e0e;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1.5); /* Adiciona uma sombra escura */

    h1 {
        font-family: K2D;
        font-size: 2.5rem;
        color: #ffffff;
    }
`;



export const LogoImg = styled.img`
    max-width: 100%;
    height: 230px;
    object-fit: cover;

  /* Adicione outros estilos desejados aqui */
`;

export const NumberEp = styled.div`
font-family: 'Helvetica Neue';
align-items: center;
text-align: center;
justify-content: center;
margin: 1rem auto;
border: 1px solid #282424;
background-color: #282424;
border-radius: 10px;
width: 50%;
gap: 1rem;
display: flex;
font-size: 1.5rem;
color: #ffffff;

.epi {
    font-size: 2rem;
    margin-top: 16.5px;
    font-family: K2D;
    font-weight: bolder;
    color: orange;
}
`;