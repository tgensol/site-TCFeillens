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
import { fr } from "date-fns/locale";

const Agenda = () => {
  let counter = 0;

  const cardColor = [
    {
      bgColor: "bg-danger",
      textColor: "text-light",
    },
    {
      bgColor: "bg-warning",
      textColor: "text-dark",
    },
    {
      bgColor: "bg-success",
      textColor: "text-light",
    },
    {
      bgColor: "bg-info",
      textColor: "text-dark",
    },
  ];

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

  return (
    <>
      {listPgmAVenir.map((pgm, index) => (
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 6, offset: 0 }}
          md={6}
          lg={3}
          key={pgm.id}
          className="p-4 border-end"
        >
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Img variant="top" src={pgm.image} />
            <Card.Img
              className="position-absolute ms-2 mt-2 bg-light"
              style={{ width: "20%" }}
              variant="top"
              src={saveDate}
            />
            <Card.Body
              className={`rounded-bottom ${cardColor[index].bgColor} ${cardColor[index].textColor}`}
            >
              <Card.Title style={{ fontSize: "1.4rem" }}>
                {format(parseISO(pgm.dateDebut), "EEEE d MMMM", { locale: fr })}
                <Badge bg="secondary" className="ms-2">
                  {listNbDays[index]}
                </Badge>
              </Card.Title>
              <Card.Text
                className="my-1 fw-bold text-decoration-underline"
                style={{ fontSize: "1.2rem" }}
              >
                {pgm.animation}
              </Card.Text>
              <Card.Text className="lh-1" style={{ fontSize: "1rem" }}>
                {pgm.desc}
              </Card.Text>
              <Button
                role="button"
                variant="muted"
                href="/animations/badminton"
                className={`shadow border border-2 ${cardColor[index].textColor}`}
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
