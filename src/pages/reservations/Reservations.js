import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

const buttonVariants = {
  hover: {
    // scale: [1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1],
    scale: 1.3,
    textShadow: "0 0 8px rgb(255, 255, 255)",
    transition: { duration: 0.5, repeat: Infinity },
  },
};

const Reservations = () => {
  return (
    <div className="mc-fond-courts-couverts">
      <Container fluid>
        <Row>
          <Col s={12} lg={5} className="my-4 offset-1">
            <div className="mt-2 border border-4 border-black rounded-4 shadow-lg p-4 bg-light">
              <h3 className="bg-danger rounded-2 text-center text-light">
                Réservation des courts couverts
              </h3>
              <p className="text-center">
                La réservation se fait via l'application <b>CAFIRESA</b>
                <br></br>
                Connectez-vous avec votre identifiant et mot de passe.
                <br></br>
                <br></br>
              </p>
              <Card className="p-2 m-4">
                <Card.Img
                  src={"/cafiresa.jpg"}
                  width={100}
                  height={350}
                  alt=""
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                  <Button
                    role="button"
                    variant="warning"
                    href="//www.cafiresa.com/atcpb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 border border-4 border-danger"
                    size="lg"
                  >
                    <motion.div variants={buttonVariants} whileHover="hover">
                      <span className="pe-2 fw-bolder">Réserver</span>
                      <IconContext.Provider value={{ size: "1em" }}>
                        <FaChevronRight />
                      </IconContext.Provider>
                    </motion.div>
                  </Button>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col s={12} lg={5} className="m-4">
            <div className="mt-2 border border-4 border-black rounded-4 shadow-lg p-4 bg-light">
              <h3 className="bg-success rounded-2 text-center text-light">
                Réservation des courts extérieurs
              </h3>
              <p className="text-center">
                La réservation se fait via l'application <b>TEN'UP</b>
                <br></br>
                Connectez-vous avec votre identifiant et mot de passe.
                <br></br>
                Accéder au menu <b>"RÉSERVER / Dans mon club"</b>
              </p>
              <Card className="p-2 m-4">
                <Card.Img src={"/resatenup.png"} width={100} height={350} />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                  <Button
                    role="button"
                    variant="warning"
                    href="https://auth.fft.fr/auth/realms/master/protocol/openid-connect/auth?client_id=FED_MET&response_type=code&scope=openid&redirect_uri=https://tenup.fft.fr/user-auth/process&atuserid=8d3c1a1e-ab7b-42d4-bc7f-8185bf5b7fa7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 border border-4 border-danger"
                    size="lg"
                  >
                    <motion.div variants={buttonVariants} whileHover="hover">
                      <span className="pe-2 fw-bolder">Réserver</span>
                      <IconContext.Provider value={{ size: "1em" }}>
                        <FaChevronRight />
                      </IconContext.Provider>
                    </motion.div>
                  </Button>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservations;
