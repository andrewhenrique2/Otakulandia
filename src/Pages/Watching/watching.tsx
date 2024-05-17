import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container, Title, Description, EpisodeList, EpisodeItem, ImageContainer, AnimeImage, VideoPlayer } from './styles';

interface Episode {
  title: string;
}

interface AnimeInfo {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string; // Adicione o campo videoUrl
  episodes: Episode[];
}

function Watching() {
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { animeId } = useParams<{ animeId: string }>();

  useEffect(() => {
    console.log("animeId:", animeId); // Adicione este log
    const fetchAnimeInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/anime-info/${animeId}`);
        console.log('Anime Info:', response.data);
        setAnimeInfo(response.data);
        setError(null);
      } catch (error) {
        console.error('Erro ao buscar informações do anime:', error);
        setError('Erro ao buscar informações do anime.');
      }
    };

    if (animeId) {
      fetchAnimeInfo();
    }
  }, [animeId]);

  return (
    <div>
      <Header />
      <Container>
        {error && <p>{error}</p>}
        {animeInfo ? (
          <>
            <Title>{animeInfo.title}</Title>
            <Description>{animeInfo.description}</Description>
            <ImageContainer>
              <AnimeImage src={animeInfo.imageUrl} alt={animeInfo.title} />
            </ImageContainer>
            <VideoPlayer>
              <iframe
                width="100%"
                height="100%"
                src={animeInfo.videoUrl}
                title={animeInfo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoPlayer>
            {animeInfo.episodes && animeInfo.episodes.length > 0 ? (
              <>
                <p>Lista de episódios:</p>
                <EpisodeList>
                  {animeInfo.episodes.map((episode, index) => (
                    <EpisodeItem key={index}>{episode.title}</EpisodeItem>
                  ))}
                </EpisodeList>
              </>
            ) : (
              <p>Nenhum episódio disponível</p>
            )}
          </>
        ) : (
          !error && <p>Carregando informações do anime...</p>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Watching;
