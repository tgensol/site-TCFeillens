import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../../_utils/useWindowSize";
import Nav from "react-bootstrap/Nav";
import "../../assets/css/menuClub.css";

const MenuClub = () => {
  const location = useLocation();

  // Variable permettant l'apparition ou non du "burger"
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  // A chaque clique de lien pour changer de route le useEffect est actionné.
  useEffect(() => {
    setShowLinks(false);
  }, [location, showLinks]);

  // /******** Suppression du lien du "burger" lorsque la taille de l'écran est > 767. *****/

  // récupération de la taille de l'écran à partir du hook "useWindowSize".
  const windowWidth = useWindowSize().width;

  // A chaque changement de la taille de l'écran
  // mise à jour de la variable permettant l'apparition ou non du "burger".
  useEffect(() => {
    if (showLinks) {
      if (windowWidth < 576) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    }
  }, [windowWidth, showLinks]);

  return (
    <div className={`mc-menu${showLinks ? " mc-show-nav" : ""}`}>
      <Nav className="mc-menu-club">
        <Nav.Item className="mc-menu-item mc-slideInDown-1">
          <Nav.Link href="histoire">Notre histoire</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-2">
          <Nav.Link href="bureau">Le bureau</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-3">
          <Nav.Link href="installations">Nos installations</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-4">
          <Nav.Link href="ousommesnous">Où sommes-nous ?</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-5">
          <Nav.Link href="mentions">Mentions légales</Nav.Link>
        </Nav.Item>
      </Nav>
      <button
        className="mc-menu-burger"
        type="button"
        onClick={handleShowLinks}
      >
        <span className="mc-burger-bar"></span>
      </button>
    </div>
  );
};

export default MenuClub;
