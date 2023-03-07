import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


const programme = () => {

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h2 className="my-3 bg-success text-center text-light py-2">Programme des avtivités - 2023</h2>
                </Col>
            </Row>

        <Table responsive striped bordered hover>
            <thead>
                <tr className='bg-danger text-light'>
                <th>Animations</th>
                <th>Date</th>
                <th>Lieu</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Assemblée Générale</td>
                <td>15/10/2022</td>
                <td>Clubhouse de 19h à 20h</td>
                </tr>
                <tr>
                <td>Pickleball</td>
                <td>19/11/2022</td>
                <td>Courts couverts</td>
                </tr>
                <tr>
                <td>Repas adultes</td>
                <td>09/12/2022</td>
                <td>Pizzeria au feu de bois</td>
                </tr>
                <tr>
                <td>Vente de Fromage du Jura / Vin</td>
                <td>17/12/2022</td>
                <td>Maison des associations</td>
                </tr>
                <tr>
                <td>Doubles de Noël</td>
                <td>19 au 30/12/2022</td>
                <td>Courts couverts</td>
                </tr>
            </tbody>
        </Table>
        </Container>
    </div>
  )
};

export default programme;