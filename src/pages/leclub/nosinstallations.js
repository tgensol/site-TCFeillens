import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import clubHouse1 from "../../assets/img/imginstallations/clubHouse1.jpg";
import clubHouse2 from "../../assets/img/imginstallations/clubHouse2.jpg";
import clubHouse3 from "../../assets/img/imginstallations/clubHouse3.jpg";
import clubVuDuCiel from "../../assets/img/imginstallations/clubVuDuCiel.jpg";
import courtsCouverts from "../../assets/img/imginstallations/courtsCouverts.jpg";
import courtsExterieurs from "../../assets/img/imginstallations/courtsExterieurs.jpg";
import courtsExterieurs1 from "../../assets/img/imginstallations/courtsExterieurs1.png";
import MenuClub from "../../layouts/sections/menuclub";

const NosInstallations = () => {
  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="gx-0" style={{ zIndex: 1000 }}>
            <MenuClub />
          </Col>
          <Col xs={12} md={8} className="m-auto">
            <h1 className="my-5 mc-rampart mc-title">Nos installations</h1>
            <div className="mc-container-club">
              <Row className="mc-container-histoire1">
                <Card className="border border-5 rounded-5 p-2 my-3 mc-card text-light">
                  <Card.Body>
                    <Card.Title className="display-6 fw-bold text-center mb-3">
                      Notre clubhouse
                    </Card.Title>
                    <div className="m-4">
                      <img
                        width={"100%"}
                        className="border border-5 rounded-4 border-dark"
                        src={clubHouse3}
                        alt=""
                      />
                    </div>
                    <div className="d-flex justify-content-evenly">
                      <img
                        width={"30%"}
                        className="border border-5 rounded-4 border-dark"
                        src={clubVuDuCiel}
                        alt=""
                      />
                      <img
                        width={"30%"}
                        className="border border-5 rounded-4 border-dark"
                        src={clubHouse1}
                        alt=""
                      />
                      <img
                        width={"30%"}
                        className="border border-5 rounded-4 border-dark"
                        src={clubHouse2}
                        alt=""
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Row>
              <Row className="mc-container-histoire2">
                <Card className="border border-5 rounded-5 p-2 my-3 mc-card text-light">
                  <Card.Body>
                    <Card.Title className="display-6 fw-bold text-center mb-3">
                      Nos courts extérieurs
                    </Card.Title>
                    <div className="d-flex justify-content-evenly">
                      <img
                        width={"45%"}
                        src={courtsExterieurs}
                        className="border border-5 rounded-4 border-dark"
                        alt=""
                      />
                      <img
                        width={"45%"}
                        src={courtsExterieurs1}
                        className="border border-5 rounded-4 border-dark"
                        alt=""
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Row>
              <Row className="mc-container-histoire3">
                <Card className="border border-5 rounded-5 p-2 my-3 mc-card text-light">
                  <Card.Body>
                    <Card.Title className="display-6 fw-bold text-center mb-3">
                      Nos courts couverts
                    </Card.Title>
                    <div className="d-flex justify-content-evenly">
                      <img
                        width={"45%"}
                        src={courtsCouverts}
                        className="border border-5 rounded-4 border-dark"
                        alt=""
                      />
                      <img
                        width={"45%"}
                        src={courtsCouverts}
                        alt=""
                        className="border border-5 rounded-4 border-dark"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosInstallations;
