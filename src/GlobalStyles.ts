import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    text-decoration: none;
}
  /* Reset de margens para o body e o html */
  body, html {
    margin: 0;
    padding: 0;
    font-size: 62.5%; /* 1rem será igual a 10px */
    overflow-x: hidden;

  }
  ::-webkit-scrollbar {
    width: 10px; // Largura da barra de rolagem
  }

  ::-webkit-scrollbar-track {
    background: #464444;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #ebae4c, #d53532);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; // Cor do botão da barra de rolagem ao passar o mouse
  }

  /* Outros estilos globais, se necessário */
`;



export default GlobalStyles;
