import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import tableBureau from "../../_params/tableBureau";
import { MenuClubSection } from "../../layouts/sections/MenuSection";

const LeBureau = () => {
  const idCardBureau = tableBureau.map((card) => {
    return (
      <Col xs={12} lg={6} key={card.id}>
        <Card className="flex-row justify-content-between my-3 bg-light border border-success border-5 rounded-4">
          <Col xs={4}>
            <Card.Img src={card.photoId} alt="..." className="rounded-3" />
          </Col>
          <Col xs={7}>
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
          <Col xs={12} lg={3} className="mc-menu">
            <MenuClubSection menuVisible={false} />
          </Col>
          <Col xs={12} lg={9}>
            <h1 className="mt-5 mc-rampart mc-title mb-2">Le Bureau</h1>
            <Row>{idCardBureau}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeBureau;
