// AuthRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn/index';
import SignUp from '../Pages/SignUp/index';


function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

    </Routes>
  );
}

export default AuthRoutes;
