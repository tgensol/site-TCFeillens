import React from "react";
import imgpartners from "../assets/img/images-partners";

export const Partners = () => {
  const listimgpartners = imgpartners.map((image, index) => (
    <div key={index}>
      <img className="mc-img" src={image} alt="" />
    </div>
  ));

  return (
    <div className="mc-neon">
      <div className="mc-carousel-infinite">
        <div className="mc-wrapper">
          <div className="mc-partners-logo">{listimgpartners}</div>
          <div className="mc-partners-logo">{listimgpartners}</div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
