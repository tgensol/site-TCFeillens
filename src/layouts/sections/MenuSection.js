import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../../assets/css/competitions.css";

const MenuClubSection = () => {
  return (
    <Nav className="mc-menu-club">
      <Nav.Link href="histoire">Notre histoire</Nav.Link>
      <Nav.Link href="bureau">Le bureau</Nav.Link>
      <Nav.Link href="installations">Nos installations</Nav.Link>
      <Nav.Link href="ousommesnous">Où sommes-nous ?</Nav.Link>
      <Nav.Link href="mentions">Mentions légales</Nav.Link>
    </Nav>
  );
};

const MenuCompetitionSection = ({ title, links }) => {
  const [isActive, setIsActive] = useState(false);

  console.log("Hello compétitions: ");
  console.log("isActive: ", isActive);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Nav className="mc-menu-club">
      <div className="mc-accordion">
        <div className="mc-accordion-item">
          <div className="mc-accordion-title" onClick={handleClick}>
            <div>{title}</div>
            <div>{isActive ? "▲" : "▼"}</div>
          </div>
          {isActive ? (
            <div className="mc-accordion-content">
              {links.map((item, index) => (
                <Nav.Link href={item.path} key={index}>
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

export { MenuClubSection, MenuCompetitionSection };
