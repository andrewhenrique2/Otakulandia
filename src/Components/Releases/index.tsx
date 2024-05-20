import React, { useState, useEffect, ChangeEvent, FormEvent, useContext } from 'react';
import { ReleasesContainer, LastReleases, LastReleasesVideos, ScrollableContainer, ReleaseVideo } from './ReleasesStyles';
import fire from '../../assets/incendio.png';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

interface Episode {
  id: string;
  animeId: string;
  title: string;
  episodeNumber: number;
  description: string;
  videoUrl: string;
  origin: string; // Adicionar campo de origem
}

interface Release {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  episodes: Episode[];
}

const Release = () => {
  const [newRelease, setNewRelease] = useState<Release>({
    id: '',
    title: '',
    description: '',
    imageUrl: '',
    episodes: []
  });
  const [releases, setReleases] = useState<Release[]>([]);
  const [newEpisode, setNewEpisode] = useState<Episode>({
    id: '',
    animeId: '',
    title: '',
    episodeNumber: 0,
    description: '',
    videoUrl: '',
    origin: '' // Adicionar campo de origem
  });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      const response = await api.get('/api/animes');
      const allReleases = response.data;
      const filteredReleases = allReleases.map(release => ({
        ...release,
        episodes: release.episodes.filter(episode => episode.origin === 'release')
      }));
      setReleases(filteredReleases);
    } catch (error) {
      console.error('Erro ao buscar os lançamentos:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const addRelease = async (release: Release) => {
    try {
      const response = await api.post('/api/animes', release);
      setNewRelease({
        id: '',
        title: '',
        description: '',
        imageUrl: '',
        episodes: []
      });
      fetchReleases(); // Atualiza a lista de lançamentos
      window.alert(`Anime adicionado com sucesso! ID: ${response.data.id}`); // Exibe o alerta com o ID do anime
    } catch (error) {
      console.error('Erro ao adicionar lançamento:', error);
      window.alert('Erro ao adicionar lançamento');
    }
  };

  const addEpisode = async (episode: Episode) => {
    try {
      const episodeData = {
        ...episode,
        origin: 'release' // Definindo a origem como 'release'
      };
      await api.post(`/api/animes/${episode.animeId}/episodes`, episodeData);
      setNewEpisode({
        id: '',
        animeId: '',
        title: '',
        episodeNumber: 0,
        description: '',
        videoUrl: '',
        origin: '' // Resetando o campo de origem
      });
      fetchReleases(); // Atualiza a lista de lançamentos
      window.alert(`Episódio adicionado com sucesso!`); // Exibe o alerta de sucesso
    } catch (error) {
      console.error('Erro ao adicionar episódio:', error);
      window.alert('Erro ao adicionar episódio');
    }
  };

  const deleteRelease = async (id: string) => {
    try {
      await api.delete(`/api/animes/${id}`);
      fetchReleases(); // Atualiza a lista de lançamentos
    } catch (error) {
      console.error('Erro ao remover lançamento:', error);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addRelease(newRelease);
  };

  const handleEpisodeFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addEpisode(newEpisode);
  };

  return (
    <ScrollableContainer>
      <ReleasesContainer>
        <LastReleases>
          <img className='fire' src={fire} alt="" />
          <p>Últimos Lançamentos</p>
        </LastReleases>
        <LastReleasesVideos>
          {releases.flatMap((release) => (
            release.episodes.map((episode) => (
              <ReleaseVideo key={`${release.id}-${episode.id}`}>
                <Link to={`/watching/${release.id}#${episode.episodeNumber}`}>
                  <div className="image-container">
                    <img className='imgCardAnime' src={release.imageUrl} alt="Anime" />
                  </div>
                </Link>
                <p>{release.title}</p>
                <p className='wtf'>EPISÓDIO <span>{episode.episodeNumber}</span></p> 
                {user && user.role === 'admin' && (
                  <button onClick={() => deleteRelease(release.id)}>Remover</button>
                )}
              </ReleaseVideo>
            ))
          ))}
        </LastReleasesVideos>
      </ReleasesContainer>

      {user && user.role === 'admin' && (
        <>
          <form onSubmit={handleFormSubmit}>
            <h1 className='h1z'>Adicionar Anime</h1>
            <input type="text" name="title" placeholder="Título do Anime" value={newRelease.title} onChange={handleInputChange} required />
            <textarea name="description" placeholder="Descrição do Anime" value={newRelease.description} onChange={handleInputChange} required />
            <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newRelease.imageUrl} onChange={handleInputChange} required />
            <button type="submit">Adicionar Anime</button>
          </form>

          <form onSubmit={handleEpisodeFormSubmit}>
            <h1 className='h1z'>Adicionar EPISÓDIO</h1>

            <input type="text" name="animeId" placeholder="ID do Anime" value={newEpisode.animeId} onChange={handleEpisodeInputChange} required />
            <input type="text" name="title" placeholder="Título do Episódio" value={newEpisode.title} onChange={handleEpisodeInputChange} required />
            <input type="number" name="episodeNumber" placeholder="Número do Episódio" value={newEpisode.episodeNumber.toString()} onChange={handleEpisodeInputChange} required />
            <textarea name="description" placeholder="Descrição do Episódio" value={newEpisode.description} onChange={handleEpisodeInputChange} required />
            <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newEpisode.videoUrl} onChange={handleEpisodeInputChange} required />
            <button type="submit">Adicionar Episódio</button>
          </form>
        </>
      )}
    </ScrollableContainer>
  );
};

export default Release;
