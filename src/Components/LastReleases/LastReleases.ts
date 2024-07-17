import styled from 'styled-components';
import { backgrounds } from '../../theme';

export const ScrollableContainer = styled.div`
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 8px;
  }
  form {
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  .h3z {
    color: white;
    font-family: K2D;
    font-size: 3rem;
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

export const TitleLastAnimes = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .fire {
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
    .fire {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 2rem;
    }
  }
`;

export const ReleaseVideo = styled.div`
  margin-top: 1.9rem;
  border: 3px solid #171518;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #100e0e;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1.5);
  border-radius: 10px;
  max-width: 300px;
  position: relative; /* Adicionei esta linha para posicionar o botão remover */

  h1 {
    filter: brightness(150%);
    max-width: 100%;
    font-family: K2D;
    border-radius: 10px;
    margin: .8rem auto 0 auto; /* Removi a margem inferior */
    background-color: #282424;
    padding: .5rem;
    font-size: 1.8rem;
    color: #ffa50a;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 1);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;

    h1 {
      font-size: 1.5rem;
      margin: 0.5rem auto 0 auto; /* Removi a margem inferior */
    }
  }
`;

export const LogoImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;


`;

export const TitleFilms = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: start;
  gap: 2.3rem;
  margin: 8rem 0 0 2rem;

  p {
    font-size: 3.2rem;
    font-family: 'Helvetica Neue';
    color: #ebae4c;
  }

  img {
    padding-bottom: 2rem;
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 4rem 0 0 0;

    p {
      font-size: 2rem;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
