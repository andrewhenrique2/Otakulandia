import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn'; 
import Search from '../Pages/Search';
import Watching from '../Pages/Watching/watching';
import AnimeDetailsPage from '../Pages/AnimeDetails/AnimeDetailsPage'; 
import AdminPage from '../Pages/Admin/AdminPage'; 
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/search" element={<Search />} />
      <Route path="/anime-details/:animeId" element={<AnimeDetailsPage />} />
      <Route path="/watching/:animeId" element={<Watching />} />
      <Route path="/admin" element={
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;
