// Watching.tsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Container, Title, Description, VideoPlayer, NavigationButtons, EpisodeNavigation } from './styles';
import AddEpisode from './AddEpisode';
import { AuthContext } from '../../context/AuthContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

interface FilmInfo {
  title: string;
  description: string;
  videoUrl: string;
}

function Watching() {
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo | null>(null);
  const [filmInfo, setFilmInfo] = useState<FilmInfo | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [showEpisodeList, setShowEpisodeList] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { animeId } = useParams<{ animeId: string }>();
  const { user } = useContext(AuthContext);

  const fetchAnimeInfo = async () => {
    try {
      const response = await api.get(`/api/anime-info/${animeId}`);
      setAnimeInfo(response.data);
      setError(null);
      if (response.data.episodes && response.data.episodes.length > 0) {
        const firstEpisode = response.data.episodes[0];
        const episodeNumber = parseInt(window.location.hash.replace('#', ''), 10);
        const initialEpisode = response.data.episodes.find(ep => ep.episodeNumber === episodeNumber) || firstEpisode;
        setCurrentEpisode(initialEpisode);
      }
    } catch (error) {
      setError('Erro ao buscar informações do anime.');
      fetchRecentAnimeInfo();
    }
  };

  const fetchRecentAnimeInfo = async () => {
    try {
      const response = await api.get(`/api/recent-animes/${animeId}`);
      if (response.data) {
        const animeData = {
          title: response.data.title,
          description: response.data.description,
          episodes: [{
            id: response.data.id,
            title: response.data.title,
            episodeNumber: response.data.episodeNumber,
            description: response.data.description,
            videoUrl: response.data.videoUrl
          }]
        };
        setAnimeInfo(animeData);
        setCurrentEpisode(animeData.episodes[0]);
        setError(null);
      } else {
        fetchFilmInfo();
      }
    } catch (error) {
      setError('Erro ao buscar informações do anime recente.');
      fetchFilmInfo();
    }
  };

  const fetchFilmInfo = async () => {
    try {
      const response = await api.get(`/api/film-info/${animeId}`);
      setFilmInfo(response.data);
      setError(null);
    } catch (error) {
      setError('Erro ao buscar informações do filme.');
    }
  };

  useEffect(() => {
    if (animeId) {
      fetchAnimeInfo();
    }
  }, [animeId]);

  useEffect(() => {
    if (currentEpisode) {
      window.location.hash = currentEpisode.episodeNumber.toString();
    }
  }, [currentEpisode]);

  const handleEpisodeChange = (episode: Episode) => {
    setCurrentEpisode(episode);
    window.location.hash = episode.episodeNumber.toString();
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
            <Description>Episódio {currentEpisode?.episodeNumber}</Description>
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
                <FaArrowLeft />
              </button>
              <button onClick={() => setShowEpisodeList(!showEpisodeList)}>
                {showEpisodeList ? 'Esconder episódios' : 'Lista de episódios'}
              </button>
              <button onClick={handleNextEpisode} disabled={!currentEpisode || animeInfo.episodes.findIndex(ep => ep.id === currentEpisode.id) === animeInfo.episodes.length - 1}>
                <FaArrowRight />
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
          filmInfo ? (
            <>
              <Title>{filmInfo.title}</Title>
              <Description>{filmInfo.description}</Description>
              <VideoPlayer>
                <iframe
                  src={filmInfo.videoUrl}
                  title={filmInfo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoPlayer>
            </>
          ) : (
            !error && <p>Carregando informações...</p>
          )
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Watching;