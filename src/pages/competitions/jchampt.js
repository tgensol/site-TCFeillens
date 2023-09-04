import React, { useState } from "react";
import "../../assets/css/jeunes.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import MenuCompetitions from "../../layouts/sections/menu-competitions";
import tableCompetitions from "../../_params/tableCompetitions";
import tableSaisons from "../../_params/tableSaisons";
import TeamsList from "../../components/c-teams-list";

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
          <Col xs={12} md={3} className="gx-0" style={{ zIndex: 1000 }}>
            <MenuCompetitions />
          </Col>
          <Col xs={12} md={9} className="m-auto">
            <h1 className="my-5 mc-rampart mc-title">Championnats Jeunes</h1>
            <div className="mc-container">
              <div className="d-flex flex-wrap justify-content-center align-items-center mb-3">
                <div className="title mx-2">
                  <h1>Compétitions par équipes</h1>
                </div>
                <div className="title mx-2">
                  <h1>Saison</h1>
                </div>
                <div>
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
                </div>
              </div>
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
