import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index";
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn'; 
import Search from '../Pages/Search';
import Watching from '../Pages/Watching/watching';
import AnimeDetails from '../Pages/AnimeDetails/AnimeDetailsPage'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/search" element={<Search />} />
            <Route path="/AnimeDetails/:animeId" element={<AnimeDetails />} />
            <Route path="/watching" element={<Watching />} />
        </Routes>
    )
}

export default AppRoutes;
