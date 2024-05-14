import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles'; // Importe os estilos globais
import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import { AppRoutes } from './routes/AppRoutes';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles /> {/* Estilos globais */}
    <BrowserRouter> {/*  BrowserRouter */}
      <AppRoutes /> {/* rotas */}
    </BrowserRouter>
  </React.StrictMode>
);
