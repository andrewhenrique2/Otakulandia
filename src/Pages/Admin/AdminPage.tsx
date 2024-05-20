import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const AdminPage = () => {
  const [newAnime, setNewAnime] = useState({
    title: '',
    description: '',
    imageUrl: '',
    episodeNumber: '',
    videoUrl: ''
  });

  const [newEpisode, setNewEpisode] = useState({
    animeId: '',
    title: '',
    episodeNumber: '',
    description: '',
    videoUrl: ''
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleAnimeChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAnime(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEpisodeChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEpisode(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addAnime = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/animes', newAnime);
      setNewAnime({
        title: '',
        description: '',
        imageUrl: '',
        episodeNumber: '',
        videoUrl: ''
      });
      console.log("Anime adicionado com sucesso:", response.data);
    } catch (error) {
      console.error('Erro ao adicionar anime:', error);
    }
  };

  const addEpisode = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await api.post(`/api/animes/${newEpisode.animeId}/episodes`, newEpisode);
      setNewEpisode({
        animeId: '',
        title: '',
        episodeNumber: '',
        description: '',
        videoUrl: ''
      });
      console.log("Episódio adicionado com sucesso");
    } catch (error) {
      console.error('Erro ao adicionar episódio:', error);
    }
  };

  return (
    <div>
      <h1>Página de Administração</h1>
      <form onSubmit={addAnime}>
        <input type="text" name="title" placeholder="Título do Anime" value={newAnime.title} onChange={handleAnimeChange} required />
        <textarea name="description" placeholder="Descrição do Anime" value={newAnime.description} onChange={handleAnimeChange} required />
        <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newAnime.imageUrl} onChange={handleAnimeChange} required />
        <input type="text" name="episodeNumber" placeholder="Número do Episódio" value={newAnime.episodeNumber} onChange={handleAnimeChange} required />
        <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newAnime.videoUrl} onChange={handleAnimeChange} required />
        <button type="submit">Adicionar Anime</button>
      </form>

      <form onSubmit={addEpisode}>
        <input type="text" name="animeId" placeholder="ID do Anime" value={newEpisode.animeId} onChange={handleEpisodeChange} required />
        <input type="text" name="title" placeholder="Título do Episódio" value={newEpisode.title} onChange={handleEpisodeChange} required />
        <input type="number" name="episodeNumber" placeholder="Número do Episódio" value={newEpisode.episodeNumber} onChange={handleEpisodeChange} required />
        <textarea name="description" placeholder="Descrição do Episódio" value={newEpisode.description} onChange={handleEpisodeChange} required />
        <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newEpisode.videoUrl} onChange={handleEpisodeChange} required />
        <button type="submit">Adicionar Episódio</button>
      </form>
    </div>
  );
};

export default AdminPage;
