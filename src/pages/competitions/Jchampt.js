import React from "react";
import "../../assets/css/jeunes.css";
import { Col, Container, Row } from "react-bootstrap";
import { MenuCompetitionSection } from "../../layouts/sections/MenuSection";
import tableMenuCompetition from "../../_params/tableMenuCompetition";

const Jeunes = ({ isActive, setIsActive }) => {
  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row>
          <Col xs={12} lg={3} className="mc-menu-fixe">
            {tableMenuCompetition.map((menu, index) => {
              return (
                <MenuCompetitionSection
                  title={menu.title}
                  links={menu.links}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  key={index}
                />
              );
            })}
          </Col>
          <Col xs={12} lg={9}>
            <h1 className="mt-5 mc-rampart mc-title mb-2">
              Championnats Jeunes
            </h1>
            <Row>
              <div className="container">
                <Col xs={12} lg={8}>
                  <div className="container_content_inner">
                    <div className="title">
                      <h1>Championnats par équipes - 2023</h1>
                    </div>
                    <div className="par">
                      <p>
                        Cupiditate alias odio omnis minima veritatis saepe
                        porro, repellendus natus vitae, sequi exercitationem
                        ipsam, qui possimus sit eveniet laborum sapiente
                        quisquam quae neque velit?
                      </p>
                    </div>
                    <div className="btns">
                      <button className="btns_more"> See more </button>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={4}>
                  <div className="container_outer_img my-3">
                    <img
                      src="https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                      alt="Hello"
                      className="container_img"
                    />
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jeunes;
