// src/Pages/Search/Search.tsx
import React, { useEffect, useState } from 'react';
import GlobalStyles from '../../GlobalStyles';
import { Container } from "./styles";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import animeApi from '../../services/animeApi'; // Importa a nova instância do Axios

function Search() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});
      animeApi.get(`/anime?filter[text]=${text}&page[limit]=12`)
        .then((response) => {
          setInfo(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar animes:', error);
        });
    }
  }, [text]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <SearchInput
          value={text}
          onChange={(search) => setText(search)} />
        {text && !info.data && (
          <span>Carregando...</span>
        )}
        {info.data && (
          <ul className='anime-list'>
            {info.data.map((anime) => (
              <li key={anime.id}>
                <Link to={`/anime-details/${anime.id}`} className='anime-details'>
                  <img
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.canonicalTitle}
                  />
                </Link>
                <span className='title-anime'>
                  {anime.attributes.canonicalTitle}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Search;
