// most of photos come from https://pixabay.com/fr/
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/layout1";
import Accueil from "./pages/accueil";
import Contact from "./pages/contact";
// Le Club
import LeClub from "./pages/leclub";
import NotreHistoire from "./pages/leclub/notrehistoire";
import NosInstallations from "./pages/leclub/nosinstallations";
import LeBureau from "./pages/leclub/lebureau";
// Animations
import Animations from "./pages/animations";
import Programme from "./pages/animations/listeactivites";
import Ventes from "./pages/animations/ventes";
import FeteEcole from "./pages/animations/feteecole";
import SoireeClub from "./pages/animations/soireeclub";
import OuSommesNous from "./pages/leclub/ousommesnous";
// Compétitions
import Competitions from "./pages/competitions";
import Jchampt from "./pages/competitions/jchampt";
import Jtournoi from "./pages/competitions/jtournoi";
import Schampt from "./pages/competitions/schampt";
import Stournoi from "./pages/competitions/stournoi";
import Stinterne from "./pages/competitions/stinterne";
// Réservations //
import Reservations from "./pages/reservations/reservations";

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
          {/* Page Réservations */}
          <Route path="/reservations" element={<Reservations />} />
          {/* Page Not Found */}
          <Route path="*" element={<h1>Page not FOUND !</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
