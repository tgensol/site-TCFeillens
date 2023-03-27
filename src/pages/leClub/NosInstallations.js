import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import clubHouse1 from "../../assets/img/imgInstallations/clubHouse1.jpg";
import clubHouse2 from "../../assets/img/imgInstallations/clubHouse2.jpg";
import clubVuDuCiel from "../../assets/img/imgInstallations/clubVuDuCiel.jpg";
import courtsCouverts from "../../assets/img/imgInstallations/courtsCouverts.jpg";
import courtsExterieurs from "../../assets/img/imgInstallations/courtsExterieurs.jpg";
import courtsExterieurs1 from "../../assets/img/imgInstallations/courtsExterieurs1.png";

const NosInstallations = () => {
  return (
    <div className="mc-fond-ecran1">
      <Container>
        <Row className="pt-5">
          <h1 className="mc-rampart mc-1981 mb-5">Nos installations</h1>
        </Row>
        <Row>
          <Card className="border border-5 rounded-5 p-2 my-3 mc-card">
            <Card.Body>
              <Card.Title className="display-6 fw-bold text-center mb-3">
                Notre clubhouse
              </Card.Title>
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
          <Card className="border border-5 rounded-5 p-2 my-3  mc-card">
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
          <Card className="border border-5 rounded-5 p-2 my-3 mc-card">
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
      </Container>
    </div>
  );
};

export default NosInstallations;
