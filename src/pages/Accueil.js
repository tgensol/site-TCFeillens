import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import imgAnim from "../assets/img/imgAnim";
import imgPartners from "../assets/img/imgPartners";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import saveDate from "../assets/img/imgHeader/save-date-red.png";
import tablePgmAVenir from "../_params/tablePgmAVenir";
import "../assets/css/styles.css";
import Weather from "../components/Weather";
import News from "../components/News";

const Accueil = () => {
  const days = tablePgmAVenir.map((pgm) => {
    const gap = Date.now() - Date.parse(pgm.date);
    // calcul du nb de jours (floor => donne l'entier avant la virgule).
    return Math.floor(gap / (24 * 60 * 60 * 1000));
  });

  const listImgPartners = imgPartners.map((image) => (
    <div key={Math.random()}>
      <img className="mc-img" src={image} alt="" />
    </div>
  ));

  return (
    <div className="mc-fond-ecran">
      <Container fluid>
        <h3 className="pt-3 ps-4 mc-rampart text-primary">
          Programmes à venir
        </h3>
        <Row>
          {tablePgmAVenir.map((pgm, index) => (
            <Col xs={5} lg={3} className="p-4 border-end">
              <Card className="mb-2" key={index}>
                <Card.Img variant="top" src={imgAnim[index]} />
                <Card.Img
                  className="position-absolute ms-2 mt-2 w-25 bg-light"
                  variant="top"
                  src={saveDate}
                />
                <Card.Body className={pgm.couleur}>
                  <Card.Title>
                    {pgm.dateText}
                    <Badge bg="secondary" className="ms-2">
                      {days[index]} j
                    </Badge>
                  </Card.Title>
                  <Card.Text className="my-1 fw-bold text-decoration-underline">
                    {pgm.animation}
                  </Card.Text>
                  <Card.Text className="lh-1">{pgm.texte}</Card.Text>
                  <Button
                    role="button"
                    variant="muted"
                    href="/animations/badminton"
                    className="shadow border border-2"
                  >
                    <span className="pe-2">Voir</span>
                    <IconContext.Provider value={{ size: "1em" }}>
                      <FaChevronRight />
                    </IconContext.Provider>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h3 className="pt-3 ps-4 mc-rampart text-primary">Actualités</h3>
        <Row>
          <Col xs={8} lg={6} className="p-4">
            <News />
          </Col>
          <Col xs={8} lg={6} className="p-4">
            <Weather />
          </Col>
        </Row>
        <h3 className="py-3 ps-4">
          <span className="mc-partners mc-rampart">Nos partenaires</span>
        </h3>
      </Container>
      <Container fluid className="pt-3 pb-5">
        <Row className="mc-neon">
          <div className="mc-carousel-infinite">
            <div className="wrapper">
              <div className="mc-partners-logo">{listImgPartners}</div>
              <div className="mc-partners-logo">{listImgPartners}</div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Accueil;
