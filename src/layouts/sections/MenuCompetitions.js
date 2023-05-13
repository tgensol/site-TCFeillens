import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "../../assets/css/competitions.css";

const MenuCompetitions = ({ title, links }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickAccordion = () => {
    setIsActive(!isActive);
  };

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

export default MenuCompetitions;
