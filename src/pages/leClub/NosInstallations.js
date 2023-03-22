import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import clubHouse1 from "../../assets/img/imgInstallations/clubHouse1.jpg";
import clubHouse2 from "../../assets/img/imgInstallations/clubHouse2.jpg";
import clubVuDuCiel from "../../assets/img/imgInstallations/clubVuDuCiel.png";
import courtsCouverts from "../../assets/img/imgInstallations/courtsCouverts.jpg";
import courtsExterieurs from "../../assets/img/imgInstallations/courtsExterieurs.jpg";

const NosInstallations = () => {
  return (
    <div className="mc-fond-ecran1">
      <Container>
        <Row className="pt-5">
          <h1 className="mc-rampart mc-1981 mb-5">Nos installations</h1>
        </Row>
        <Row>
          <Card className="border border-5 rounded-5 p-2 my-3 bg-light">
            <Card.Body className="mx-3">
              <Card.Title className="display-6 fw-bold">
                Vue du cliel
              </Card.Title>
              <div className="d-flex align-items-center">
                <img width={"20%"} src={clubVuDuCiel} alt="" />
                <div className="mx-5">Notre club vu du ciel.</div>
              </div>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="border border-5 rounded-5 p-2 my-3 bg-light">
            <Card.Body>
              <Card.Title className="display-6 fw-bold">
                Notre clubhouse
              </Card.Title>
              <div className="d-flex justify-content-evenly">
                <img
                  width={"45%"}
                  className="border border-5 rounded-4"
                  src={clubHouse1}
                  alt=""
                />
                <img
                  width={"45%"}
                  className="border border-5 rounded-4"
                  src={clubHouse2}
                  alt=""
                />
              </div>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
            <Card.Body>
              <Card.Title className="display-6 fw-bold">
                Nos courts extérieurs
              </Card.Title>
              <img
                width={"50%"}
                src={courtsExterieurs}
                className="border border-5 rounded-4"
                alt=""
              />
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="border border-5 rounded-5 p-2 my-3 bg-light">
            <Card.Body>
              <Card.Title className="display-6 fw-bold">
                Nos courts couverts
              </Card.Title>
              <div className="d-flex justify-content-evenly">
                <img
                  width={"45%"}
                  src={courtsCouverts}
                  className="border border-5 rounded-4"
                  alt=""
                />
                <img
                  width={"45%"}
                  src={courtsCouverts}
                  alt=""
                  className="border border-5 rounded-4"
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
