import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import { Container } from "./styles";

function AnimeDetails() {
  const { animeId } = useParams(); // Extrai o animeId da URL

  const [animeDetails, setAnimeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (animeId) { 
      fetch(`https://kitsu.io/api/edge/anime/${animeId}?include=genres`)
      .then(response => {
          if (!response.ok) {
            throw new Error('Não foi possível obter os detalhes do anime');
          }
          return response.json();
        })
        .then(data => {
          setAnimeDetails(data.data);
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
           <img src={animeDetails?.attributes?.posterImage?.small} alt={animeDetails?.attributes?.canonicalTitle} />
           <p className='title'>
                  {animeDetails.attributes.canonicalTitle}
                </p>
           </div>

           <div className='sinopse'>
            <p className='score'>Score: {animeDetails?.attributes?.averageRating}</p>
            <p className='age'>Idade Mínima: {animeDetails?.attributes?.ageRatingGuide ?? 'Não especificada'}</p>
            <p className='descricao'>Descrição: {animeDetails?.attributes?.description}</p>
            </div>
            {/* Aqui você pode adicionar a lista de episódios do anime */}
          </div>
        ) : (
          <p>Nenhum detalhe encontrado para este anime.</p>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default AnimeDetails;
