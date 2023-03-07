import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import imgActu from '../assets/img/imgActu';

const Accueil = () => {

  return (
    <div >
        <Container fluid>
            <Row>
                <Col xs={2}className="p-4 bg-info border-end"></Col>
                <Col xs={8} className="p-2 bg-info">
                    <h4>Actualités</h4>
                    <Carousel fade className='bg-transparent text-light p-1'>
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
                <Col xs={2}className="p-4 bg-info border-start"></Col>
            </Row>
        </Container>
    </div>
  );
};

export default Accueil;