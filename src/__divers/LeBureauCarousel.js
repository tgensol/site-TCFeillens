import React from "react";
import MenuClubSection from "../layouts/sections/menusection";
import Wheel from "../../components/wheel";

const LeBureau = () => {
  return (
    <div className="mc-fond-clubhouse d-flex">
      <div className="mc-menu">
        <MenuClubSection />
      </div>
      <div className="mc-bureau">
        <h1 className="mc-rampart mc-title mb-4">Le Bureau</h1>
        <div className="d-flex justify-content-center">
          <Wheel />
        </div>
      </div>
    </div>
  );
};

export default LeBureau;
