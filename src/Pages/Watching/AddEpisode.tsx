// src/Pages/Watching/AddEpisode.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../../services/api';

interface AddEpisodeProps {
  animeId: string;
  onEpisodeAdded: () => void; // Callback para atualizar a lista de episódios após adicionar um novo
}

const AddEpisode: React.FC<AddEpisodeProps> = ({ animeId, onEpisodeAdded }) => {
  const [newEpisode, setNewEpisode] = useState({
    title: '',
    episodeNumber: '',
    description: '',
    videoUrl: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEpisode(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const episodeData = {
        ...newEpisode,
        origin: 'watching' // Definindo a origem como 'watching'
      };
      await api.post(`/api/animes/${animeId}/episodes`, episodeData);
      setNewEpisode({
        title: '',
        episodeNumber: '',
        description: '',
        videoUrl: ''
      });
      onEpisodeAdded(); // Atualizar a lista de episódios
    } catch (error) {
      console.error('Erro ao adicionar episódio:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="title" placeholder="Título do Episódio" value={newEpisode.title} onChange={handleInputChange} required />
      <input type="number" name="episodeNumber" placeholder="Número do Episódio" value={newEpisode.episodeNumber} onChange={handleInputChange} required />
      <textarea name="description" placeholder="Descrição do Episódio" value={newEpisode.description} onChange={handleInputChange} required />
      <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newEpisode.videoUrl} onChange={handleInputChange} required />
      <button type="submit">Adicionar Episódio</button>
    </form>
  );
};

export default AddEpisode;
