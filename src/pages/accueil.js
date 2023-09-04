import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Weather from "../components/c-weather";
import News from "../components/c-news";
import Partners from "../components/c-partners";
import Reserve from "../components/c-reserve";
import Agenda from "../components/c-agenda";
import "../assets/css/styles.css";

const Accueil = () => {
  return (
    <div className="mc-fond-ecran">
      <Container fluid>
        <Row className="pt-3 ps-4">
          <span className="mc-rampart fs-1 text-primary">
            À ne pas manquer !
          </span>
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
