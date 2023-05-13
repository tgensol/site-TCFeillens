import React from "react";

const getMyCoords = (theta, radius) => {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
};

const Card = (cards) => {
  let newCoords = getMyCoords(cards.theta, cards.radius);

  console.log("cards: ", cards);

  return (
    <div
      style={{
        ...styles.card,
        left: `${cards.center.x + newCoords.x}px`,
        top: `${cards.center.y - newCoords.y}px`,
        animation: `${cards.animation}`,
      }}
    >
      {`card${cards.id}`}
    </div>
  );
};

const styles = {
  card: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    animation: "",
    height: "200px",
    width: "250px",
    backgroundColor: "green",
    borderRadius: "10px",
    color: "white",
    textAlign: "center",
    paddingTop: "100px",
  },
};

export default Card;
