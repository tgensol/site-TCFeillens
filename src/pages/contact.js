import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";

export const ContactUs = () => {
  console.log("Hello ContactUs!");
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");
  console.log("messageStatus: ", messageStatus);

  useEffect(() => {
    if (messageStatus) {
      setTimeout(() => {
        setMessageStatus(false);
      }, 3000);
    }
  }, [messageStatus]);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(
        "service_ceqpkc6",
        "template_298fot8",
        form.current,
        "TNCRTrAVA7NnfvYuU"
      )
      .then(
        (result) => {
          console.log("result: ", result);
          console.log("result.text", result.text);
          setMessageStatus(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setMessageStatus(false);
        }
      );
  };

  return (
    <div className="mc-fond-ecran">
      <Container className="px-5">
        <Row className="px-5">
          <Col>
            <div>
              <h5 className="mt-5">Bonjour,</h5>
              <p>
                Pour toute demande d'informations ou nous adresser vos
                suggestions au bureau du TCF, n'hésitez pas à compléter le
                formulaire ci-dessous.
                <br />
                Nous nous ferons un plaisir de vous répondre dans les plus brefs
                délais.
                <br />
              </p>
              <p>
                Bien Cordialement.
                <br />
                <strong>Le bureau du TCF</strong>
              </p>
            </div>
          </Col>
        </Row>

        <div className="border border-primary border-2 rounded mt-2 mb-5"></div>

        {messageStatus && (
          <div>
            <ToastContainer position={"bottom-center"}>
              <Toast>
                <Toast.Header
                  closeButton={false}
                  className="bg-success text-light"
                >
                  <IconContext.Provider value={{ size: "2em" }}>
                    <FaCheck />
                  </IconContext.Provider>
                </Toast.Header>
                <Toast.Body className="bg-success text-light text-center">
                  Votre message a bien été transmis ! <br /> Nous vous
                  répondrons dans les plus brefs délais Cordialement.
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </div>
        )}

        <Form ref={form} onSubmit={sendEmail} className="px-5">
          <InputGroup className="mb-3" required>
            <Form.Label column xs={2}>
              Nom :
            </Form.Label>
            <Col xs={9}>
              <Form.Control
                className="rounded-0 rounded-start"
                type="text"
                placeholder="Entrez votre nom"
                name="userName"
              />
            </Col>
            <Col xs={1}>
              <InputGroup.Text className="rounded-0 rounded-end justify-content-center">
                🪪
              </InputGroup.Text>
            </Col>
          </InputGroup>

          <InputGroup className="mb-3" required>
            <Form.Label column xs={2}>
              Email :
            </Form.Label>
            <Col xs={9}>
              <Form.Control
                className="rounded-0 rounded-start"
                type="email"
                placeholder="Entrez votre adresse email"
                name="userEmail"
              />
            </Col>
            <Col xs={1}>
              <InputGroup.Text className="rounded-0 rounded-end justify-content-center">
                @
              </InputGroup.Text>
            </Col>
          </InputGroup>

          <InputGroup className="mb-3" required>
            <Form.Label column xs={2}>
              Objet :
            </Form.Label>
            <Col xs={9}>
              <Form.Control
                className="rounded-0 rounded-start"
                type="text"
                placeholder="objet du message"
                name="userSubject"
              />
            </Col>
            <Col xs={1}>
              <InputGroup.Text className="rounded-0 rounded-end justify-content-center">
                💡
              </InputGroup.Text>
            </Col>
          </InputGroup>

          <Form.Group className="mb-3 px-0" controlId="formBasicEmail" required>
            <Col xs={12}>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Votre message ✉️"
                name="userMessage"
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit" value={"send"}>
            Transmettre
            <IconContext.Provider value={{ size: "1em" }}>
              <FaChevronRight />
            </IconContext.Provider>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
