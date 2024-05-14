import React, { useEffect, useState } from 'react';
import GlobalStyles from '../../GlobalStyles';
import { Container } from "./styles";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const api = 'https://kitsu.io/api/edge';

function Search() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});
      fetch(
        `${api}/anime?filter[text]=${text}&page[limit]=12`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        })
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
                <Link to={`/AnimeDetails/${anime.id}`} className='anime-details'> {/* Adicione o ID do anime à URL */}
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
