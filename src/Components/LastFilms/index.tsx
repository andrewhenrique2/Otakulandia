// src/Components/LastFilms/index.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de que Link está sendo importado corretamente
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import { LastFilmsContainer, Container, TitleFilms, ScrollableContainer } from './LastFilmsStyles';
import ReleaseCard from '../LastReleases/ReleaseCard'; // Importando o mesmo componente de cartão de lançamento
import iconfilm from '../../assets/iconfilm.png';

const LastFilms = () => {
  const [latestFilms, setLatestFilms] = useState([]);
  const [newFilm, setNewFilm] = useState({ id: '', title: '', description: '', imageUrl: '', videoUrl: '' });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchLatestFilms();
  }, []);

  const fetchLatestFilms = async () => {
    try {
      const response = await api.get('/api/films');
      setLatestFilms(response.data);
    } catch (error) {
      console.error('Erro ao buscar últimos filmes:', error);
    }
  };

  const handleFilmInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewFilm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFilmFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const filmWithId = { ...newFilm, id: uuidv4() }; // Adicionar ID único
      await api.post('/api/films', filmWithId);
      setNewFilm({ id: '', title: '', description: '', imageUrl: '', videoUrl: '' });
      fetchLatestFilms();
    } catch (error) {
      console.error('Erro ao adicionar filme:', error);
    }
  };

  const handleDeleteFilm = async (filmId: string) => { // mudar para string
    try {
      await api.delete(`/api/films/${filmId}`);
      fetchLatestFilms();
    } catch (error) {
      console.error('Erro ao deletar filme:', error);
    }
  };

  return (
    <ScrollableContainer>
      <LastFilmsContainer>
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
          <form onSubmit={handleFilmFormSubmit}>
            <h3>Adicionar Novo Filme</h3>
            <input type="text" name="title" placeholder="Título do Filme" value={newFilm.title} onChange={handleFilmInputChange} required />
            <textarea name="description" placeholder="Descrição do Filme" value={newFilm.description} onChange={handleFilmInputChange} required />
            <input type="text" name="imageUrl" placeholder="URL da Imagem" value={newFilm.imageUrl} onChange={handleFilmInputChange} required />
            <input type="text" name="videoUrl" placeholder="URL do Vídeo" value={newFilm.videoUrl} onChange={handleFilmInputChange} required />
            <button type="submit">Adicionar Filme</button>
          </form>
        )}
      </LastFilmsContainer>
    </ScrollableContainer>
  );
};

export default LastFilms;
