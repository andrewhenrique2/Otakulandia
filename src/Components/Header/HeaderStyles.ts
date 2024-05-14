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
  justify-content: space-between; /* Distribui o espaço entre os elementos */
  align-items: center; /* Centraliza verticalmente os elementos */
  padding: 0;
  margin: 0;
  padding-left: 5rem; /* Adiciona um espaçamento à esquerda para o LogoImg */
  padding-right: 5rem; /* Adiciona um espaçamento à direita para o HeaderNavegation */
`;

export const UserNavegation = styled.div`
  display: flex;
  margin-left: auto;
  gap: 3rem;
  align-items: center; /* Centraliza verticalmente os elementos */
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
  gap: 3rem;
`;

export const HeaderAccount = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 0.01rem solid #a1a1a1;
  border-radius: 0.5rem;
  padding: 0 0.3rem 0 0.3rem;
  line-height: 2.5rem;
  box-shadow: 0 2px 4px rgba(128, 128, 128, 0.3); /* Alterando para uma sombra cinza */

  &:hover {
    box-shadow: inset 0 0 10px rgba(128, 128, 128, 0.5); /* Sombra cinza mais escura no hover */
    background-color: rgba(128, 128, 128, 0.2); /* Cinza transparente no hover */
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
`;

export const Container = styled.div`
  display: flex;
  gap: 17rem;
  align-items: center;
  justify-content: space-normal;
  width: 100%;
  padding: 0 10rem; /* Adiciona padding para manter os elementos afastados das bordas */
`;

export const LogoImg = styled.img`
  cursor: pointer;
  width: 200px;
  height: 130px;
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
  align-items: center; /* Centralizar itens verticalmente */
  justify-content: center; /* Centralizar texto horizontalmente */
  border-radius: 5px; /* Adicionar borda arredondada */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adicionar sombra */
  outline: none; /* Remover contorno ao focar */
  animation: ${fadeIn} 0.5s ease forwards; /* Aplicar a animação de fade-in */

  &:hover {
    filter: brightness(1.2) contrast(1.2); /* Aumentar o brilho e o contraste no hover */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Altere a sombra no hover */
    animation: ${scaleIn} 0.3s ease forwards; /* Aplicar a animação de scale no hover */
  }

  &:not(:hover) {
    animation: ${scaleOut} 0.5s ease forwards; /* Aplicar a animação de scale ao sair do hover */
  }
`;

export const StyledIcon = styled(BsPersonFillAdd)`
  font-size: 24px; /* Defina o tamanho do ícone */
  margin-right: 8px; /* Adicione espaçamento à direita do ícone */
  transition: transform 0.3s ease; /* Adicione uma transição suave */
  &:hover {
    transform: scale(1.1); /* Aumentar a escala no hover */
  }
`;

export const StyledButton = styled(Button)`
  /* Adicione seus estilos personalizados aqui */

`;
// No HeaderStyles.ts

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

  padding: 0 1rem; /* Adiciona um pouco de espaço para a aba */
  margin-right: 1rem; /* Adiciona um espaço entre o logo e a aba */
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
`;

export const PopUpWindow = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%); /* Centraliza a janela pop-up horizontalmente */
  background-color: #2b2b2b;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;


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
    background-color: #1e1e1e; /* Altera a cor de fundo no hover */
    /* Adicione qualquer outra propriedade de estilo desejada para o hover */
  }

  .titleListAnimes{
   height: 12rem;
  
  }
  .titleListFilms {
    color: gold;
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

  padding: 0 1rem; /* Adiciona um pouco de espaço para a aba */
  margin-right: 1rem; /* Adiciona um espaço entre o logo e a aba */
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

`;