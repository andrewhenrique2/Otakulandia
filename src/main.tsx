// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import GlobalStyles from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <AppRoutes />
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
