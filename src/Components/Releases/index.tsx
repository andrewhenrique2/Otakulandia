import React, { useState, useEffect, ChangeEvent, FormEvent, useContext } from 'react';
import { ReleasesContainer, LastReleases, LastReleasesVideos, ScrollableContainer, ReleaseVideo } from './ReleasesStyles';
import fire from '../../assets/incendio.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

interface Episode {
  id: string;
  animeId: string;
  title: string;
  episodeNumber: number;
  description: string;
  videoUrl: string;
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
    videoUrl: ''
  });
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await axios.get('/api/animes');
        console.log("Dados recebidos do servidor:", response.data);
        setReleases(response.data);
      } catch (error) {
        console.error('Erro ao buscar os lançamentos:', error);
      }
    };

    fetchReleases();
  }, []);

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
      const response = await axios.post('/api/animes', release);
      const newReleaseWithId = { ...release, id: response.data.id };
      setReleases(prevReleases => [...prevReleases, newReleaseWithId]);
      setNewRelease({
        id: '',
        title: '',
        description: '',
        imageUrl: '',
        episodes: []
      });
      navigate(`/watching/${response.data.id}`); // Navegar para a página do anime recém-criado
    } catch (error) {
      console.error('Erro ao adicionar lançamento:', error);
    }
  };

  const addEpisode = async (episode: Episode) => {
    try {
      const response = await axios.post(`/api/animes/${episode.animeId}/episodes`, episode);
      setNewEpisode({
        id: '',
        animeId: '',
        title: '',
        episodeNumber: 0,
        description: '',
        videoUrl: ''
      });
      // Atualize a lista de lançamentos
      const updatedReleases = releases.map(release => {
        if (release.id === episode.animeId) {
          return {
            ...release,
            episodes: [...release.episodes, { ...episode, id: response.data.id }]
          };
        }
        return release;
      });
      setReleases(updatedReleases);
    } catch (error) {
      console.error('Erro ao adicionar episódio:', error);
    }
  };

  const deleteRelease = async (id: string) => {
    try {
      await axios.delete(`/api/animes/${id}`);
      setReleases(prevReleases => prevReleases.filter(release => release.id !== id));
      console.log('Anime removido com sucesso!');
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
          {releases.flatMap((release, releaseIndex) => (
            release.episodes.map((episode, episodeIndex) => (
              <ReleaseVideo key={`${release.id}-${episode.id}`}>
                <Link to={`/watching/${release.id}`}>
                  <div className="image-container">
                    <img className='imgCardAnime' src={release.imageUrl} alt="Anime" />
                  </div>
                </Link>
                <p>{release.title}</p>
                <p className='wtf'>EPISÓDIO <span>{episode.episodeNumber}</span></p> 
                <button onClick={() => deleteRelease(release.id)}>Remover</button>
              </ReleaseVideo>
            ))
          ))}
        </LastReleasesVideos>
      </ReleasesContainer>

      {user && user.role === 'admin' && (
        <>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="title" placeholder="Título do Anime" value={newRelease.title} onChange={handleInputChange} required />
            <textarea name="description" placeholder="Descrição do Anime" value={newRelease.description} onChange={handleInputChange} required />
            <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newRelease.imageUrl} onChange={handleInputChange} required />
            <button type="submit">Adicionar Anime</button>
          </form>

          <form onSubmit={handleEpisodeFormSubmit}>
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
