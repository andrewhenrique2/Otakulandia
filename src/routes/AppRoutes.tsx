import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index";
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn'; 

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}
export default AppRoutes;
