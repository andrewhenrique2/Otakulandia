// LastReleases.tsx
import React from "react";
import { LastReleasesContainer, Container, TitleLastAnimes, TitleFilms, ScrollableContainer } from './LastReleases';
import ReleaseCard from './ReleaseCard'; // Importe o componente ReleaseCard do Releases
import SoloLeveling from '../../assets/solo.jpg';
import iconfilm from '../../assets/iconfilm.png'

// IMG
import iconfire from '../../assets/talvez1.png';

const LastReleases = () => {
  // Suponha que você tenha um array de lançamentos para o novo card
  const additionalReleases = [
    { title: 'Solo Leveling', imgSrc: SoloLeveling, episode: '001' },
    { title: 'Solo Leveling', imgSrc: SoloLeveling, episode: '001' },
    { title: 'Solo Leveling', imgSrc: SoloLeveling, episode: '001' },
    { title: 'Solo Leveling', imgSrc: SoloLeveling, episode: '001' },
    { title: 'Solo Leveling', imgSrc: SoloLeveling, episode: '001' },

    // Adicione quantos lançamentos adicionais desejar
  ];

  return (
    <ScrollableContainer>

    <LastReleasesContainer>
        <TitleLastAnimes>
          <img className="fire" src={iconfire} alt="" />
          <p>Últimos adicionados</p>
        </TitleLastAnimes>
      <Container>
      {/* Renderize o novo card de lançamento */}
      {additionalReleases.map((release, index) => (
        <ReleaseCard key={index} title={release.title} imgSrc={release.imgSrc} />
      ))}
      </Container>

        <TitleFilms>
          <img className="film" src={iconfilm} alt="" />
          <p>Filmes</p>
        </TitleFilms>
        <Container>
      {/* Renderize o novo card de lançamento */}
      {additionalReleases.map((release, index) => (
        <ReleaseCard key={index} title={release.title} imgSrc={release.imgSrc} />
      ))}
      </Container>


    </LastReleasesContainer>
    </ScrollableContainer>

  );
};

export default LastReleases;
