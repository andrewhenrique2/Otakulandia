import styled, { keyframes } from 'styled-components';
import { backgrounds } from '../../theme';

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

  .h1z {
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

const fireAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(20deg);
  }
`;

export const LastReleases = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    margin: 0;
    font-size: 4rem;
    color: #ff5733;
    animation: ${fireAnimation} 5s ease-in-out infinite;
  }

  .fire {
    width: 60px;
    height: 60px;
    filter: hue-rotate(3deg) brightness(110%) saturate(100%) contrast(150%);
    animation: ${fireAnimation} 5s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    p {
      font-size: 2rem;
    }
    .fire {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ReleasesContainer = styled.div`
  height: 100%;
  background: 
    linear-gradient(rgba(36, 36, 36, 0.9), #100e0e),
    url(${backgrounds.kage}) center/cover no-repeat;
  padding: 3rem 13rem 0 13rem;
  padding-bottom: 8rem;
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

export const LastReleasesVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ReleaseVideo = styled.div`
  margin: 0;
  margin-top: 1.9rem;
  border: 3px solid #171518;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #100e0e;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1.5);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 100%;

  .info {
    padding: 1rem;
  }

  h1, p {
    filter: brightness(150%);
    max-width: 100%;
    font-family: K2D;
    border-radius: 10px;
    margin: .8rem auto;
    background-color: #282424;
    padding: .5rem;
    color: #ffa50a;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 1);
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    color: #ffffff;
  }

  .wtf {
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

    span {
      font-size: 2rem;
      font-family: K2D;
      font-weight: bolder;
      color: orange;
    }
  }

  .image-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .info {
      padding: 0.5rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
    .wtf {
      width: 70%;
      font-size: 1.2rem;
      span {
        font-size: 1.5rem;
      }
    }
    .image-container {
      height: 200px;
    }
  }
`;

export const LogoImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 300px; 
  object-fit: cover;
`;

export const NumberEp = styled.div``;
