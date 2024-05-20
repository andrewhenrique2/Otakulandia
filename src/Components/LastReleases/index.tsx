import React, { useState, useContext, ChangeEvent, FormEvent, useEffect } from 'react';
import { LastReleasesContainer, Container, TitleLastAnimes, TitleFilms, ScrollableContainer } from './LastReleases';
import ReleaseCard from './ReleaseCard'; 
import api from '../../services/api';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
// IMG
import iconfire from '../../assets/talvez1.png';
import iconfilm from '../../assets/iconfilm.png';

const LastReleases = () => {
  const [latestAnimes, setLatestAnimes] = useState([]);
  const [latestFilms, setLatestFilms] = useState([]);
  const [newAnime, setNewAnime] = useState({ title: '', description: '', imageUrl: '', episodeNumber: '', videoUrl: '' });
  const [newFilm, setNewFilm] = useState({ title: '', description: '', imageUrl: '', videoUrl: '' });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchLatestAnimes();
    fetchLatestFilms();
  }, []);

  const fetchLatestAnimes = async () => {
    try {
      const response = await api.get('/api/recent-animes');
      setLatestAnimes(response.data);
    } catch (error) {
      console.error('Erro ao buscar últimos animes:', error);
    }
  };

  const fetchLatestFilms = async () => {
    try {
      const response = await api.get('/api/films');
      setLatestFilms(response.data);
    } catch (error) {
      console.error('Erro ao buscar últimos filmes:', error);
    }
  };

  const handleAnimeInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAnime(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFilmInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewFilm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAnimeFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/recent-animes', newAnime);
      setNewAnime({ title: '', description: '', imageUrl: '', episodeNumber: '', videoUrl: '' });
      fetchLatestAnimes();
    } catch (error) {
      console.error('Erro ao adicionar anime:', error);
    }
  };

  const handleFilmFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/films', newFilm);
      setNewFilm({ title: '', description: '', imageUrl: '', videoUrl: '' });
      fetchLatestFilms();
    } catch (error) {
      console.error('Erro ao adicionar filme:', error);
    }
  };

  const handleDeleteAnime = async (animeId: number) => {
    try {
      await api.delete(`/api/recent-animes/${animeId}`);
      fetchLatestAnimes();
    } catch (error) {
      console.error('Erro ao deletar anime:', error);
    }
  };

  const handleDeleteFilm = async (filmId: number) => {
    try {
      await api.delete(`/api/films/${filmId}`);
      fetchLatestFilms();
    } catch (error) {
      console.error('Erro ao deletar filme:', error);
    }
  };

  return (
    <ScrollableContainer>
      <LastReleasesContainer>
        <TitleLastAnimes>
          <img className="fire" src={iconfire} alt="" />
          <p>Últimos adicionados</p>
        </TitleLastAnimes>

        <Container>
          {latestAnimes.map((anime, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <Link to={`/watching/${anime.id}`} className='/'>
                <ReleaseCard
                  title={anime.title}
                  imgSrc={anime.imageUrl}
                />
              </Link>
              {user && user.role === 'admin' && (
                <button 
                  onClick={() => handleDeleteAnime(anime.id)} 
                  style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'red', color: 'white' }}
                >
                  Remover
                </button>
              )}
            </div>
          ))}
        </Container>

        <TitleFilms>
          <img className="film" src={iconfilm} alt="" />
          <p>Filmes adicionados</p>
        </TitleFilms>
        <Container>
          {latestFilms.map((film, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <Link to={`/watching/${film.id}`} className='/'>
                <ReleaseCard
                  title={film.title}
                  imgSrc={film.imageUrl}
                />
              </Link>
              {user && user.role === 'admin' && (
                <button 
                  onClick={() => handleDeleteFilm(film.id)} 
                  style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'red', color: 'white' }}
                >
                  Remover
                </button>
              )}
            </div>
          ))}
        </Container>

        {user && user.role === 'admin' && (
          <>
            <form onSubmit={handleAnimeFormSubmit}>
              <h3 className='h3z'>Adicionar Novo Anime</h3>
              <input type="text" name="title" placeholder="Título do Anime" value={newAnime.title} onChange={handleAnimeInputChange} required />
              <textarea name="description" placeholder="Descrição do Anime" value={newAnime.description} onChange={handleAnimeInputChange} required />
              <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newAnime.imageUrl} onChange={handleAnimeInputChange} required />
              <input type="text" name="episodeNumber" placeholder="Número do Episódio" value={newAnime.episodeNumber} onChange={handleAnimeInputChange} required />
              <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newAnime.videoUrl} onChange={handleAnimeInputChange} required />
              <button type="submit">Adicionar Anime</button>
            </form>

            <form onSubmit={handleFilmFormSubmit}>
              <h3 className='h3z'>Adicionar Novo Filme</h3>
              <input type="text" name="title" placeholder="Título do Filme" value={newFilm.title} onChange={handleFilmInputChange} required />
              <textarea name="description" placeholder="Descrição do Filme" value={newFilm.description} onChange={handleFilmInputChange} required />
              <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newFilm.imageUrl} onChange={handleFilmInputChange} required />
              <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newFilm.videoUrl} onChange={handleFilmInputChange} required />
              <button type="submit">Adicionar Filme</button>
            </form>
          </>
        )}
      </LastReleasesContainer>
    </ScrollableContainer>
  );
};

export default LastReleases;
