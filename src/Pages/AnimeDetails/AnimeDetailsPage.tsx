// src/Pages/AnimeDetailsPage.tsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import { Container } from "./styles";
import animeApi from '../../services/animeApi';
import { AuthContext } from '../../context/AuthContext';

function AnimeDetailsPage() {
  const { animeId } = useParams(); // Extrai o animeId da URL
  const { user } = useContext(AuthContext);

  const [animeDetails, setAnimeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (animeId) { 
      animeApi.get(`/anime/${animeId}`)
        .then(response => {
          setAnimeDetails(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Erro ao obter detalhes do anime:', error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [animeId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro: {error}</p>;
  }

  return (
    <>
      <Header />
      <Container>
        {animeDetails ? (
          <div className="anime-details">
            <div className='title-anime'>
              <img src={animeDetails?.data?.attributes?.posterImage?.medium} alt={animeDetails?.data?.attributes?.canonicalTitle} />
            </div>
            <div className='sinopse'>
            <p className='title'>{animeDetails?.data?.attributes?.canonicalTitle}</p>
              <p className='score'>Score: {animeDetails?.data?.attributes?.averageRating}</p>
              <p className='age'>Idade Mínima: {animeDetails?.data?.attributes?.ageRatingGuide ?? 'Não especificada'}</p>
              <p className='descricao'>Descrição: {animeDetails?.data?.attributes?.description}</p>
            </div>
            {/* Implementação dos episódios caso existam na API do Kitsu */}
            {animeDetails?.data?.relationships?.episodes?.data?.length > 0 && (
              <div className="episodes">
                <h3>Episódios</h3>
                <ul>
                  {animeDetails.data.relationships.episodes.data.map(episode => (
                    <li key={episode.id}>
                      <h4>{episode.attributes.canonicalTitle}</h4>
                      <p>Número do Episódio: {episode.attributes.number}</p>
                      <p>Descrição: {episode.attributes.synopsis}</p>
                      <a href={episode.attributes.url} target="_blank" rel="noopener noreferrer">Assistir</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p>Nenhum detalhe encontrado para este anime.</p>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default AnimeDetailsPage;
