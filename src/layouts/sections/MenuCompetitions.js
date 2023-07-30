import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../../_utils/useWindowSize";
import Nav from "react-bootstrap/Nav";
import "../../assets/css/menuClub.css";
import tableMenuCompetitions from "../../_params/tableMenuCompetitions";

const MenuCompetitions = () => {
  const location = useLocation();

  // Variable permettant l'apparition ou non du "burger"
  const [showLinks, setShowLinks] = useState(false);

  // Variable permettant l'activation du lien cliqué dans le menu latéral.
  const [menuActiveLink, setMenuActiveLink] = useState(null);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  // A chaque changement de route/location le useEffect est actionné.
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
        {tableMenuCompetitions.map((menu, index) => {
          return (
            <div className="text-warning fs-5 fw-bolder p-2" key={index}>
              {menu.title}
              {menu.links.map((item, index) => (
                <Nav.Item key={index} className="fs-6 mc-menu-item">
                  <Nav.Link
                    className={
                      menuActiveLink === `/${item.path}`
                        ? "mc-active-link"
                        : "null"
                    }
                    href={item.path}
                  >
                    {item.link}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </div>
          );
        })}
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

export default MenuCompetitions;
