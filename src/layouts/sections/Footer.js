import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid className="pt-5 border-top">
        <Row className="justify-content-between mb-5">
          <Col xs={12} md={4}>
            <div className="ps-2">
              <OverlayTrigger
                placement={"bottom"}
                delay={{ show: 100, hide: 200 }}
                overlay={
                  <Tooltip id={"tooltip-TCF"}>Tennis Club de Feillens</Tooltip>
                }
              >
                <a
                  className="nav-link"
                  href="https://www.tennis-club-de-feillens.fr"
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  <img
                    className="img-fluid p-2"
                    src="LogoTCF1.png"
                    alt="Logo TCF ?"
                    width={50}
                    height={50}
                  ></img>
                  <span className="fw-bold text-muted">
                    TENNIS CLUB DE FEILLENS
                  </span>
                </a>
              </OverlayTrigger>
              <p className="small my-0 text-muted">
                Siège : 575 route des Dîmes - 01570 FEILLENS
              </p>
              <p className="small text-muted">
                Clubhouse - <strong>2 courts extérieurs</strong>
              </p>
              <hr></hr>
              <p className="small my-0 text-muted">
                Rue de l'école privée - 01570 FEILLENS
              </p>
              <p className="small text-muted">
                Clubhouse - <strong>2 courts couverts</strong>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="ps-2">
            <p className="fw-bold text-muted ps-3 my-3">Liens du site</p>
            <Nav defaultActiveKey="/accueil" className="">
              <Nav.Link
                href="/accueil"
                id="nav-dropdown"
                className="text-muted py-0 w-25"
              >
                Accueil
              </Nav.Link>

              <NavDropdown
                title="Le club"
                id="nav-dropdown"
                menuVariant={"dark"}
                align="end"
                className=" w-25"
              >
                <NavDropdown.Item href="/contact">
                  Notre histoire
                </NavDropdown.Item>
                <NavDropdown.Item href="/bureau">Le bureau</NavDropdown.Item>
                <NavDropdown.Item href="/installations">
                  Nos installations
                </NavDropdown.Item>
                <NavDropdown.Item href="/ousommesnous">
                  Où sommmes-nous ?
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="" href="/mentionsLegales">
                  Mentions légales
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Compétitions"
                id="nav-dropdown"
                menuVariant={"dark"}
                align="end"
                className=" w-25"
              >
                <NavDropdown.Item href="/compJeunes">Jeunes</NavDropdown.Item>
                <NavDropdown.Item href="/compAdultes">Adultes</NavDropdown.Item>
                <NavDropdown.Item href="/compTournoiOpen">
                  Tournois - NC à 4/6
                </NavDropdown.Item>
                <NavDropdown.Item href="/compTournoiIntenre">
                  Tournois - Interne
                </NavDropdown.Item>
                <NavDropdown.Item href="/compTournoiJeunes">
                  Tournois - Jeunes
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Enseignement"
                id="nav-dropdown"
                menuVariant={"dark"}
                align="end"
                className=" w-25"
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
              </NavDropdown>

              <Nav.Link
                href="/animations"
                id="nav-dropdown"
                className="text-muted py-0 w-25"
              >
                Animations
              </Nav.Link>

              <NavDropdown
                title="Réservations"
                id="nav-dropdown"
                menuVariant={"dark"}
                align="end"
                className=" w-25"
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
                id="nav-dropdown"
                menuVariant={"dark"}
                align="end"
                className=" w-25"
              >
                <NavDropdown.Item href="/event30Ans">
                  Le Club Fête Ses 30 ans
                </NavDropdown.Item>
                <NavDropdown.Item href="/event40Ans">
                  Le Club Fête Ses 40 ans
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <p className="fw-bold text-muted ps-3 pt-4">Contactez-nous</p>
            <a className="text-muted text-decoration-none ps-3" href="/contact">
              <span id="tcf-email">tcfeillens@gmail.com</span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-2 bg-secondary text-light">
            <small>© TCFeillens, 2023. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
