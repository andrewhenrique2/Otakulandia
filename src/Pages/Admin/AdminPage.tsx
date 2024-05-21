import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Container, Form, Input, Button, Title, BackButton } from './AdminPageStyles';
import { toast, ToastContainer } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyles.css'; // Import the custom styles for toast

const AdminPage = () => {
  const [newAnime, setNewAnime] = useState({
    title: '',
    description: '',
    imageUrl: '',
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
      });
      toast.success(`Anime adicionado com sucesso! ID: ${response.data.id}`, {
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
      });
    } catch (error) {
      toast.error('Erro ao adicionar anime', {
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
      });
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
      toast.success('Episódio adicionado com sucesso!', {
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
      });
    } catch (error) {
      toast.error('Erro ao adicionar episódio', {
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
      });
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <ToastContainer />
      <BackButton onClick={handleBackClick}>
        <FaArrowLeft /> Voltar
      </BackButton>
      <Title>Página de Administração</Title>
      <Form onSubmit={addAnime}>
        <Input type="text" name="title" placeholder="Título do Anime" value={newAnime.title} onChange={handleAnimeChange} required />
        <textarea name="description" placeholder="Descrição do Anime" value={newAnime.description} onChange={handleAnimeChange} required />
        <Input type="text" name="imageUrl" placeholder="URL da Imagem" value={newAnime.imageUrl} onChange={handleAnimeChange} required />
        <Button type="submit">Adicionar Anime</Button>
      </Form>

      <Form onSubmit={addEpisode}>
        <Input type="text" name="animeId" placeholder="ID do Anime" value={newEpisode.animeId} onChange={handleEpisodeChange} required />
        <Input type="text" name="title" placeholder="Título do Episódio" value={newEpisode.title} onChange={handleEpisodeChange} required />
        <Input type="number" name="episodeNumber" placeholder="Número do Episódio" value={newEpisode.episodeNumber} onChange={handleEpisodeChange} required />
        <textarea name="description" placeholder="Descrição do Episódio" value={newEpisode.description} onChange={handleEpisodeChange} required />
        <Input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newEpisode.videoUrl} onChange={handleEpisodeChange} required />
        <Button type="submit">Adicionar Episódio</Button>
      </Form>
    </Container>
  );
};

export default AdminPage;
