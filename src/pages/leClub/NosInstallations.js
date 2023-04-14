import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import clubHouse1 from "../../assets/img/imgInstallations/clubHouse1.jpg";
import clubHouse2 from "../../assets/img/imgInstallations/clubHouse2.jpg";
import clubHouse3 from "../../assets/img/imgInstallations/clubHouse3.jpg";
import clubVuDuCiel from "../../assets/img/imgInstallations/clubVuDuCiel.jpg";
import courtsCouverts from "../../assets/img/imgInstallations/courtsCouverts.jpg";
import courtsExterieurs from "../../assets/img/imgInstallations/courtsExterieurs.jpg";
import courtsExterieurs1 from "../../assets/img/imgInstallations/courtsExterieurs1.png";
import { MenuClubSection } from "../../layouts/sections/MenuSection";

const NosInstallations = () => {
  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="mc-menu">
            <MenuClubSection menuVisible={false} />
          </Col>
          <Col xs={12} md={9} className="px-5">
            <Row className="pt-5 align-content-center">
              <h1 className="mc-rampart mc-title mb-2">Nos installations</h1>
            </Row>
            <Row>
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
            <Row>
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
            <Row>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosInstallations;
