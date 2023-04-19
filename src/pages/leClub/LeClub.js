import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { MenuClubSection } from "../../layouts/sections/MenuSection";

const LeClub = () => {
  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row className="vh-100">
          <Col xs={12} md={3} className="mc-menu">
            <MenuClubSection />
          </Col>
          <Col xs={12} md={9} className="d-flex align-items-center">
            <img src="logoTCF1.png" className="mc-position-logo" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeClub;
