// most of photos from https://pixabay.com/fr/
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/Layout";
import Accueil from "./pages/f-accueil";
import Contact from "./pages/f-contact";
// Le Club
import LeClub from "./pages/f-leclub";
import NotreHistoire from "./pages/p-leclub/notrehistoire";
import NosInstallations from "./pages/p-leclub/nosinstallations";
import LeBureau from "./pages/p-leclub/lebureau";
// Animations
import Animations from "./pages/f-animations";
import Programme from "./pages/p-animations/listeactivites";
import Ventes from "./pages/p-animations/ventes";
import FeteEcole from "./pages/p-animations/feteecole";
import SoireeClub from "./pages/p-animations/soireeclub";
import OuSommesNous from "./pages/p-leclub/ousommesnous";
// Compétitions
import Competitions from "./pages/f-competitions";
import Jchampt from "./pages/p-competitions/jchampt";
import Jtournoi from "./pages/p-competitions/jtournoi";
import Schampt from "./pages/p-competitions/schampt";
import Stournoi from "./pages/p-competitions/stournoi";
import Stinterne from "./pages/p-competitions/stinterne";
// Réservations
import Reservations from "./pages/p-reservations/reservations";

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
