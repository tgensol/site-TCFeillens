import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Weather from "../components/Weather";
import News from "../components/News";
import Partners from "../components/Partners";
import Reserve from "../components/Reserve";
import Agenda from "../components/Agenda";
import "../assets/css/styles.css";

const Accueil = () => {
  return (
    <div className="mc-fond-ecran">
      <Container fluid>
        <Row className="pt-3 ps-4">
          <span className="mc-rampart fs-1 text-primary">Ne pas manquer !</span>
        </Row>
        <Row>
          <Agenda />
        </Row>
        <Row className="pt-3 ps-4">
          <span className="mc-rampart fs-1 text-primary">Actualités</span>
        </Row>
        <Row>
          <News />
          <Weather />
          <Reserve />
        </Row>
        <Row className="py-3 ps-4">
          <span className="mc-partners fs-1 mc-rampart">Nos partenaires</span>
        </Row>
        <Row className="pt-3">
          <Partners />
        </Row>
      </Container>
    </div>
  );
};

export default Accueil;
