import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../../_utils/use-window-size";
import Nav from "react-bootstrap/Nav";
import "../../assets/css/menuclub.css";

const MenuClub = () => {
  const location = useLocation();

  // Variable permettant l'apparition ou non du "burger"
  const [showLinks, setShowLinks] = useState(false);

  // Variable permettant l'activation du lien cliqué dans le menu latéral.
  const [menuActiveLink, setMenuActiveLink] = useState(null);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  // A chaque clic de lien pour changer de route/location le useEffect est actionné.
  useEffect(() => {
    setShowLinks(false);
    setMenuActiveLink(location.pathname);
  }, [location, showLinks]);

  // récupération de la taille de l'écran à partir du hook "useWindowSize".
  const windowWidth = useWindowSize().width;

  // mise à jour de la variable permettant l'apparition ou non du "burger" lorsque la taille de l'écran est >= 576.
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
          <Nav.Link
            className={
              menuActiveLink === "/histoire" ? "mc-active-link" : "null"
            }
            href="/histoire"
          >
            Notre histoire
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-2">
          <Nav.Link
            className={menuActiveLink === "/bureau" ? "mc-active-link" : "null"}
            href="/bureau"
          >
            Le bureau
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-3">
          <Nav.Link
            className={
              menuActiveLink === "/installations" ? "mc-active-link" : "null"
            }
            href="/installations"
          >
            Nos installations
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-4">
          <Nav.Link
            className={
              menuActiveLink === "/ousommesnous" ? "mc-active-link" : "null"
            }
            href="/ousommesnous"
          >
            Où sommes-nous ?
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mc-menu-item mc-slideInDown-5">
          <Nav.Link
            className={
              menuActiveLink === "/mentions" ? "mc-active-link" : "null"
            }
            href="/mentions"
          >
            Mentions légales
          </Nav.Link>
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
