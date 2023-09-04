import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";

const NavbarSection = () => {
  const location = useLocation();
  const [navbarActiveLink, setNavbarActiveLink] = useState(null);

  useEffect(() => {
    setNavbarActiveLink(location.pathname);
  }, [location]);

  return (
    <Navbar
      bg="primary bg-gradient"
      variant="dark"
      expand="lg"
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
          className="text-light"
          style={{ background: "rgba(0, 43, 110, 0.8)" }}
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Tennis Club de Feillens
              <hr></hr>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-wrap justify-content-between flex-grow-1 pe-3 mc-nav-hover">
              <Nav.Link
                className={
                  navbarActiveLink === "/accueil"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/accueil"
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                className={
                  navbarActiveLink === "/leclub"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/leclub"
              >
                Le Club
              </Nav.Link>

              <Nav.Link
                className={
                  navbarActiveLink === "/enseignement"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/enseignement"
              >
                Enseignement
              </Nav.Link>

              {/* <NavDropdown
                title="Enseignement"
                id={`offcanvasNavbarDropdown-expand`}
                menuVariant={"dark"}
                className="bg-primary text-light px-2 text-center"
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
                className={
                  navbarActiveLink === "/competitions"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/competitions"
              >
                Compétitions
              </Nav.Link>

              <Nav.Link
                className={
                  navbarActiveLink === "/animations"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/animations"
              >
                Animations
              </Nav.Link>

              <Nav.Link
                className={
                  navbarActiveLink === "/reservations"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/reservations"
              >
                Réservations
              </Nav.Link>

              {/* <NavDropdown
                title="Réservations"
                id={`offcanvasNavbarDropdown-expand`}
                menuVariant={"dark"}
                className={
                  navbarActiveLink === "/resaCouverts" ||
                  navbarActiveLink === "/resaExterieur"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "text-light my-1 px-2 text-center"
                }
              >
                <NavDropdown.Item
                  className={
                    navbarActiveLink === "/resaCouverts"
                      ? "text-light mc-active-link"
                      : "null"
                  }
                  href="/resaCouverts"
                >
                  Courts Couverts
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={
                    navbarActiveLink === "/resaExterieurs"
                      ? "text-light mc-active-link"
                      : "null"
                  }
                  href="/resaExterieurs"
                >
                  Courts Extérieurs
                </NavDropdown.Item>
              </NavDropdown> */}

              <NavDropdown
                title="Évènements"
                id={`offcanvasNavbarDropdown-expand`}
                menuVariant={"dark"}
                className={
                  navbarActiveLink === "/event30Ans" ||
                  navbarActiveLink === "/Event40Ans"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "text-light my-1 px-2 text-center"
                }
              >
                <NavDropdown.Item
                  className={
                    navbarActiveLink === "/event30Ans"
                      ? "mc-active-link"
                      : "null"
                  }
                  href="/event30Ans"
                >
                  Le Club Fête Ses 30 ans
                </NavDropdown.Item>
                <NavDropdown.Item
                  className={
                    navbarActiveLink === "/event40Ans"
                      ? "mc-active-link"
                      : "null"
                  }
                  href="/event40Ans"
                >
                  Le Club Fête Ses 40 ans
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className={
                  navbarActiveLink === "/adherez"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/adherez"
              >
                Adhérez...
              </Nav.Link>
              <Nav.Link
                className={
                  navbarActiveLink === "/partenaire"
                    ? "my-1 px-2 text-center mc-active-link"
                    : "my-1 px-2 text-light text-center"
                }
                href="/partenaire"
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
