import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import tableBureau from "../../_params/tablebureau";
import MenuClub from "../../layouts/sections/menuclub";

const LeBureau = () => {
  const idCardBureau = tableBureau.map((card) => {
    return (
      <Col md={12} xl={6} key={card.id}>
        <Card className="flex-row justify-content-between my-3 bg-light border border-success border-5 rounded-4">
          <Col xs={4}>
            <Card.Img
              src={card.photoId}
              alt="Photo Id?"
              className="rounded-3"
            />
          </Col>
          <Col xs={8}>
            <Card.Body className="">
              <Card.Title className="fs-4 mc-rampart text-primary">
                {card.name}
              </Card.Title>
              <Card.Title className="text-primary fs-4 fw-bold">
                {card.position}
              </Card.Title>
              <Card.Text className="fs-5 fst-italic fw-bold">
                {card.commission}
              </Card.Text>
              <Card.Text>{card.phone}</Card.Text>
            </Card.Body>
          </Col>
        </Card>
      </Col>
    );
  });

  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="gx-0" style={{ zIndex: 1000 }}>
            <MenuClub />
          </Col>
          <Col xs={12} md={8} className="m-auto">
            <h1 className="my-5 mc-rampart mc-title">Le Bureau</h1>
            <div className="mc-container-club">
              <Row>{idCardBureau}</Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeBureau;
