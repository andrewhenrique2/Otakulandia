import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ReleasesContainer, LastReleases, LastReleasesVideos, ScrollableContainer, ReleaseVideo } from './ReleasesStyles';
import fire from '../../assets/incendio.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Release {
  id: string;
  title: string;
  episode: string;
  episodeNumber: number;
  videoUrl: string;
  imageUrl: string;
}

const Release = () => {
  const [newRelease, setNewRelease] = useState<Release>({
    id: '',
    title: '',
    episode: '',
    episodeNumber: 0,
    videoUrl: '',
    imageUrl: ''
  });
  const [releases, setReleases] = useState<Release[]>([]);
  const navigate = useNavigate();

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRelease(prevState => ({
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
        episode: '',
        episodeNumber: 0,
        videoUrl: '',
        imageUrl: ''
      });
      navigate(`/watching/${response.data.id}`); // Navegar para a página do anime recém-criado
    } catch (error) {
      console.error('Erro ao adicionar lançamento:', error);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addRelease(newRelease);
  };

  return (
    <ScrollableContainer>
      <ReleasesContainer>
        <LastReleases>
          <img className='fire' src={fire} alt="" />
          <p>Últimos Lançamentos</p>
        </LastReleases>
        <LastReleasesVideos>
          {releases.map((release, index) => (
            <ReleaseVideo key={index}>
              <Link to={`/watching/${release.id}`}>
                <div className="image-container">
                  <img className='imgCardAnime' src={release.imageUrl} alt="Anime" />
                </div>
              </Link>
              <p>{release.title}</p>
              <p className='Number-ep'>EPISÓDIO <span>{release.episodeNumber}</span></p>
            </ReleaseVideo>
          ))}
        </LastReleasesVideos>
      </ReleasesContainer>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="title" placeholder="Título do Anime" value={newRelease.title} onChange={handleInputChange} required />
        <input type="text" name="episode" placeholder="Episódio" value={newRelease.episode} onChange={handleInputChange} required />
        <input type="number" name="episodeNumber" placeholder="Número do Episódio" value={newRelease.episodeNumber.toString()} onChange={handleInputChange} required />
        <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newRelease.videoUrl} onChange={handleInputChange} required />
        <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newRelease.imageUrl} onChange={handleInputChange} required />
        <button type="submit">Adicionar</button>
      </form>
    </ScrollableContainer>
  );
};

export default Release;
