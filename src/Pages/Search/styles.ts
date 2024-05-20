import { backgrounds } from './../../theme';
import styled from "styled-components";



export const Container = styled.div`
  min-height: 100vh;  /* Garante que o container ocupe pelo menos 100% da altura da janela */
  display: flex;
  flex-direction: column;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #060606),
    url(${backgrounds.kage}) center/cover no-repeat;
  font-family: 'Helvetica Neue';
  background-attachment: fixed;

  .title-anime {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    font-size: 2rem;
    color: #fff;
    margin: 1rem;
  }

  .inputsearch {
    border: none;
    border-bottom: 2px solid #757575;
    font-size: 4rem;
    min-width: 55.5rem;
    width: 40%;
    height: 5rem; 
    margin: 3rem;
    background-color: transparent;
    transition: border-bottom-color 0.3s; 
    outline: none;
    position: relative;
  }
  
  .inputsearch:focus {
    color: #fff;
    border-bottom-color: #fb8304; 
  }
  
  .Search {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #141519;
  }

  .anime-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Definindo 5 colunas com largura flexível */
    list-style: none;
    grid-gap: 4.5rem;
    margin: 4rem 15rem 0 15rem;
  }

  .anime-list img {
    max-width: 100%;
  }
`;




export const SearchInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 15rem 0 15rem;
 height: 100%;
 background-color: #141519;
`;