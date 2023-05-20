// most of photos from https://pixabay.com/fr/
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/Layout";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
// Le Club
import LeClub from "./pages/LeClub";
import NotreHistoire from "./pages/leClub/NotreHistoire";
import NosInstallations from "./pages/leClub/NosInstallations";
import LeBureau from "./pages/leClub/LeBureau";
// Animations
import Animations from "./pages/Animations";
import Programme from "./pages/animations/Programme";
import Ventes from "./pages/animations/Ventes";
import FeteEcole from "./pages/animations/FeteEcole";
import SoireeClub from "./pages/animations/SoireeClub";
import OuSommesNous from "./pages/leClub/OuSommesNous";
// Compétitions
import Competitions from "./pages/Competitions";
import Jchampt from "./pages/competitions/Jchampt";
import Jtournoi from "./pages/competitions/Jtournoi";
import Schampt from "./pages/competitions/Schampt";
import Stournoi from "./pages/competitions/Stournoi";
import Stinterne from "./pages/competitions/Stinterne";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          {/* Page Le Club */}
          <Route path="/leclub" element={<LeClub />} />
          <Route path="/histoire" element={<NotreHistoire />} />
          <Route path="/installations" element={<NosInstallations />} />
          <Route path="/ousommesnous" element={<OuSommesNous />} />
          <Route path="/bureau" element={<LeBureau />} />
          {/* Page Competitions */}
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/jchampt" element={<Jchampt />} />
          <Route path="/schampt" element={<Schampt />} />
          <Route path="/jtournoi" element={<Jtournoi />} />
          <Route path="/stournoi" element={<Stournoi />} />
          <Route path="/stinterne" element={<Stinterne />} />
          {/* Page Contacts */}
          <Route path="/contact" element={<Contact />} />
          {/* Page Animations */}
          <Route path="/animations" element={<Animations />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/vente" element={<Ventes />} />
          <Route path="/feteecole" element={<FeteEcole />} />
          <Route path="/soireeclub" element={<SoireeClub />} />
          {/* Page Not Found */}
          <Route path="*" element={<h1>Page not FOUND !</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
