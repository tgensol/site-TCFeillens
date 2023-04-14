import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../../assets/css/competitions.css";

const MenuClubSection = (menuVisible) => {
  return (
    <Nav
      className={menuVisible ? "mc-menu-club mc-menu-visible" : "mc-menu-club"}
    >
      <Nav.Link href="histoire">Notre histoire</Nav.Link>
      <Nav.Link href="bureau">Le bureau</Nav.Link>
      <Nav.Link href="installations">Nos installations</Nav.Link>
      <Nav.Link href="ousommesnous">Où sommes-nous ?</Nav.Link>
      <Nav.Link href="mentions">Mentions légales</Nav.Link>
    </Nav>
  );
};

const MenuCompetitionSection = ({ title, menu, menuVisible }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Nav
      className={menuVisible ? "mc-menu-club mc-menu-visible" : "mc-menu-club"}
    >
      <div className="mc-accordion">
        <div className="mc-accordion-item">
          <div className="mc-accordion-title" onClick={handleClick}>
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive ? (
            <div className="mc-accordion-content">
              {menu.map((menu, index) => (
                <Nav.Link href={menu.path} key={index}>
                  {menu.link}
                </Nav.Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Nav>
  );
};

export { MenuClubSection, MenuCompetitionSection };
