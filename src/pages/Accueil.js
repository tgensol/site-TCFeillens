import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Weather from "../components/Weather";
import News from "../components/News";
import Partners from "../components/Partners";
import Agenda from "../components/Agenda";
import "../assets/css/styles.css";

const Accueil = () => {
  return (
    <div className="mc-fond-ecran">
      <Container fluid>
        <Row className="pt-3 ps-4">
          <span className="mc-rampart fs-1 text-primary">
            Programmes à venir
          </span>
        </Row>
        <Row>
          <Agenda />
        </Row>
        <Row className="pt-3 ps-4">
          <span className="mc-rampart fs-1 text-primary">Actualités</span>
        </Row>
        <Row>
          <Col xs={8} lg={6} className="p-4">
            <News />
          </Col>
          <Col xs={8} lg={6} className="p-4">
            <Weather />
          </Col>
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
