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
          <span className="mc-rampart fs-1 text-primary">Ne pas manquer !</span>
        </Row>
        <Row>
          <Agenda />
        </Row>
        <Row className="pt-3 ps-4">
          <span className="mc-rampart fs-1 text-primary">Actualités</span>
        </Row>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 7, offset: 0 }}
            lg={5}
            className="p-4"
          >
            <News />
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 5, offset: 0 }}
            lg={3}
            className="p-4 "
          >
            <Weather />
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 0 }}
            lg={4}
            className="p-4"
          >
            Réserve
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
