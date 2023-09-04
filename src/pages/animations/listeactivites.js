import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import tableAnimations from "../../_params/tableAnimations";

const programme = () => {
  return (
    <div className="mc-fond-ecran">
      <Container>
        <Row>
          <Col>
            <h2 className="my-3 bg-success text-center text-light py-2">
              Programme des activités - 2023
            </h2>
          </Col>
        </Row>

        <Table responsive bordered hover>
          <caption>
            <span className="text-primary pt-4">
              Liste des activités - Si vous avez de nouvelles idées,
            </span>
            <a href="/contact" className="text-decoration-none">
              <span className="mc-nous-contacter ps-1 fw-bold fs-5 fst-italic">
                contactez-nous
              </span>
            </a>
          </caption>
          <thead>
            <tr className="bg-danger text-light">
              <th>Animations</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Lieu</th>
            </tr>
          </thead>

          {tableAnimations.map((activite) => (
            <tbody key={activite.id}>
              <tr>
                <td>{activite.animation}</td>
                <td>{activite.dateDebut}</td>
                <td>{activite.dateFin}</td>
                <td>{activite.lieu}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default programme;
