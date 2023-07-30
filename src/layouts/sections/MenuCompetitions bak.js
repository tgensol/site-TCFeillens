import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import "../../assets/css/competitions.css";
import { useLocation } from "react-router-dom";

const MenuCompetitions = ({ title, links }) => {
  const location = useLocation();

  // Variable permettant l'ouverture ou fermeture de l'accordéon au clic.
  const [isActive, setIsActive] = useState(false);

  // Variable permettant l'activation du lien cliqué dans l'accordéon.
  const [accordionActiveLink, setAccordionActiveLink] = useState(null);

  const handleClickAccordion = () => {
    setIsActive(!isActive);
  };

  // A chaque changement de route/location le useEffect est actionné.
  useEffect(() => {
    setAccordionActiveLink(location.pathname);
    console.log("location.pathname: ", location.pathname);
  }, [location, accordionActiveLink]);

  return (
    <Nav className="mc-menu-club">
      <div className="mc-accordion">
        <div className="mc-accordion-item">
          <div className="mc-accordion-title" onClick={handleClickAccordion}>
            <div>{title}</div>
            <div>{isActive ? "▲" : "▼"}</div>
          </div>
          {isActive ? (
            <div className="mc-accordion-content">
              {links.map((item, index) => (
                <Nav.Link
                  className={
                    accordionActiveLink === `/${item.path}`
                      ? "mc-active-link"
                      : "null"
                  }
                  href={item.path}
                  key={index}
                >
                  {item.link}
                </Nav.Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Nav>
  );
};

export default MenuCompetitions;
