import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/Layout";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
// Le Club
import NotreHistoire from "./pages/leClub/NotreHistoire";
import LeBureau from "./pages/leClub/LeBureau";
// Animations
import Animations from "./pages/Animations";
import Programme from "./pages/animations/Programme";
import Ventes from "./pages/animations/Ventes";
import FeteEcole from "./pages/animations/FeteEcole";
import SoireeClub from "./pages/animations/SoireeClub";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/histoire" element={<NotreHistoire />} />
          <Route path="/bureau" element={<LeBureau />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/vente" element={<Ventes />} />
          <Route path="/feteecole" element={<FeteEcole />} />
          <Route path="/soireeclub" element={<SoireeClub />} />
          <Route path="*" element={<h1>Page not FOUND !</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
