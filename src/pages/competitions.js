import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MenuCompetitions from "../layouts/sections/menu-competitions";

const Competitions = () => {
  return (
    <div className="mc-fond-courts-couverts">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="gx-0">
            <MenuCompetitions />
          </Col>
          <Col xs={12} md={9} className="mc-page-logo">
            <img src="logoTCF1.png" className="mc-position-logo" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Competitions;
