import styled, { keyframes } from 'styled-components';
import { backgrounds } from '../../theme';

export const Container = styled.div`
  height: 100%;
  background: 
    linear-gradient(rgba(36, 36, 36, .9), #100e0e),
    url(${backgrounds.kage}) center/cover no-repeat;
  padding: 3rem 36rem 0 36rem;
  padding-bottom: 8rem;
  font-family: 'Helvetica Neue';
  position: relative;
  background-attachment: fixed;
`;




export const Title = styled.h2`
  font-family: K2D;
  font-size: 3rem;
  margin-bottom: 10px;
  background: linear-gradient(to bottom, #c04404, #f88404);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 0px rgba(248, 132, 4, 0.7), 0 0 20px rgba(248, 132, 4, 0.7), 0 0 0px rgba(248, 132, 4, 0.7);
`;



export const Description = styled.p`
  color: #ffffff;
  font-family: K2D;
  font-size: 2.3rem;
  margin-bottom: 20px;
  text-shadow: 0 0 32px rgba(255, 255, 255, 0.3), 0 0 6px rgba(255, 255, 255, 0.3), 0 0 29px rgba(255, 255, 255, 0.3);
`;




export const EpisodeList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EpisodeItem = styled.li`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const VideoPlayer = styled.div`
  width: 100%;
  max-width: 1200px; /* Aumente o valor para tornar o player mais largo */
  height: 675px; /* Aumente o valor para tornar o player mais alto */
  margin: 0 auto 20px auto;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover; /* Adicione esta linha para garantir que o vídeo preencha o espaço sem tarjas pretas */
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    background: linear-gradient(to bottom, #c04404, #f88404); /* Adicionando o linear gradient */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5rem; /* Aumentando o tamanho da fonte para os ícones */

    &:disabled {
      background-color: #888;
      cursor: not-allowed;
    }

    &:hover {
      filter: brightness(1.2); /* Adicionando efeito de hover */
    }
  }
`;

export const EpisodeNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  button {
    background: linear-gradient(to bottom, #c04404, #f88404);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px; /* Bordas mais arredondadas */
    cursor: pointer;
    font-size: 1.6rem; /* Aumentando o tamanho da fonte */
    font-weight: bold; /* Tornando o texto mais espesso */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adicionando uma sombra */
    transition: transform 0.2s, box-shadow 0.2s; /* Suavizando a transição */

    &:hover {
      transform: translateY(-2px); /* Levantando o botão ao passar o mouse */
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Aumentando a sombra ao passar o mouse */
      background: linear-gradient(to bottom, #f88404, #c04404); /* Mudando o gradiente ao passar o mouse */
    }

    &:focus {
      outline: none; /* Removendo a borda padrão do foco */
      box-shadow: 0 0 0 3px rgba(255, 136, 4, 0.4); /* Adicionando uma borda de foco */
    }

    &:active {
      transform: translateY(0); /* Reduzindo o movimento ao clicar */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Mantendo a sombra original ao clicar */
    }
  }
`;
