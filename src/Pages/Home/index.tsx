// Home.tsx
import React from 'react';
import Header from "../../Components/Header";
import Release from "../../Components/Releases";
import LastReleases from '../../Components/LastReleases';
import Footer from '../../Components/Footer';
import LastFilms from '../../Components/LastFilms'
function Home() {
  return (
    <>
      <Header />
      <Release />
      <LastReleases/>
      <LastFilms/>
      <Footer/>
    </>
  );
}

export default Home;
