import styled from 'styled-components';
import { backgrounds } from '../../theme';

// Estilo para o componente de container com barra de rolagem
export const ScrollableContainer = styled.div`
  background: 
    linear-gradient(rgba(36, 36, 36, 0.9), #100e0e),
    url(${backgrounds.kage}) center/cover no-repeat;
  background-attachment: fixed;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    input, textarea, button {
      max-width: 40rem;
      margin: 1rem auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    button {
      padding: 2rem;
      border: none;
      border-radius: 10px;
      background-color: #535050;
      color: #e05000;
      cursor: pointer;
      font-size: 2rem;
    }
  }

  .h3z {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    background-color: transparent;
    font-size: 3rem;
    font-family: K2D;
    color: #fff;
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

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza os cards horizontalmente */

  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
  }
`;

export const TitleFilms = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .film {
    width: 60px;
    height: 60px;
    filter: hue-rotate(3deg) brightness(110%) saturate(100%) contrast(150%);
  }

  p {
    margin: 0;
    font-size: 4rem;
    color: #FF5056;
  }

  .IconLastReleases {
    font-size: 5rem;
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    .film {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 2rem;
    }
  }
`;
