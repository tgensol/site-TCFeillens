import React from "react";
import { Nav } from "react-bootstrap";

const MenuClubSection = (menuVisible) => {
  console.log("menuVisible: ", menuVisible);

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

export default MenuClubSection;
