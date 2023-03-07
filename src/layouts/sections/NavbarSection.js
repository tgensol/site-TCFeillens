import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarSection = () => {

    return (
        <div>
            <Navbar bg="primary bg-gradient" variant="dark" expand={'md'} className="border-0 border-bottom border-1 sticky-top">
                <Container fluid>
                    <div></div>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} className="bg-dark border border-2"/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                        className="bg-primary text-light">
                        <Offcanvas.Header closeButton closeVariant="white">
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Tennis Club de Feillens
                                <hr></hr>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-wrap justify-content-between flex-grow-1 pe-3">
                                <Nav.Link
                                    href="/accueil"
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                        Accueil
                                </Nav.Link>
                                <NavDropdown
                                    title="Le Club"
                                    id={`offcanvasNavbarDropdown-expand`}
                                    menuVariant={"dark"}
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                    <NavDropdown.Item href="/histoire">Notre Histoire</NavDropdown.Item>
                                    <NavDropdown.Item href="/bureau">Le Bureau</NavDropdown.Item>
                                    <NavDropdown.Item href="/installations">Nos Installations</NavDropdown.Item>
                                    <NavDropdown.Item href="/localisation">Où Sommes-Nous ?</NavDropdown.Item>
                                    <NavDropdown.Divider className='bg-light'/>
                                    <NavDropdown.Item href="/mentionsLegales">Mentions Légales</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Compétitions"
                                    id={`offcanvasNavbarDropdown-expand`}
                                    menuVariant={"dark"}
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                    <NavDropdown.Item href="/compJeunes">Jeunes</NavDropdown.Item>
                                    <NavDropdown.Item href="/compAdultes">Adultes</NavDropdown.Item>
                                    <NavDropdown.Item href="/compTournoiOpen">Tournoi - NC à 4/6</NavDropdown.Item>
                                    <NavDropdown.Item href="/compTournoiIntenre">Tournoi - Interne</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Enseignement"
                                    id={`offcanvasNavbarDropdown-expand`}
                                    menuVariant={"dark"}
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                    <NavDropdown.Item href="/coursEquipe">Equipe Pédagogique</NavDropdown.Item>
                                    <NavDropdown.Item href="/coursJeunes">Ecole de Tennis</NavDropdown.Item>
                                    <NavDropdown.Item href="/coursAdultes">Cours Adultes</NavDropdown.Item>
                                    <NavDropdown.Item href="/coursSante">Tennis Santé</NavDropdown.Item>
                                    <NavDropdown.Item href="/coursStages">Stages</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Nos Animations"
                                    id={`offcanvasNavbarDropdown-expand`}
                                    menuVariant={"dark"}
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                    <NavDropdown.Item href="/animationPgm">Notre Programme</NavDropdown.Item>
                                    <NavDropdown.Item href="/animationPickle">Pickleball</NavDropdown.Item>
                                    <NavDropdown.Item href="/animationBad">Tournoi de badminton</NavDropdown.Item>
                                    <NavDropdown.Item href="/animationVenteFromage">Vente de Fromage</NavDropdown.Item>
                                    <NavDropdown.Item href="/animationFeteJeunes">La fête de l'école de tennis</NavDropdown.Item>
                                    <NavDropdown.Item href="/animationFeteAdultes">Soirée du Club</NavDropdown.Item>
                                    <NavDropdown.Item href="/animation">Les 40 ans du Club</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Réservations"
                                    id={`offcanvasNavbarDropdown-expand`}
                                    menuVariant={"dark"}
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                    <NavDropdown.Item href="/resaCouverts">Courts Couverts</NavDropdown.Item>
                                    <NavDropdown.Item href="/resaExterieur">Courts Extérieurs</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Évènements"
                                    id={`offcanvasNavbarDropdown-expand`}
                                    menuVariant={"dark"}
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                    <NavDropdown.Item href="/event30Ans">Le Club Fête Ses 30 ans</NavDropdown.Item>
                                    <NavDropdown.Item href="/event40Ans">Le Club Fête Ses 40 ans</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link
                                    href="/adherez"
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                        Adhérez...
                                </Nav.Link>
                                <Nav.Link
                                    href="/partenaire"
                                    className="bg-primary bg-gradient text-light px-2 text-center"
                                    >
                                    Devenez Partenaire ...
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarSection;