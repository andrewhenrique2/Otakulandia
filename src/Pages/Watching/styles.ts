import styled, { keyframes } from 'styled-components';
import { backgrounds } from '../../theme';

export const Container = styled.div`
  height: 100%;
  background: 
    linear-gradient(rgba(36, 36, 36, 0.9), #100e0e),
    url(${backgrounds.kage}) center/cover no-repeat;
  padding: 3rem 13rem 0 13rem;
  padding-bottom: 8rem;
  font-family: 'Helvetica Neue';
  position: relative;
  background-attachment: fixed;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #cccccc;
  font-size: 16px;
  margin-bottom: 20px;
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
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #888;
      cursor: not-allowed;
    }
  }
`;

export const EpisodeNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  button {
    background-color: #555;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #777;
    }
  }
`;
