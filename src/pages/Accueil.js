import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import imgActu from '../assets/img/imgActu';
import imgAnim from '../assets/img/imgAnim';
import { IconContext } from 'react-icons';
import { FaChevronRight } from 'react-icons/fa';
import saveDate from '../assets/img/imgHeader/save-date-red.png';

const Accueil = () => {

  return (
    <div className="mc-fond-ecran">
        <Container fluid>
            <Row>
                <Col xs={3}className="p-2 border-end">
                    <h4 className='text-light bg-dark px-2'>Programme à venir</h4>
                    <Card className="rounded-0">
                        <Card.Img className="rounded-0" variant="top" src={imgAnim[0]} />
                        <Card.Img className="position-absolute ms-2 mt-2 w-25 bg-light" variant="top" src={saveDate} />
                        <Card.Body className="bg-primary text-light">
                            <Card.Title>Samedi 11 mars</Card.Title>
                            <Card.Text>
                                Tournoi de badminton de la Saint Patrick ouvert à tous.<br/>Venez nombreux ...
                            </Card.Text>
                            <Button role="button" variant="light" href="/animations/badminton" className="mt-2"><span className="pe-2">Accéder</span>
                                <IconContext.Provider value={{ size: "1em" }}>
                                    <FaChevronRight/>
                                </IconContext.Provider>
                            </Button>
                        </Card.Body>
                        </Card>
                </Col>
                <Col xs={6} className="p-2">
                    <h4 className='text-light bg-dark px-2'>Actualités</h4>
                    <Carousel fade className='text-light p-1'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 border border-2"
                                src={imgActu[0]}
                                alt="First slide"
                            />
                            <div className='border p-2 bg-dark border-top-0 border-2'>
                                <h5>Balle mouillée en couleur</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <br/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 border border-2"
                                src={imgActu[1]}
                                alt="Second slide"
                                />
                            <div className='border p-2 bg-dark border-top-0 border-2'>
                                <h5>Court Central US Open</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <br/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 border border-2"
                                src={imgActu[2]}
                                alt="Third slide"
                            />
                            <div className='border p-2 bg-dark border-top-0 border-2'>
                                <h5>Match de tennis féminin</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                <br/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 border border-2"
                                src={imgActu[3]}
                                alt="Balle mouillée noire et blanc"
                            />
                            <div className='border p-2 bg-dark border-top-0 border-2'>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                <br/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={3}className="p-4 border-start"></Col>
            </Row>
        </Container>
    </div>
  );
};

export default Accueil;