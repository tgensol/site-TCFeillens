import React from "react";

const PlayersList = ({ playersList, teamVisible }) => {
  console.log("playersList: ", playersList);
  console.log("teamVisible: ", teamVisible);
  return (
    <div>
      {teamVisible ? (
        <div className="mc-players">
          {playersList.map((player, index) => {
            return (
              <div id="mc-player" key={index}>
                {`${player.playerName} - ${player.ranking}`}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default PlayersList;
