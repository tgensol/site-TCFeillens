import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import imgNews from "../assets/img/imgNews";
import imgAnim from "../assets/img/imgAnim";
import imgPartners from "../assets/img/imgPartners";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import saveDate from "../assets/img/imgHeader/save-date-red.png";
import tablePgmAVenir from "../_params/tablePgmAVenir";
import "../assets/css/styles.css";

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
  console.log("listImgPartners: ", listImgPartners);

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
          <Col xs={6} className="p-4">
            <Carousel fade className="text-light">
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgNews[0]}
                  alt="First slide"
                />
                <div className="border p-2 bg-secondary border-top-0 border-2">
                  <h5>Balle mouillée en couleur</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgNews[1]}
                  alt="Second slide"
                />
                <div className="border p-2 bg-dark border-top-0 border-2">
                  <h5>Court Central US Open</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgNews[2]}
                  alt="Third slide"
                />
                <div className="border p-2 bg-dark border-top-0 border-2">
                  <h5>Match de tennis féminin</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 border border-2"
                  src={imgNews[3]}
                  alt="Balle mouillée noire et blanc"
                />
                <div className="border p-2 bg-dark border-top-0 border-2">
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <br />
                </div>
              </Carousel.Item>
            </Carousel>
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

      <Container fluid></Container>
    </div>
  );
};

export default Accueil;
