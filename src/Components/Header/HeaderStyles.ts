import styled, { keyframes } from 'styled-components';
import { BsPersonFillAdd } from "react-icons/bs"; // Importe do ícone BsPersonFillAdd

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Definindo a animação de scale no hover
const scaleIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Definindo a animação de scale ao sair do hover
const scaleOut = keyframes`
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
`;

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


export const HeaderContainer = styled.header`
  background-color: #100e0e;
  display: flex;
  flex-direction: column; /* Ajuste para coluna em telas menores */
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const UserNavegation = styled.div`
  display: flex;
  margin-left: auto;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Esconde a navegação do usuário em telas menores */
  }
`;

export const Search = styled.div`
  .SearchIcon {
    cursor: pointer;
    color: #ffffff;
    font-size: 4.5rem;

    &:hover {
      color: #848484;
    }
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1rem; /* Reduz o espaço entre os elementos em telas menores */
  }
`;

export const HeaderAccount = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 0.01rem solid #a1a1a1;
  border-radius: 0.5rem;
  padding: 0 0.3rem 0 0.3rem;
  line-height: 2.5rem;
  box-shadow: 0 2px 4px rgba(128, 128, 128, 0.3);

  &:hover {
    box-shadow: inset 0 0 10px rgba(128, 128, 128, 0.5);
    background-color: rgba(128, 128, 128, 0.2);
  }
  .IconLoginAccount {
    color: #fff;
    font-size: 2.5rem;
    margin-left: 1rem;
  }
  p {
    margin: 1rem;
    color: #fff;
    font-size: 2rem;
    font-family: K2D;
  }

  @media (max-width: 768px) {
    padding: 0.2rem;
    .IconLoginAccount {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 17rem;
  align-items: center;
  justify-content: space-between; /* Mudança para space-between */
  width: 100%;
  padding: 0 10rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Ajuste para coluna em telas menores */
    gap: 1rem; /* Reduz o espaço entre os elementos em telas menores */
    padding: 0 2rem;
  }
`;

export const LogoImg = styled.img`
  cursor: pointer;
  width: 200px;
  height: 130px;

  @media (max-width: 768px) {
    width: 150px; /* Ajuste do tamanho do logo em telas menores */
    height: 100px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, #c04404, #f88404);
  color: #fff;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;
  animation: ${fadeIn} 0.5s ease forwards;

  &:hover {
    filter: brightness(1.2) contrast(1.2);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    animation: ${scaleIn} 0.3s ease forwards;
  }

  &:not(:hover) {
    animation: ${scaleOut} 0.5s ease forwards;
  }

  @media (max-width: 768px) {
    padding: 10px 20px; /* Ajuste do padding em telas menores */
    font-size: 1.4rem; /* Ajuste do tamanho da fonte em telas menores */
  }
`;

export const StyledIcon = styled(BsPersonFillAdd)`
  font-size: 24px;
  margin-right: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Ajuste do tamanho do ícone em telas menores */
  }
`;

export const StyledButton = styled(Button)`
.logouticon {
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0.5rem; /* Ajuste do margin-right em telas menores */
  }
}
`;

export const AnimeFilmsTab = styled.div`
  position: relative;
  cursor: pointer;
  color: #fff;
  font-size: 2.8rem;
  font-family: 'Helvetica Neue';
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: -11rem;
  padding: 0 1rem;
  margin-right: 1rem;
  
  &:hover .PopUpWindow {
    display: block;
    width: 400px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
  }

  .menuIcon {
    margin-top: .5rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 2.2rem; /* Ajuste do tamanho da fonte em telas menores */
    .menuIcon {
      font-size: 2.5rem; /* Ajuste do tamanho do ícone em telas menores */
    }
  }
`;

export const PopUpWindow = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2b2b2b;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 90%; /* Ajuste da largura em telas menores */
  }
`;

export const LinkDiscord = styled.div`
  font-size: 4rem;
  cursor: pointer;
  color: #ffff;
  margin-left: -10rem;
  margin-top: -.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .IconDiscord:hover {
    color: #848484;
  }

  @media (max-width: 768px) {
    font-size: 3rem; /* Ajuste do tamanho da fonte em telas menores */
    margin-left: 0;
  }
`;

export const MenuListTab = styled.div`
  cursor: pointer;
  color: #fff;
  font-size: 2.5rem;
  font-family: 'Helvetica Neue';
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0 1rem;
  margin-right: 1rem;
`;

export const PopUpWindowList = styled.div`
  font-size: 2rem;
  font-family: K2D;
  border-radius: .6rem;
  margin: 1rem 1rem 1rem 1rem;
  padding: 1.2rem;
  
  &:hover {
    transform: scale(1.05);
    background-color: #1e1e1e;
  }

  .titleListAnimes {
    height: 12rem;
  }

  .h3Films {
    width: 100%;
    max-width: 80%;
  }

  .titleListAnimes-donate {
    height: 12rem;
    color: #58cc02;
  }

  .titleListFilms {
    height: 12rem;
  }

  .titleListFilms-filmes {
    height: 12rem;
    color: gold;
  }

  .titleListFilms-notes {
    color: #ef314c;
    height: 12rem;
  }

  .IconAnimeList, .IconFilmList {
    margin-top: 0;
    width: 90px;
  }

  h2 {
    color: #d31269;
    gap: 1.5rem;
    display: flex;
    align-items: start;
    text-align: center;
    margin-top: 0rem;
  }

  h3 {
    color: #ffff;
    margin: -11rem 0 0 10.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Ajuste do tamanho da fonte em telas menores */
    h2, h3 {
      margin: 0.5rem; /* Ajuste do margin em telas menores */
    }
  }
`;

export const AnimeFilmsTab2 = styled.div`
  margin-left: -12rem;
  position: relative;
  cursor: pointer;
  color: #fff;
  font-size: 2.8rem;
  font-family: 'Helvetica Neue';
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0 1rem;
  margin-right: 1rem;
  
  &:hover .PopUpWindow {
    display: block;
    width: 400px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 2.2rem; /* Ajuste do tamanho da fonte em telas menores */
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block; /* Mostra o ícone do menu móvel em telas menores */
  }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: #100e0e;
  position: fixed; /* Mudança para fixed */
  top: 0; /* Ajusta para o topo da tela */
  left: 0;
  right: 0;
  z-index: 1000;
  
  a, button {
    color: #fff;
    font-size: 2rem;
    padding: 1rem;
    text-decoration: none;
    width: 100%;
    text-align: center;
    margin: 0.5rem 0;

    &:hover {
      background-color: #1e1e1e;
    }

    display: flex; /* Adiciona flex display */
    align-items: center; /* Centraliza verticalmente os ícones e o texto */
    justify-content: center; /* Centraliza horizontalmente */
  }

  @media (max-width: 768px) {
    display: flex; /* Mostra o menu móvel em telas menores */
  }
`;
