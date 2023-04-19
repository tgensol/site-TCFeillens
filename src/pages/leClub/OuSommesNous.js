import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MenuClubSection } from "../../layouts/sections/MenuSection";
import accesCourtsExt from "../../assets/img/imgInstallations/accesCourtsExterieurs.png";
import accesCourtsCouv from "../../assets/img/imgInstallations/accesCourtsCouverts.png";

const OuSommesNous = () => {
  const [pointVisible, setPointVisible] = useState(true);
  const [mapExtVisible, setMapExtVisible] = useState(false);
  const [mapCouVisible, setMapCouVisible] = useState(false);

  const handlePointVisible = () => {
    setPointVisible(true);
    setMapExtVisible(false);
    setMapCouVisible(false);
  };

  const handleMapExtVisible = () => {
    setMapExtVisible(true);
    setMapCouVisible(false);
    setPointVisible(false);
  };

  const handleMapCouVisible = () => {
    setMapCouVisible(true);
    setMapExtVisible(false);
    setPointVisible(false);
  };

  return (
    <div className="mc-fond-europe">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="mc-menu-fixe">
            <MenuClubSection />
          </Col>
          <Col xs={12} md={{ span: 7, offset: 1 }}>
            <div className="pt-5">
              <div
                className={
                  pointVisible
                    ? "mc-osn-point-visible mc-osn-point1-visible"
                    : "mc-osn-point-invisible"
                }
                onMouseEnter={handleMapExtVisible}
              >
                <span className="fs-6">?</span>
                <br />
                <span className="">courts extérieurs</span>
              </div>
              <div
                className={
                  pointVisible
                    ? "mc-osn-point-visible mc-osn-point2-visible"
                    : "mc-osn-point-invisible"
                }
                onMouseEnter={handleMapCouVisible}
              >
                <span className="fs-6">!</span>
                <br />
                <span className="">courts couverts</span>
              </div>

              <div
                onMouseLeave={handlePointVisible}
                className={
                  mapExtVisible ? "mc-osn-map-visible" : "mc-osn-map-invisible"
                }
              >
                <img
                  width={"100%"}
                  className="border border-2 rounded-2 border-warning"
                  src={accesCourtsExt}
                  alt=""
                />
              </div>

              <div
                onMouseLeave={handlePointVisible}
                className={
                  mapCouVisible ? "mc-osn-map-visible" : "mc-osn-map-invisible"
                }
              >
                <img
                  width={"100%"}
                  className="border border-2 rounded-1 border-danger"
                  src={accesCourtsCouv}
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OuSommesNous;
