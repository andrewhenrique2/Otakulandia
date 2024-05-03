// Home.tsx
import React from 'react';
import Header from "../../Components/Header";
import Release from "../../Components/Releases";
import LastReleases from '../../Components/LastReleases';
import Footer from '../../Components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Release />
      <LastReleases/>
      <Footer/>
    </>
  );
}

export default Home;
