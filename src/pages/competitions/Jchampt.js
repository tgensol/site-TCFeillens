import React, { useState } from "react";
import "../../assets/css/jeunes.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import MenuCompetitions from "../../layouts/sections/MenuCompetitions";
import tableMenuCompetitions from "../../_params/tableMenuCompetitions";
import tableCompetitions from "../../_params/tableCompetitions";
import tableSaisons from "../../_params/tableSaisons";
import TeamsList from "../../components/TeamsList";

const Jchampt = () => {
  console.log("Hello Jchampt");

  /*************************** Selection of today's date to select current season year */
  let year = 0;

  const todaysDate = new Date();
  for (var i = 0; i < tableSaisons.length; i++) {
    const startDate = Date.parse(tableSaisons[i].startDate);
    const endDate = Date.parse(tableSaisons[i].endDate);

    if (todaysDate > startDate && todaysDate < endDate) {
      year = tableSaisons[i].season;
      break;
    }
  }

  const [currentSeason, setCurrentSeason] = useState(year);

  return (
    <div className="mc-fond-courts-couverts">
      <Container fluid>
        <Row>
          <Col md={3} className="mc-menu-fixe">
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
          <Col md={9} className="m-auto">
            <h1 className="my-5 mc-rampart mc-title">Championnats Jeunes</h1>
            <div className="mc-container">
              {/* <div className="d-flex align-items-center mb-3"> */}
              {/* <div> */}
              <Row>
                <Col lg={7} className="ms-3">
                  <div className="title">
                    <h1>Compétitions par équipes</h1>
                  </div>
                </Col>
                <Col xs={2} className="ms-3">
                  <div className="title">
                    <h1>Saison</h1>
                  </div>
                </Col>
                <Col xs={2}>
                  <Form.Group>
                    <Form.Label className="fs-1 d-flex">
                      <Form.Select
                        className="fs-4 text-light fw-bold mc-select"
                        value={currentSeason}
                        onChange={(e) => setCurrentSeason(e.target.value)}
                      >
                        {tableSaisons.map((saison) => {
                          return (
                            <option key={saison.id}>{saison.season}</option>
                          );
                        })}
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              {/* </div> */}
              {tableCompetitions
                .filter(
                  (comp) =>
                    comp.season === currentSeason &&
                    !comp.category.includes("Seniors")
                )
                .map((compFiltered) => {
                  return (
                    <div
                      className="ms-5 mc-contest"
                      key={compFiltered.competitionId}
                    >
                      {`${compFiltered.championship} - ${compFiltered.category} - ${compFiltered.gender}`}
                      <div>
                        <TeamsList
                          teamsList={[compFiltered.gender, compFiltered.teams]}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jchampt;
