import React, { useState } from "react";
import "../../assets/css/jeunes.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { MenuCompetitionSection } from "../../layouts/sections/MenuSection";
import tableMenuCompetition from "../../_params/tableMenuCompetition";
import { Link } from "react-router-dom";
import tableCompetitions from "../../_params/tableCompetitions";
import tableTeams from "../../_params/tableTeams";
import tableSaisons from "../../_params/tableSaisons";
import tablePlayers from "../../_params/tablePlayers";
import { FaUserFriends } from "react-icons/fa";

const Jchampt = () => {
  /*************************** Selection of today's date to select correct season year */
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

  const [seasonSelected, setSeasonSelected] = useState(year);

  /*********************** Selection of competitions with teams involved in championship */
  let compFound = [];
  let competitionId = 0;
  let findCompId = [];

  tableTeams.map((team) => {
    if (team.season === seasonSelected) {
      if (team.competitionId !== competitionId) {
        competitionId = team.competitionId;
        findCompId = tableCompetitions.find(
          (comp) =>
            comp.competitionId === competitionId && comp.type === "Jeunes"
        );
        if (findCompId) {
          compFound.push(findCompId);
        }
      }
    }
    return compFound;
  });

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
                  key={index}
                />
              );
            })}
          </Col>
          <Col xs={12} lg={8} className="m-auto">
            <h1 className="my-5 mc-rampart mc-title">Championnats Jeunes</h1>
            <div className="mc-container">
              <Col xs={12} lg={7}>
                <div className="d-flex align-items-center mb-3">
                  <div className="title">
                    <h1>Compétitions par équipes - Saison</h1>
                  </div>
                  <Form.Group>
                    <Form.Label className="fs-1">
                      <Form.Select
                        className="fs-4 text-light fw-bold mc-select"
                        value={seasonSelected}
                        onChange={(e) => setSeasonSelected(e.target.value)}
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
                {compFound.map((comp) => {
                  return (
                    <div key={comp.competitionId} className="ms-5">
                      <div className="mc-contest">
                        {`${comp.contest} - ${comp.category}`}
                        <div>
                          {tableTeams
                            .filter(
                              (team) =>
                                team.competitionId === comp.competitionId &&
                                team.season === seasonSelected
                            )
                            .map((teamFiltered) => (
                              <div
                                key={teamFiltered.id}
                                className="mc-team d-flex align-items-center justify-content-between"
                              >
                                <div className="mc-team-line">
                                  {`Équipe ${teamFiltered.teamNum} - ${teamFiltered.gender} - ${teamFiltered.level} - Poule ${teamFiltered.group}`}
                                </div>
                                <Link
                                  to={teamFiltered.path}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <button
                                    type="button"
                                    className="mc-btn mc-btn_more"
                                  >
                                    Voir le championnat
                                  </button>
                                </Link>
                                <div className="mc-userFriends d-flex justify-content-center align-items-center">
                                  <a href="#mc-player">
                                    <FaUserFriends />
                                  </a>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Col>
              <Col xs={12} lg={5}>
                <div className="mc-players">
                  {tablePlayers.map((player) => {
                    return (
                      <div
                        id="mc-player"
                        className="bg-primary"
                        key={player.id}
                      >{`${player.name} - ${player.ranking}`}</div>
                    );
                  })}
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jchampt;
