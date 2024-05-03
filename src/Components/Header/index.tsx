import React from 'react';
import { HeaderContainer, Container, LogoImg, StyledButton, StyledIcon, HeaderAccount, Account, UserNavegation, Search, AnimeFilmsTab, PopUpWindow, PopUpWindowList, AnimeFilmsTab2 , LinkDiscord, ScrollableContainer  } from './HeaderStyles'; // Importe o IconWrapper
import Logo from '../../assets/Otakulandia.png';
import IconListFilms from '../../assets/buttonListFilms.png';
import IconListAnime from '../../assets/buttonListAnimes.png';

// React ICONS
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { RiUser3Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";

// IMPORT Strategic
import { Link } from "react-router-dom";
import GlobalStyles from '../../GlobalStyles';


const Header = () => {

  return (
    <ScrollableContainer>
      <GlobalStyles/>
    <HeaderContainer>
      <Container>
      <Link to="/" className='Logo/'>
      <LogoImg src={Logo} alt="Logo Otakulandia" />

            </Link>


            <Link to="/" className='Logo/'>

        <LinkDiscord>
        <FaHome className='IconDiscord' />

        </LinkDiscord>
        </Link>



       <AnimeFilmsTab>
         Menu <HiOutlineMenu className='menuIcon' /> 


<PopUpWindow className="PopUpWindow">

                {/* ANIME LIST */}

  <PopUpWindowList>
    <h2 className='titleListAnimes' > <img className='IconAnimeList' src={IconListAnime} alt="" />
      LISTA DE ANIMES</h2>
    <h3>Animes legendados e dublados</h3>
  </PopUpWindowList>


                  {/* FILMES LIST */}

  <PopUpWindowList>
    <h2 className='titleListFilms' > <img className='IconFilmList' src={IconListFilms} alt="" /> LISTA DE FILMES</h2>
    <h3 className='h3Films' > Filmes legendados e dublados</h3>
  </PopUpWindowList>




</PopUpWindow>
      
       </AnimeFilmsTab>

        
        <AnimeFilmsTab2>
          Animes/Filmes <FaCaretDown />

          <PopUpWindow className="PopUpWindow">

                          {/* ANIME LIST */}

            <PopUpWindowList>
              <h2 className='titleListAnimes' > <img className='IconAnimeList' src={IconListAnime} alt="" />
 LISTA DE ANIMES</h2>
              <h3>Animes legendados e dublados</h3>
            </PopUpWindowList>


                            {/* FILMES LIST */}

            <PopUpWindowList>
              <h2 className='titleListFilms' > <img className='IconFilmList' src={IconListFilms} alt="" /> LISTA DE FILMES</h2>
              <h3> Filmes legendados e dublados</h3>
            </PopUpWindowList>
          </PopUpWindow>
        </AnimeFilmsTab2>
        
        <UserNavegation>
          <Search>
            <IoMdSearch className='SearchIcon' />
          </Search>

          <Account>

          <Link to="/login" className='loginLink'>
            <HeaderAccount>
              <RiUser3Line className='IconLoginAccount'/>
              <p>Entrar</p>
            </HeaderAccount>
            </Link>



     

                      {/* BOTAO DO REGISTER */}
            <Link to="/register" className='registerLink'>
            <StyledButton >
                <StyledIcon />
                CADASTRE-SE
            </StyledButton>
            </Link>

          </Account>
        </UserNavegation>
      </Container>
    </HeaderContainer>
    </ScrollableContainer>

  );
};

export default Header;
