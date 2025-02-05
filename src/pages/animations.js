import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import imgAnim from "../assets/img/imganim";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    // scale: [1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1],
    scale: 1.3,
    textShadow: "0 0 8px rgb(255, 255, 255)",
    transition: { duration: 0.5, repeat: Infinity },
  },
};

const Animations = () => {
  return (
    <div className="mc-fond-ecran">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Card className="p-2 my-4 text-light">
              <Card.Img src={imgAnim[4]} width={100} height={250} alt={""} />
              <Card.ImgOverlay>
                <Card.Title>Programme 2023</Card.Title>
                <Card.Text>
                  Découvrez toutes les animations prévues cette saison ...
                </Card.Text>
                <Button
                  role="button"
                  variant="warning"
                  href="/programme"
                  className="mt-2 border border-2 border-muted"
                >
                  <motion.div variants={buttonVariants} whileHover="hover">
                    <span className="pe-2">Voir</span>
                    <IconContext.Provider value={{ size: "1em" }}>
                      <FaChevronRight />
                    </IconContext.Provider>
                  </motion.div>
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="p-2 my-4 text-light">
              <Card.Img src={imgAnim[1]} width={100} height={250} alt={""} />
              <Card.ImgOverlay>
                <Card.Title>Vente de Fromages et de Vins</Card.Title>
                <Card.Text>
                  Soutenez le club en participant à la vente de fromages et de
                  vins spécialement pour les fêtes ...
                </Card.Text>
                <Button
                  variant="success"
                  href="/vente"
                  className="mt-2 border border-2 border-muted"
                >
                  <motion.div variants={buttonVariants} whileHover="hover">
                    <span className="pe-2">Voir</span>
                    <IconContext.Provider value={{ size: "1em" }}>
                      <FaChevronRight />
                    </IconContext.Provider>
                  </motion.div>
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="p-2 my-4">
              <Card.Img src={imgAnim[6]} width={100} height={250} alt={""} />
              <Card.ImgOverlay>
                <Card.Title>Fête de l'école de tennis</Card.Title>
                <Card.Text className="bg-light">
                  En juin participez à la fête des enfants inscrits à l'école de
                  tennis ...
                </Card.Text>
                <Button
                  variant="info"
                  href="/feteecole"
                  className="mt-2 border border-2 border-muted"
                >
                  <span className="pe-2">Voir</span>
                  <IconContext.Provider value={{ size: "1em" }}>
                    <FaChevronRight />
                  </IconContext.Provider>
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="p-2 my-4">
              <Card.Img src={imgAnim[7]} width={100} height={250} alt={""} />
              <Card.ImgOverlay>
                <Card.Title>Soirée Club</Card.Title>
                <Card.Text className="bg-light">
                  Soirée d'été entre amis ...
                </Card.Text>
                <Button
                  variant="secondary"
                  href="/soireeclub"
                  className="mt-2 border border-2 border-muted"
                >
                  <motion.div variants={buttonVariants} whileHover="hover">
                    <span className="pe-2">Voir</span>
                    <IconContext.Provider value={{ size: "1em" }}>
                      <FaChevronRight />
                    </IconContext.Provider>
                  </motion.div>
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="p-2 my-4 text-light">
              <Card.Img src={imgAnim[0]} width={100} height={250} alt={""} />
              <Card.ImgOverlay>
                <Card.Title>Badminton</Card.Title>
                <Card.Text>Tournois de la Saint Patrick</Card.Text>
                <Button
                  role="button"
                  variant="primary"
                  href="/badminton"
                  className="mt-2 border border-2 border-muted"
                >
                  <span className="pe-2">Voir</span>
                  <IconContext.Provider value={{ size: "1em" }}>
                    <FaChevronRight />
                  </IconContext.Provider>
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card className="p-2 my-4 text-light">
              <Card.Img src={imgAnim[5]} width={100} height={250} alt={""} />
              <Card.ImgOverlay>
                <Card.Title>Pickleball</Card.Title>
                <Card.Text>Tournois de novembre et de juillet.</Card.Text>
                <Button
                  variant="danger"
                  href="/pickleball"
                  className="mt-2 border border-2 border-muted"
                >
                  <motion.div variants={buttonVariants} whileHover="hover">
                    <span className="pe-2">Voir</span>
                    <IconContext.Provider value={{ size: "1em" }}>
                      <FaChevronRight />
                    </IconContext.Provider>
                  </motion.div>
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Animations;
