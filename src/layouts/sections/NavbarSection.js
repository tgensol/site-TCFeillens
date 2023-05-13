import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavbarSection = () => {
  return (
    <Navbar
      bg="primary bg-gradient"
      variant="dark"
      expand={"md"}
      className="border-0 border-bottom border-1 sticky-top"
    >
      <Container fluid>
        {/* <div> required to keep the burger aligned on the right */}
        <div></div>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand`}
          className="bg-dark border border-2"
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
          className="bg-primary text-light"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              {/* Tennis Club de Feillens
              <hr></hr> */}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-wrap justify-content-between flex-grow-1 pe-3 mc-nav-hover">
              <Nav.Link
                href="/accueil"
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                href="/leclub"
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                Le Club
              </Nav.Link>

              <Nav.Link
                href="/animations"
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                Enseignement
              </Nav.Link>

              {/* <NavDropdown
                title="Enseignement"
                id={`offcanvasNavbarDropdown-expand`}
                menuVariant={"dark"}
                className="bg-primary bg-gradient text-light px-2 text-center"
              >
                <NavDropdown.Item href="/coursEquipe">
                  Equipe Pédagogique
                </NavDropdown.Item>
                <NavDropdown.Item href="/coursJeunes">
                  Ecole de Tennis
                </NavDropdown.Item>
                <NavDropdown.Item href="/coursAdultes">
                  Cours Adultes
                </NavDropdown.Item>
                <NavDropdown.Item href="/coursSante">
                  Tennis Santé
                </NavDropdown.Item>
                <NavDropdown.Item href="/coursStages">Stages</NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link
                href="/competitions"
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                Compétitions
              </Nav.Link>

              <Nav.Link
                href="/animations"
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                Animations
              </Nav.Link>

              <NavDropdown
                title="Réservations"
                id={`offcanvasNavbarDropdown-expand`}
                menuVariant={"dark"}
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                <NavDropdown.Item href="/resaCouverts">
                  Courts Couverts
                </NavDropdown.Item>
                <NavDropdown.Item href="/resaExterieur">
                  Courts Extérieurs
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Évènements"
                id={`offcanvasNavbarDropdown-expand`}
                menuVariant={"dark"}
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                <NavDropdown.Item href="/event30Ans">
                  Le Club Fête Ses 30 ans
                </NavDropdown.Item>
                <NavDropdown.Item href="/event40Ans">
                  Le Club Fête Ses 40 ans
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/adherez"
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                Adhérez...
              </Nav.Link>
              <Nav.Link
                href="/partenaire"
                className="bg-primary bg-gradient text-light my-1 px-2 text-center"
              >
                Devenez Partenaire ...
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
