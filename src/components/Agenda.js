import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import saveDate from "../assets/img/imgHeader/save-date-red.png";
import tableAnimations from "../_params/tableAnimations";
import { format, parseISO } from "date-fns";

const Agenda = () => {
  let counter = 0;

  const cardColor = ["bg-danger", "bg-warning", "bg-success", "bg-primary"];

  const listPgmAVenir = [];
  const listNbDays = [];

  for (var i = 0; i < tableAnimations.length; i++) {
    const dateAnim = Date.parse(tableAnimations[i].dateDebut);
    const diffDays = new Date() - dateAnim;
    if (diffDays < 0) {
      if (counter < 4) {
        counter += 1;
        const gap = Date.now() - Date.parse(tableAnimations[i].dateDebut);
        listNbDays.push(Math.floor(gap / (24 * 60 * 60 * 1000)));
        listPgmAVenir.push(tableAnimations[i]);
      } else {
        break;
      }
    }
  }
  console.log("listPgmAVenir: ", listPgmAVenir);
  return (
    <>
      {listPgmAVenir.map((pgm, index) => (
        <Col xs={5} lg={3} key={pgm.id} className="p-4 border-end">
          <Card>
            <Card.Img variant="top" src={pgm.image} />
            <Card.Img
              className="position-absolute ms-2 mt-2 w-25 bg-light"
              variant="top"
              src={saveDate}
            />
            <Card.Body
              className={`rounded-bottom text-light ${cardColor[index]}`}
            >
              <Card.Title>
                {format(parseISO(pgm.dateDebut), "EEEE d MMMM")}
                <Badge bg="secondary" className="ms-2">
                  {listNbDays[index]}
                </Badge>
              </Card.Title>
              <Card.Text className="my-1 fw-bold text-decoration-underline">
                {pgm.animation}
              </Card.Text>
              <Card.Text className="lh-1">{pgm.desc}</Card.Text>
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
