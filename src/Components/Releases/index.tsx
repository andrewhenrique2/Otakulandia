import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ReleasesContainer, LastReleases, LastReleasesVideos, ScrollableContainer, ReleaseVideo } from './ReleasesStyles';
import fire from '../../assets/incendio.png';
import fetchData from '../../services/api'; // Importe a função fetchData

interface Release {
  title: string;
  episode: string;
  videoUrl: string;
  imageUrl: string; // Altere para imageUrl
}

const Release = () => {
  const [newRelease, setNewRelease] = useState<Release>({
    title: '',
    episode: '',
    videoUrl: '',
    imageUrl: '' // Altere para imageUrl
  });
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    const storedReleases = localStorage.getItem('releases');
    if (storedReleases) {
      setReleases(JSON.parse(storedReleases));
    }
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
      // Enviar apenas a URL da imagem para o backend
      await fetchData('POST', '/animes', { ...release, imageUrl: release.imageUrl });
      const updatedReleases = [...releases, release];
      setReleases(updatedReleases);
      localStorage.setItem('releases', JSON.stringify(updatedReleases));
      setNewRelease({
        title: '',
        episode: '',
        videoUrl: '',
        imageUrl: '' // Limpar imageUrl após o envio
      });
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
              <p>Título: {release.title}</p>
              <p>Episódio: {release.episode}</p>
              <iframe src={release.videoUrl} width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </ReleaseVideo>
          ))}
        </LastReleasesVideos>
      </ReleasesContainer>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="title" placeholder="Título do Anime" value={newRelease.title} onChange={handleInputChange} />
        <input type="text" name="episode" placeholder="Episódio" value={newRelease.episode} onChange={handleInputChange} />
        <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newRelease.videoUrl} onChange={handleInputChange} />
        <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newRelease.imageUrl} onChange={handleInputChange} /> {/* Campo para inserir a URL da imagem */}
        <button type="submit">Adicionar</button>
      </form>
    </ScrollableContainer>
  );
};

export default Release;
