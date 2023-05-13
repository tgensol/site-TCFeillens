import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MenuCompetitions from "../layouts/sections/MenuCompetitions";
import tableMenuCompetitions from "../_params/tableMenuCompetitions";

const Competitions = () => {
  return (
    <div className="mc-fond-courts-couverts">
      <Container fluid>
        <Row className="vh-100">
          <Col xs={12} md={3} className="mc-menu">
            {tableMenuCompetitions.map((menu, index) => {
              return (
                <MenuCompetitions
                  title={menu.title}
                  links={menu.links}
                  key={index}
                />
              );
            })}
          </Col>
          <Col
            xs={12}
            md={9}
            className="d-flex align-items-center bg-warning mx-auto"
          >
            <img
              src="logoTCF1.png"
              className="mc-position-logo mc-animation-logo"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Competitions;
