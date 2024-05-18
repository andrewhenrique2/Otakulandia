import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Container, Form, Input, Button } from './AdminPageStyles'; // Importe estilos apropriados ou crie-os conforme necessário

const AdminPage = () => {
  const [newRelease, setNewRelease] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });
  const [newEpisode, setNewEpisode] = useState({
    animeId: '',
    title: '',
    episodeNumber: '',
    description: '',
    videoUrl: ''
  });

  const handleReleaseInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewRelease(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEpisodeInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEpisode(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addRelease = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/animes', newRelease);
      setNewRelease({
        title: '',
        description: '',
        imageUrl: ''
      });
    } catch (error) {
      console.error('Erro ao adicionar lançamento:', error);
    }
  };

  const addEpisode = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/animes/${newEpisode.animeId}/episodes`, newEpisode);
      setNewEpisode({
        animeId: '',
        title: '',
        episodeNumber: '',
        description: '',
        videoUrl: ''
      });
    } catch (error) {
      console.error('Erro ao adicionar episódio:', error);
    }
  };

  return (
    <Container>
      <h2>Página de Administração</h2>
      <Form onSubmit={addRelease}>
        <h3>Adicionar Anime</h3>
        <Input type="text" name="title" placeholder="Título do Anime" value={newRelease.title} onChange={handleReleaseInputChange} required />
        <textarea name="description" placeholder="Descrição do Anime" value={newRelease.description} onChange={handleReleaseInputChange} required />
        <Input type="text" name="imageUrl" placeholder="URL da Imagem" value={newRelease.imageUrl} onChange={handleReleaseInputChange} required />
        <Button type="submit">Adicionar Anime</Button>
      </Form>
      <Form onSubmit={addEpisode}>
        <h3>Adicionar Episódio</h3>
        <Input type="text" name="animeId" placeholder="ID do Anime" value={newEpisode.animeId} onChange={handleEpisodeInputChange} required />
        <Input type="text" name="title" placeholder="Título do Episódio" value={newEpisode.title} onChange={handleEpisodeInputChange} required />
        <Input type="text" name="episodeNumber" placeholder="Número do Episódio" value={newEpisode.episodeNumber} onChange={handleEpisodeInputChange} required />
        <textarea name="description" placeholder="Descrição do Episódio" value={newEpisode.description} onChange={handleEpisodeInputChange} required />
        <Input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newEpisode.videoUrl} onChange={handleEpisodeInputChange} required />
        <Button type="submit">Adicionar Episódio</Button>
      </Form>
    </Container>
  );
};

export default AdminPage;
