import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import tableMenuCompetition from "../../_params/tableMenuCompetition";
import { MenuCompetitionSection } from "../../layouts/sections/MenuSection";
import galaxie from "../../assets/img/Photos/galaxie.jpg";

const Jtournoi = () => {
  const [isActive, setIsActive] = useState(true);

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
            <h1 className="mt-5 mc-rampart mc-title mb-2">Tournois Jeunes</h1>
            <Row>
              <div className="container">
                <Col xs={12} lg={8}>
                  <div className="container_content_inner">
                    <div className="title text-warning">
                      <h1>Galaxie Orange - 2023</h1>
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
                  <div className="container_content_inner">
                    <div className="title text-success">
                      <h1>Galaxie VERT - 2023</h1>
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
                    <img src={galaxie} alt="Hello" className="container_img" />
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

export default Jtournoi;
