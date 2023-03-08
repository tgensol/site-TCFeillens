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
            Liste des activités - Si vous avez de nouvelles idées contactez-nous
          </caption>
          <thead>
            <tr className="bg-danger text-light">
              <th>Animations</th>
              <th>Date</th>
              <th>Lieu</th>
            </tr>
          </thead>

          {tableAnimations.map((activite) => (
            <tbody>
              <tr>
                <td>{activite.animation}</td>
                <td>{activite.date}</td>
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
