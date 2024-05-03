import styled, { keyframes } from "styled-components";
import backgroundregister from '../../assets/solo3.jpg';

// Definindo a animação de fadeIn
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

export const Container = styled.div`
  justify-content: start;
  flex-wrap: wrap;
  margin: 0 auto;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(rgba(36, 36, 36, 0.7), #100e0e), url(${backgroundregister}) center/cover no-repeat;
  object-fit: contain;
  padding: 3rem 14rem 0 43rem;
  padding-bottom: 8rem;
  font-family: 'Helvetica Neue';
  position: relative;
  background-attachment: fixed;
  background-position: right top;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 27.8rem;
  height: 70rem;
  border-radius: 10px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), #100e0e), url(${backgroundregister}) center/cover no-repeat;
  padding: 0 13rem 0 13rem;
  font-family: 'Helvetica Neue';
  position: relative;
  background-attachment: fixed;

  .CadastrarButton {
    background: linear-gradient(to bottom, #c04404, #f88404);
    color: #fff;
    padding: 8px 30px;
    margin: 2rem;
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
  }

  .declaracao {
    margin: 0 auto;
    text-align: start;
    justify-content: center;
    text-align: center;
    font-family: 'Helvetica Neue';
    color: #fff;
    font-size: 1.8rem;

    span {
      color: #ac2c18;
    }
  }

  h2 {
    color: #ffffffff;
    font-family: K2D;
    font-size: 4rem;
  }

  img {
    margin-bottom: -4rem;
    width: 150px;
    height: 150px;
  }

`;

export const Input = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem; /* Ajuste conforme necessário */
`;

export const Icon = styled.span`
  position: absolute;
  left: -1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
`;

export const InputField = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 4rem;
  border: 2px solid #898989;
  background-color: #323232;
  margin: 0; /* Ajuste conforme necessário */
  border-radius: 5px; /* Ajuste conforme necessário */
  color: #fff;
  font-size: 1.6rem;
  outline: none;

  /* Muda a cor da borda ao focar o input */
  &:focus {
    border-color: #fb8304; /* Cor da borda ao focar */
  }
`;

