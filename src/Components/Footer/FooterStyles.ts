// src/Components/Footer/FooterStyles.ts
import styled from 'styled-components';
import { backgrounds } from '../../theme';

export const TitleFooter = styled.div`
  height: 400px;
  margin-top: auto;  /* Adiciona espaço flexível acima do footer para empurrá-lo para a parte inferior */
  padding: 0 20rem;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #060606 80%, #000000),
    url(${backgrounds.kage}) center/cover;
  font-family: 'Helvetica Neue';
  position: relative;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.5rem;
    margin-bottom: 4rem;
    color: #fff;
  }

  .line {
    margin: 2rem 0;
    border-top: 1px solid #3c3636;
    width: 50%;
  }
`;

export const Slogan = styled.h3`
  font-family: 'K2D', sans-serif;
  font-size: 2.5rem;
  color: #f58004;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

export const LinksFooter = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 3rem;
  margin-bottom: 3rem;

  a {
    text-decoration: none;
    color: #df2c0f;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #f58004;
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 4rem; /* Ajuste o tamanho dos ícones conforme necessário */
  }
`;
