import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/Layout';
import Accueil from './pages/Accueil';
import NotreHistoire from './pages/NotreHistoire';
import LeBureau from './pages/LeBureau';
import Contact from './pages/Contact';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Accueil />} /> 
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/histoire" element={<NotreHistoire />} />
            <Route path="/bureau" element={<LeBureau />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
