import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { MenuCompetitionSection } from "../../layouts/sections/MenuSection";
import tableMenuCompetition from "../../_params/tableMenuCompetition";

const Competitions = () => {
  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row className="vh-100">
          <Col xs={12} md={3} className="mc-menu">
            {tableMenuCompetition.map((menu, index) => {
              return (
                <MenuCompetitionSection
                  title={menu.title}
                  menu={menu.menu}
                  menuVisible={true}
                  key={index}
                />
              );
            })}
          </Col>
          <Col xs={12} md={9} className="d-flex align-items-center">
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
