import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import PlayersList from "./c-players-list";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => null);

  return (
    <button type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

const CompetitionsTeams = ({ teamsList }) => {
  const [teamVisible, setTeamVisible] = useState(false);

  return (
    <div>
      {teamsList[1].map((team, index) => (
        <div key={index}>
          <Accordion>
            <div className="mc-team d-flex align-items-center justify-content-between">
              <div className="mc-team-line">
                {`Équipe ${team.teamNum} - ${team.level} - Poule ${team.group}`}
              </div>
              <div className="mc-btn">
                <Link
                  to={team.path}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-light fst-normal fs-5"
                >
                  Voir le championnat
                </Link>
              </div>
              <CustomToggle eventKey="0">
                <OverlayTrigger
                  placement={"top"}
                  overlay={
                    <Tooltip>{`Liste des ${
                      teamsList[0] === "Dames" || teamsList[0] === "Filles"
                        ? "joueuses"
                        : "joueurs"
                    } - Équipe ${team.teamNum}`}</Tooltip>
                  }
                >
                  <div
                    className="mc-userFriends d-flex justify-content-center align-items-center"
                    onClick={() => {
                      setTeamVisible(!teamVisible);
                    }}
                  >
                    <FaUserFriends />
                  </div>
                </OverlayTrigger>
              </CustomToggle>
            </div>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="fs-6 text-light ms-4">
                <span>
                  Liste des&nbsp;
                  {teamsList[0] === "Dames" || teamsList[0] === "Filles"
                    ? "joueuses"
                    : "joueurs"}
                </span>
                <PlayersList teamsPlayers={teamsList[1][index].players} />
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default CompetitionsTeams;
