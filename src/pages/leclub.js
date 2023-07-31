import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MenuClub from "../layouts/sections/menuclub";

const LeClub = () => {
  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="gx-0">
            <MenuClub />
          </Col>
          <Col xs={12} md={9} className="mc-page-logo">
            <img src="logoTCF1.png" className="mc-position-logo" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeClub;
