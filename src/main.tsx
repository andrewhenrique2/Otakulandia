import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/Pages/Home/home.tsx' // import da Page Home
import GlobalStyles from './GlobalStyles'; // Importe os estilos globais

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles /> {/* Use os estilos globais */}
    <Home /> {/* Page HOME */}
  </React.StrictMode>,
  document.getElementById('root')
);
