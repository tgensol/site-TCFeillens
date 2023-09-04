import React from "react";
import { Table } from "react-bootstrap";

const PlayersList = ({ teamsPlayers }) => {
  return (
    <div className="mc-players-bg">
      <div className="mc-players">
        <div id="mc-player">
          <Table responsive>
            <thead>
              <tr className="text-warning fst-italic">
                <th>Nom&nbsp;&nbsp;&nbsp;Prénom</th>
                <th>Classement</th>
                <th>Numéro de licence</th>
              </tr>
            </thead>

            {teamsPlayers.map((player, index) => (
              <tbody key={index}>
                <tr className="text-light">
                  <td>{player.playerName}</td>
                  <td>{player.ranking}</td>
                  <td>{player.licenceNum}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PlayersList;
