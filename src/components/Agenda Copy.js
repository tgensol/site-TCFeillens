import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import saveDate from "../assets/img/imgHeader/save-date-red.png";
import tableAgenda from "../_params/tableAgenda";

const Agenda = () => {
  const days = tableAgenda.map((pgm) => {
    const gap = Date.now() - Date.parse(pgm.date);
    // calcul du nb de jours (floor => donne l'entier avant la virgule).
    return Math.floor(gap / (24 * 60 * 60 * 1000));
  });
  console.log("days: ", days);

  return (
    <>
      {tableAgenda.map((pgm) => (
        <Col xs={5} lg={3} key={pgm.id} className="p-4 border-end">
          <Card>
            <Card.Img variant="top" src={pgm.img} />
            <Card.Img
              className="position-absolute ms-2 mt-2 w-25 bg-light"
              variant="top"
              src={saveDate}
            />
            <Card.Body className={`rounded-bottom ${pgm.couleur}`}>
              <Card.Title>
                {pgm.dateText}
                <Badge bg="secondary" className="ms-2">
                  {days[pgm.id - 1]} j
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
                <IconContext.Provider value={{ size: "1rem" }}>
                  <FaChevronRight />
                </IconContext.Provider>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Agenda;
