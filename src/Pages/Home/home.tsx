import React from 'react';
import Header from "../../Components/Header";
import Release from "../../Components/Releases";
import LastReleases from '../../Components/LastReleases';
import Footer from '../../Components/Footer';
import { Scrollbars } from 'react-custom-scrollbars';

function Home() {
  return (
    <>
     <Scrollbars style={{ width: 500, height: 300 }}>
      <Header />
      <Release />
      <LastReleases/>
      <Footer/>
      </Scrollbars>
    </>
  );
}

export default Home;