import styled from 'styled-components';
import { backgrounds } from '../../theme';


export const TitleFooter = styled.div`
  height: 750px;
  padding: 0 20rem 0 15rem;
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
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: #ffffffff;
  }

  .line {
    margin: 0 0 10rem 0;
    border-top: 1px solid #3c3636;
    width: 50%;
  }
`;

export const LinksFooter = styled.div`
    font-size: 2.8rem;

    a {
        text-decoration: none;
        margin: 2rem;
        color: #df2c0f;

    }

`;