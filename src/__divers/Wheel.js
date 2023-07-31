import React, { useEffect, useState } from "react";
import Card from "./card";

const Wheel = () => {
  const radius = 200;
  const [cards, setCards] = useState([]);
  const [newCssRule, setNewCssRule] = useState({});

  useEffect(() => {
    const styleSheet = document.styleSheets[2];
    console.log("styleSheet: ", styleSheet);
    const cssRule = [...styleSheet.cssRules].find(
      (rule) => rule.selectorText === ".mc-wheel"
    );

    setNewCssRule(cssRule);

    let centerOfWheel = {
      x: Number(
        cssRule.style.width.slice(0, cssRule.style.width.length - 2) / 2
      ),
      y: Number(
        cssRule.style.height.slice(0, cssRule.style.height.length - 2) / 2
      ),
    };

    let newCards = [];
    const animation = "3s linear infinite turnin";

    for (let i = 0; i < 8; i++) {
      newCards.push(
        <Card
          theta={(Math.PI / 4) * i}
          radius={radius}
          center={centerOfWheel}
          animation={animation}
          id={i + 1}
          key={`cardId${i}`}
        />
      );
    }

    setCards(newCards);
  }, [radius, newCssRule]);

  /**************************** Mouse Enter Function **************************/

  const handleMouseEnter = (e) => {
    // newCssRule.style.setProperty("animation", "3s linear inifite turn");
    newCssRule.style.setProperty("animation-duration", "3s");
    newCssRule.style.setProperty("animation-timing-function", "linear");
    newCssRule.style.setProperty("animation-iteration-count", "infinite");
    newCssRule.style.setProperty("animation-name", "turnout");
  };

  /**************************** Mouse Leave Function **************************/

  const handleMouseLeave = () => {
    newCssRule.style.setProperty("animation-duration", "");
    newCssRule.style.setProperty("animation-timing-function", "");
    newCssRule.style.setProperty("animation-iteration-count", "");
    newCssRule.style.setProperty("animation-name", "");
    newCssRule.style.setProperty("transform", "rotate(0deg)");
  };

  /**************************** Mouse Scroll Function **************************/

  // let tempTheta = 0;

  // const handleScroll = (e) => {
  //   tempTheta += e.deltaY;
  //   const newTransformProperty = `translate(0%, -20%) rotate(${
  //     tempTheta * 0.1
  //   }deg)`;
  //   newCssRule.style.setProperty("transform", newTransformProperty);

  //   // let a = [];
  //   // const newCards = cards.map((card) => {
  //   //   a = { ...card, props: { ...card.props, rotate: -tempTheta } };
  //   //   return a;
  //   // });

  //   // setCards(newCards);
  // };

  return (
    <div
      className="mc-wheel"
      // onWheel={handleScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards}
    </div>
  );
};

export default Wheel;
