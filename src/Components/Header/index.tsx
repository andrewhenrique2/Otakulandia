import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Container,
  LogoImg,
  StyledButton,
  StyledIcon,
  HeaderAccount,
  Account,
  UserNavegation,
  Search,
  AnimeFilmsTab,
  PopUpWindow,
  PopUpWindowList,
  AnimeFilmsTab2,
  LinkDiscord,
  ScrollableContainer,
  MobileMenuIcon,
  MobileMenu,
} from './HeaderStyles';
import Logo from '../../assets/Otakulandia.png';
import IconListFilms from '../../assets/buttonListFilms.png';
import IconListAnime from '../../assets/buttonListAnimes.png';
import { FaCaretDown, FaHome, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import Donate from '../../assets/donation.png';
import notepad from '../../assets/notepad.png';

import { RiUser3Line } from 'react-icons/ri';
import { IoMdSearch } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import GlobalStyles from '../../GlobalStyles';

const Header = () => {
  const { user, signOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <ScrollableContainer>
      <GlobalStyles />
      <HeaderContainer>
        <Container>
          <Link to="/" className="Logo/">
            <LogoImg src={Logo} alt="Logo Otakulandia" />
          </Link>

          <Link to="/" className="Logo/">
            <LinkDiscord>
              <FaHome className="IconDiscord" />
            </LinkDiscord>
          </Link>

          <AnimeFilmsTab>
            Menu <HiOutlineMenu className="menuIcon" />
            <PopUpWindow className="PopUpWindow">
              <PopUpWindowList>
                <h2 className="titleListAnimes-donate">
                  <img className="IconAnimeList" src={Donate} alt="" />
                  Doações
                </h2>
                <h3>Ajude-nos a manter o <br />site, Faca sua doação.</h3>
              </PopUpWindowList>

              <PopUpWindowList>
                <h2 className="titleListFilms-notes">
                  <img className="IconFilmList" src={notepad} alt="" />
                  Notes
                </h2>
                <h3 className="h3Films"> correção de bugs, atualizações, novidades.</h3>
              </PopUpWindowList>
            </PopUpWindow>
          </AnimeFilmsTab>

          <AnimeFilmsTab2>
            Animes/Filmes <FaCaretDown />
            <PopUpWindow className="PopUpWindow">
              <PopUpWindowList>
                <h2 className="titleListAnimes">
                  <img className="IconAnimeList" src={IconListAnime} alt="" />
                  LISTA DE ANIMES
                </h2>
                <h3>Animes legendados e dublados</h3>
              </PopUpWindowList>
              <PopUpWindowList>
                <h2 className="titleListFilms-filmes">
                  <img className="IconFilmList" src={IconListFilms} alt="" />
                  LISTA DE FILMES
                </h2>
                <h3> Filmes legendados e dublados</h3>
              </PopUpWindowList>
            </PopUpWindow>
          </AnimeFilmsTab2>

          <UserNavegation>
            <Link to="/search" className="searchlink">
              <Search>
                <IoMdSearch className="SearchIcon" />
              </Search>
            </Link>
            <Account>
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="adminLink">
                      <HeaderAccount>
                        <RiUser3Line className="IconLoginAccount" />
                        <p>Admin</p>
                      </HeaderAccount>
                    </Link>
                  )}
                  <Link to="/user">
                    <FaUserCircle style={{ fontSize: '3rem', color: '#fff', margin: '3rem' }} />
                  </Link>
                  <StyledButton onClick={signOut}>
                    <CiLogout className='logouticon' />
                    Logout
                  </StyledButton>
                </>
              ) : (
                <>
                  <Link to="/login" className="loginLink">
                    <HeaderAccount>
                      <RiUser3Line className="IconLoginAccount" />
                      <p>Entrar</p>
                    </HeaderAccount>
                  </Link>
                  <Link to="/register" className="registerLink">
                    <StyledButton>
                      <StyledIcon />
                      CADASTRE-SE
                    </StyledButton>
                  </Link>
                </>
              )}
            </Account>
          </UserNavegation>

          <MobileMenuIcon onClick={toggleMobileMenu}>
            <HiOutlineMenu />
          </MobileMenuIcon>
        </Container>

        {isMobileMenuOpen && (
          <MobileMenu ref={mobileMenuRef}>
            <Link to="/" onClick={toggleMobileMenu}>
              <FaHome style={{ marginRight: '0.5rem' }} />
              Home
            </Link>
            <Link to="/search" onClick={toggleMobileMenu}>
              <IoMdSearch style={{ marginRight: '0.5rem' }} />
              Search
            </Link>
            {user && (
              <Link to="/user" onClick={toggleMobileMenu}>
                <FaUserCircle style={{ marginRight: '0.5rem' }} />
                Profile
              </Link>
            )}
            {user ? (
              <StyledButton onClick={signOut}>
                <CiLogout className='logouticon' />
                Logout
              </StyledButton>
            ) : (
              <>
                <Link to="/login" onClick={toggleMobileMenu}>
                  <RiUser3Line style={{ marginRight: '0.5rem' }} />
                  Entrar
                </Link>
                <Link to="/register" onClick={toggleMobileMenu}>
                  <StyledIcon />
                  Cadastre-se
                </Link>
              </>
            )}
          </MobileMenu>
        )}
      </HeaderContainer>
    </ScrollableContainer>
  );
};

export default Header;
