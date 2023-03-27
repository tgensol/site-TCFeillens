import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";

const LeClub = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <Container fluid className="p-0">
      <div className="mc-fond-ecran1 d-flex justify-content-center align-items-center vw-100 vh-100">
        <div className="mc-menu-club">
          <Nav className="flex-column align-items-center w-100 py-5">
            <Nav.Link className="text-light py-4" href="histoire">
              Notre histoire
            </Nav.Link>
            <Nav.Link className="text-light py-4" href="bureau">
              Le bureau
            </Nav.Link>
            <Nav.Link className="text-light py-4" href="installations">
              Nos installations
            </Nav.Link>
            <div className="w-75 my-5 border border-1"></div>
            <Nav.Link className="text-light py-4" href="mentions">
              Mentions légales
            </Nav.Link>
          </Nav>
        </div>
        <img
          src="logoTCF1.png"
          className={
            animation
              ? "mc-position-logo mc-animation-logo"
              : "mc-position-logo"
          }
          alt=""
        />
      </div>
    </Container>
  );
};

export default LeClub;
