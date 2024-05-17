// Arquivo: AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/index';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn'; 
import Search from '../Pages/Search';
import Watching from '../Pages/Watching/watching'; // Importando o componente Watching
import AnimeDetails from '../Pages/AnimeDetails/AnimeDetailsPage'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/search" element={<Search />} />
            <Route path="/anime-details/:animeId" element={<AnimeDetails />} />
            <Route path="/watching/:animeId" element={<Watching />} /> {/* Rota para Watching */}
        </Routes>
    )
}

export default AppRoutes;
