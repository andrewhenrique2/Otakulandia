import React, { useState, useEffect, ChangeEvent, FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import { LastReleasesContainer, Container, TitleLastAnimes, ScrollableContainer } from './LastReleases';
import ReleaseCard from './ReleaseCard';
import iconfire from '../../assets/talvez1.png';

const LastReleases = () => {
  const [latestAnimes, setLatestAnimes] = useState([]);
  const [newAnime, setNewAnime] = useState({ id: '', title: '', description: '', imageUrl: '', episodeNumber: '', videoUrl: '' });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchLatestAnimes();
  }, []);

  const fetchLatestAnimes = async () => {
    try {
      const response = await api.get('/api/recent-animes');
      setLatestAnimes(response.data);
    } catch (error) {
      console.error('Erro ao buscar últimos animes:', error);
    }
  };

  const handleAnimeInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAnime(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAnimeFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const animeWithId = { ...newAnime, id: uuidv4() };
      await api.post('/api/recent-animes', animeWithId);
      setNewAnime({ id: '', title: '', description: '', imageUrl: '', episodeNumber: '', videoUrl: '' });
      fetchLatestAnimes();
    } catch (error) {
      console.error('Erro ao adicionar anime:', error);
    }
  };

  const handleDeleteAnime = async (animeId: string) => {
    try {
      await api.delete(`/api/recent-animes/${animeId}`);
      fetchLatestAnimes();
    } catch (error) {
      console.error('Erro ao deletar anime:', error);
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

        {user && user.role === 'admin' && (
          <form onSubmit={handleAnimeFormSubmit}>
            <h3>Adicionar Novo Anime</h3>
            <input type="text" name="title" placeholder="Título do Anime" value={newAnime.title} onChange={handleAnimeInputChange} required />
            <textarea name="description" placeholder="Descrição do Anime" value={newAnime.description} onChange={handleAnimeInputChange} required />
            <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newAnime.imageUrl} onChange={handleAnimeInputChange} required />
            <input type="text" name="episodeNumber" placeholder="Número do Episódio" value={newAnime.episodeNumber} onChange={handleAnimeInputChange} required />
            <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newAnime.videoUrl} onChange={handleAnimeInputChange} required />
            <button type="submit">Adicionar Anime</button>
          </form>
        )}
      </LastReleasesContainer>
    </ScrollableContainer>
  );
};

export default LastReleases;
