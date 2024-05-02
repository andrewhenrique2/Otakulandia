import React from 'react';
import { TitleFooter, LinksFooter } from './FooterStyles'


const Footer = () => {
  return (

  <TitleFooter>
    <span className='line'></span>
    <p>Otakulandia © 2024 <br/> Site desenvolvido por Andrew </p>
    <LinksFooter>
        <a href="#">Discord</a>
        <a href="#">Instagram</a>
    </LinksFooter>
  </TitleFooter>
  )
};

export default Footer;
