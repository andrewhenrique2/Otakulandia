import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container, Title, Description, VideoPlayer, NavigationButtons, EpisodeNavigation } from './styles';
import AddEpisode from './AddEpisode';
import { AuthContext } from '../../context/AuthContext';

interface Episode {
  id: number;
  title: string;
  episodeNumber: number;
  description: string;
  videoUrl: string;
}

interface AnimeInfo {
  title: string;
  description: string;
  episodes: Episode[];
}

function Watching() {
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [showEpisodeList, setShowEpisodeList] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { animeId } = useParams<{ animeId: string }>();
  const { user } = useContext(AuthContext);

  const fetchAnimeInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/anime-info/${animeId}`);
      console.log('Anime Info:', response.data);
      setAnimeInfo(response.data);
      setError(null);
      if (response.data.episodes && response.data.episodes.length > 0) {
        setCurrentEpisode(response.data.episodes[0]);
      }
    } catch (error) {
      console.error('Erro ao buscar informações do anime:', error);
      setError('Erro ao buscar informações do anime.');
    }
  };

  useEffect(() => {
    console.log("animeId:", animeId);
    if (animeId) {
      fetchAnimeInfo();
    }
  }, [animeId]);

  useEffect(() => {
    console.log("currentEpisode:", currentEpisode);
  }, [currentEpisode]);

  const handleEpisodeChange = (episode: Episode) => {
    setCurrentEpisode(episode);
  };

  const handleNextEpisode = () => {
    if (animeInfo && currentEpisode) {
      const currentIndex = animeInfo.episodes.findIndex(ep => ep.id === currentEpisode.id);
      const nextEpisode = animeInfo.episodes[currentIndex + 1];
      if (nextEpisode) {
        setCurrentEpisode(nextEpisode);
      }
    }
  };

  const handlePrevEpisode = () => {
    if (animeInfo && currentEpisode) {
      const currentIndex = animeInfo.episodes.findIndex(ep => ep.id === currentEpisode.id);
      const prevEpisode = animeInfo.episodes[currentIndex - 1];
      if (prevEpisode) {
        setCurrentEpisode(prevEpisode);
      }
    }
  };

  return (
    <div>
      <Header />
      <Container>
        {error && <p>{error}</p>}
        {animeInfo ? (
          <>
            <Title>{animeInfo.title}</Title>
            <Description>{animeInfo.description}</Description>
            {currentEpisode && currentEpisode.videoUrl ? (
              <VideoPlayer>
                <iframe
                  src={currentEpisode.videoUrl}
                  title={currentEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoPlayer>
            ) : (
              <p>Selecione um episódio para assistir</p>
            )}
            <NavigationButtons>
              <button onClick={handlePrevEpisode} disabled={!currentEpisode || animeInfo.episodes.findIndex(ep => ep.id === currentEpisode.id) === 0}>
                Episódio anterior
              </button>
              <button onClick={() => setShowEpisodeList(!showEpisodeList)}>
                {showEpisodeList ? 'Esconder episódios' : 'Lista de episódios'}
              </button>
              <button onClick={handleNextEpisode} disabled={!currentEpisode || animeInfo.episodes.findIndex(ep => ep.id === currentEpisode.id) === animeInfo.episodes.length - 1}>
                Próximo episódio
              </button>
            </NavigationButtons>
            {showEpisodeList && (
              <EpisodeNavigation>
                {animeInfo.episodes.map((episode) => (
                  <button key={episode.id} onClick={() => handleEpisodeChange(episode)}>
                    {episode.episodeNumber}
                  </button>
                ))}
              </EpisodeNavigation>
            )}
            {user && user.role === 'admin' && <AddEpisode animeId={animeId!} onEpisodeAdded={fetchAnimeInfo} />}
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
