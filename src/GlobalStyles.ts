import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset de margens para o body e o html */
  body, html {
    margin: 0;
    padding: 0;
    font-size: 62.5%; /* 1rem será igual a 10px */

  }

  /* Outros estilos globais, se necessário */
`;



export default GlobalStyles;
