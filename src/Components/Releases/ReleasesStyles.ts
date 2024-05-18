import styled, { keyframes } from 'styled-components';
import { backgrounds } from '../../theme';

export const ScrollableContainer = styled.div`
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
`;

export const LastReleasesVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
  .wtf {
    padding: 1rem;
    font-family: 'Helvetica Neue';
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 1rem auto;
    border: 1px solid #282424;
    background-color: #282424;
    border-radius: 10px;
    width: 50%;
    gap: 1rem;
    font-size: 1.5rem;
    color: #ffffff;
    span {
      margin-bottom: .3rem;
      font-size: 2rem;
      font-family: K2D;
      font-weight: bolder;
      color: orange;
    }
  }
`;

export const ReleaseVideo = styled.div`
  margin: 0;
  margin-top: 1.9rem;
  border: 3px solid #151714;
  background-color: #100e0e;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 2rem;
    color: white;
    margin-bottom: 0.8rem;
  }

  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .score {
    color: orange;
  }

  .url {
    color: dodgerblue;
    text-decoration: underline;
  }
`;

export const LogoImg = styled.img`
  max-width: 100%;
  height: 230px;
  object-fit: cover;
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
