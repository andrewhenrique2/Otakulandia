import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import GlobalStyles from '../../GlobalStyles';
import { Container } from "./styles.ts";


function Watching() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container></Container>
      <Footer/>
    </>
  );
}

export default Watching;
