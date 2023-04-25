import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import PlayersList from "./PlayersList";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CompetitionsTeams = ({ teamsList }) => {
  const [teamVisible, setTeamVisible] = useState(false);

  const handleOnClickUserFriends = () => {
    setTeamVisible(!teamVisible);
  };

  return (
    <div>
      {teamsList.map((team, index) => (
        <div key={index}>
          <div className="mc-team d-flex align-items-center justify-content-between">
            <div className="mc-team-line">
              {`Équipe ${team.teamNum} - ${team.level} - Poule ${team.group}`}
            </div>
            <div>
              <Link to={team.path} target="_blank" rel="noreferrer">
                <button type="button" className="mc-btn mc-btn_more">
                  Voir le championnat
                </button>
              </Link>
            </div>
            <div
              class="mc-userFriends d-flex justify-content-center align-items-center"
              onClick={handleOnClickUserFriends}
            >
              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip>{`Liste des joueurs - Équipe ${team.teamNum}`}</Tooltip>
                }
              >
                <a href="#mc-player">
                  <FaUserFriends />
                </a>
              </OverlayTrigger>
            </div>
          </div>
          <PlayersList playersList={team.players} teamVisible={teamVisible} />
        </div>
      ))}
    </div>
  );
};

export default CompetitionsTeams;
