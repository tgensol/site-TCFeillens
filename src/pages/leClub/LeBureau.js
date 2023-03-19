import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import idMichel from "../../assets/img/imgBureau/idMichel.jpg";
import idAntonio from "../../assets/img/imgBureau/idAntonio.jpg";
import idJeremie from "../../assets/img/imgBureau/idJeremie.jpg";
import idShauna from "../../assets/img/imgBureau/idShauna.jpg";

const LeBureau = () => {
  return (
    <div>
      <Container>
        <h1>Le Bureau</h1>
        <Row>
          <Col xs={5} lg={6} className="p-4 border-end">
            <Card className="flex-row">
              <Col xs={4}>
                <Card.Img src={idMichel} />
              </Col>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>Président</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Card>
          </Col>
          <Col xs={5} lg={6} className="p-4">
            <Card className="flex-row">
              <Col xs={4}>
                <Card.Img variant="top" src={idAntonio} />
              </Col>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>Commission Equipement</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={5} lg={6} className="p-4 border-end">
            <Card className="flex-row">
              <Col xs={4}>
                <Card.Img src={idJeremie} />
              </Col>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>Trésorier</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Card>
          </Col>
          <Col xs={5} lg={6} className="p-4">
            <Card className="flex-row">
              <Col xs={4}>
                <Card.Img variant="top" src={idShauna} />
              </Col>
              <Col xs={6}>
                <Card.Body>
                  <Card.Title>
                    Secrétaire Générale / Commission Animation
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                  </Card.Text>
                </Card.Body>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeBureau;
