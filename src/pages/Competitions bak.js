import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MenuCompetitions from "../layouts/sections/MenuCompetitions";
import tableMenuCompetitions from "../_params/tableMenuCompetitions";

const Competitions = () => {
  return (
    <div className="mc-fond-courts-couverts">
      <Container fluid className="gx-0">
        <Row className="gx-0">
          <Col xs={12} md={3}>
            <div className="mc-menu">
              {tableMenuCompetitions.map((menu, index) => {
                return (
                  <MenuCompetitions
                    title={menu.title}
                    links={menu.links}
                    key={index}
                  />
                );
              })}
            </div>
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
