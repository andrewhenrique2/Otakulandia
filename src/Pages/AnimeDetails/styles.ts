import styled from "styled-components";
import { backgrounds } from '../../theme';

export const Container = styled.div`
  padding: 9rem 17rem 0 17rem;
  height: 100%;
  background: 
  linear-gradient(rgba(36, 36, 36, 0.95), #100e0e), /* Aqui ajustamos a transparência para 0.95 */
url(${backgrounds.kage}) center/cover no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;


  .anime-details {
    display: flex;
    gap: 2rem;
  }

  .title-anime {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 20%;

    p {
      margin-top: 1rem;
      color: #fff;
      font-size: 2.5rem;
      font-family: K2D;
    }
  }

  .sinopse {
    font-size: 2rem;
    color: #fff;
    margin-left: 3rem;

    .score {
      font-size: 3rem;
      font-family: K2D;
    }
  }

  .age {
    font-size: 3rem;
    font-family: K2D;
  }

.descricao {
  font-size: 2.1rem;
  font-family: K2D;

}
`;

