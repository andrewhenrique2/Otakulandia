// src/Components/Footer/index.tsx
import React from 'react';
import { TitleFooter, LinksFooter, Slogan } from './FooterStyles';
import { FaDiscord, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <TitleFooter>
      <Slogan>Conecte-se com a Otakulandia</Slogan>
      <LinksFooter>
        <a href="#"><FaDiscord /></a>
        <a href="#"><FaInstagram /></a>
      </LinksFooter>
      <p>Otakulandia © 2024 <br /> Site desenvolvido por Andrew</p>
      <span className='line'></span>
    </TitleFooter>
  );
};

export default Footer;
