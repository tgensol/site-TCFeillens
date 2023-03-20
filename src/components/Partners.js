import React from "react";
import imgPartners from "../assets/img/imgPartners";

export const Partners = () => {
  const listImgPartners = imgPartners.map((image, index) => (
    <div key={index}>
      <img className="mc-img" src={image} alt="" />
    </div>
  ));

  return (
    <div className="mc-neon">
      <div className="mc-carousel-infinite">
        <div className="mc-wrapper">
          <div className="mc-partners-logo">{listImgPartners}</div>
          <div className="mc-partners-logo">{listImgPartners}</div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
