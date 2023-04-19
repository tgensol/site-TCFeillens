import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import les3Presidents from "../../assets/img/imgHistoire/les3Presidents.jpg";
import declaration from "../../assets/img/imgHistoire/declarationJOTCF.png";
import ImgMagnifierCircle from "../../_utils/ImgMagnifierCircle";
import clubHouse from "../../assets/img/imgHistoire/clubHouse.jpg";
import courtsExterieurs from "../../assets/img/imgHistoire/courtsExterieurs.jpg";
import inaugurationCourtsExterieurs from "../../assets/img/imgHistoire/inaugurationCourtsExterieurs.jpg";
import inondationCourts from "../../assets/img/imgHistoire/inondationCourts.jpg";
import inaugurationCh from "../../assets/img/imgHistoire/inaugurationCh.jpg";
import inaugurationChBureau from "../../assets/img/imgHistoire/inaugurationChBureau.jpg";
import tournoiTCF from "../../assets/img/imgHistoire/tournoiTCF1.jpg";
import evolutionTCF from "../../assets/img/imgHistoire/evolutionTCF.png";
import { MenuClubSection } from "../../layouts/sections/MenuSection";

const NotreHistoire = () => {
  return (
    <div className="mc-fond-clubhouse">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="mc-menu-fixe">
            <MenuClubSection />
          </Col>
          <Col xs={12} md={8} className="m-auto">
            <h1 className="my-5 mc-rampart mc-title">
              Le TCF de 1981 à nos jours
            </h1>
            <div className="mc-container-club">
              <Row className="mc-container-histoire1">
                <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
                  <Col xs={12} lg={5}>
                    <ImgMagnifierCircle width={"100%"} src={declaration} />
                  </Col>
                  <Col xs={12} lg={7}>
                    <Card.Body className="mx-3">
                      <Card.Title className="display-6 fw-bold">
                        Création du club
                      </Card.Title>
                      <Card.Text>
                        Le tennis club de Feillens a été officiellement déclaré
                        en préfecture le <b>11 juin 1981</b> par Roger Catherin
                        (voir Fig.1 ci-dessous) et reçut ensuite l'agrément par
                        arrêté préfectoral <b>n° 01.32.82 le 17/12/1982</b>.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Card>
              </Row>
              <Row className="mc-container-histoire2">
                <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-5 my-3 bg-light">
                  <Card.Body>
                    <Col>
                      <Card.Title className="display-6 fw-bold">
                        Siège du club
                      </Card.Title>
                    </Col>
                    <Col className="my-4">
                      <Card.Text>
                        Le premier siège social fut{" "}
                        <b>le Café « Le Feillens »</b>, remplacé quelques années
                        plus tard par « Chez Patrick », avant qu'une salle de
                        réunion, dans la salle polyvalente route des Dîmes, ne
                        soit mise à disposition du club par la Municipalité.
                      </Card.Text>
                    </Col>
                    <Col className="mb-4">
                      <Card.Text>
                        Le <b>8 juin 2009</b>, la commune remettait aux membres
                        du bureau les clés du clubhouse en présence de Florence
                        Pocheron Présidente du comité de l'Ain qui remettait
                        pour l'occasion le chèque d'aide fédérale validée la la
                        FFT suite à la demande de subvention formulée par le
                        club dans le cadre de son projet club. Ce nouveau
                        clubhouse, situé <b>575 route des Dîmes</b> devenait de
                        fait le nouveau siège du club.
                      </Card.Text>
                    </Col>
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between">
                      <Col xs={12} lg={3} className="my-3">
                        <img width={"95%"} src={clubHouse} alt="" />
                      </Col>
                      <Col xs={12} lg={3} className="my-3">
                        <img width={"110%"} src={inaugurationCh} alt="" />
                      </Col>
                      <Col xs={12} lg={3} className="my-3">
                        <img width={"110%"} src={inaugurationChBureau} alt="" />
                      </Col>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
              <Row className="mc-container-histoire3">
                <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
                  <Col xs={12} lg={3} className="mc-les3Presidents">
                    <ImgMagnifierCircle width={"100%"} src={les3Presidents} />
                    <small className="text-muted fst-italic">
                      <b>Fig.1: </b>Michel CEDDIA, Patrick PAGNON, Roger
                      CATHERIN
                    </small>
                  </Col>
                  <Col xs={12} lg={9}>
                    <Card.Body className="mx-3">
                      <Card.Title className="display-6 fw-bold">
                        Présidence du club
                      </Card.Title>
                      <Card.Text>
                        Le premier président <b>Roger Catherin</b> du club qui
                        déposa les statuts en préfecture restera en poste
                        jusqu'en 1987 avant de passer le relais à Jean-Paul Joly
                        jusqu'en 1990. C'est ensuite Patrick Pagnon (voir Fig.1)
                        qui lui succédera jusqu'en 2000, année où il transmit
                        les rênes du club à Michel Ceddia (voir Fig.1) toujours
                        en fonction à ce jour. À noter que durant les 10 années
                        de présidence, Patrick reçut la médaille de bronze
                        fédérale pour son travail au sein du club et par la
                        suite la médaille d’argent fédérale en 2010 pour son
                        action en tant que juge-arbitre de tournois. Michel
                        quant à lui reçut la médaille de bronze fédérale en
                        2008, puis la médaille d'argent fédérale en 2018 pour
                        toutes les actions menées au sein du club.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Card>
              </Row>
              <Row className="mc-container-histoire4">
                <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-5 my-3 bg-light">
                  <Card.Body>
                    <Col>
                      <Card.Title className="display-6 fw-bold">
                        Équipements du club
                      </Card.Title>
                    </Col>
                    <div>
                      <Col xs={12} className="">
                        <Card.Text>
                          Le premier court de tennis fut construit place
                          Lacharme considéré comme l'ancien plateau sportif de
                          la commune et qui permettait également la pratique
                          d'autres sports comme le basket et le handball. En
                          1984 face à l'explosion du tennis, 2 courts extérieurs
                          en résine furent mis à disposition du club à l'actuel
                          complexe sportif des Dîmes.
                        </Card.Text>
                      </Col>
                    </div>
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                      <Col xs={12} lg={3} className="me-3">
                        <img width={"100%"} src={inondationCourts} alt="" />
                      </Col>
                      <Col xs={12} lg={6}>
                        <Card.Text>
                          Face à l'instabilité du sol, de nombreuses fissures
                          firent leur apparition sur les terrains au fil des
                          ans. La réfection des courts devenait indispensable.
                          Ce fut fait avec un début des travaux en 1999 et une
                          inauguration des nouvelles installations en décembre
                          2000. Les mois qui suivirent cette inauguration
                          plongèrent les adhérents dans la plus grande
                          inquiètude lorsque suite aux inondations de mars 2001
                          plus d'un mètre d'eau recouvrait les 2 courts tout
                          neufs.
                        </Card.Text>
                        <Card.Text>
                          En novembre 2011, ce sont 2 courts couverts, qui sont
                          mis à disposition par la Communauté de Communes du
                          Pays de Bâgé aujourd'hui Bresse et Saône. Ils furent
                          inaugurés le samedi 20/4/2013 (voir article).
                        </Card.Text>
                      </Col>
                      <Col xs={12} lg={3}>
                        <ImgMagnifierCircle
                          width={"90%"}
                          src={inaugurationCourtsExterieurs}
                        />
                        <small className="text-muted fst-italic">
                          Gauche à droite : Christian Chanut (président USF),
                          Gilbert Thomas (maire de Bâgé-la-ville), Michel Voisin
                          (député-maire de Replonges), Guy Billoudet (maire de
                          Feillens) Michel CEDDIA (président TCF)
                        </small>
                      </Col>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
              <Row className="mc-container-histoire5">
                <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-5 my-3 bg-light">
                  <Col xs={12} lg={5}>
                    <img
                      width={"100%"}
                      src={tournoiTCF}
                      alt=""
                      className="border border-5 rounded-5 border-dark mb-4"
                    />
                    <img
                      width={"100%"}
                      src={courtsExterieurs}
                      alt=""
                      className="border border-5 rounded-5 mt-4"
                    />
                  </Col>
                  <Col xs={12} lg={7}>
                    <Card.Body className="mx-3">
                      <Card.Title className="display-6 fw-bold">
                        Le club en chiffres
                      </Card.Title>
                      <img
                        width={"80%"}
                        src={evolutionTCF}
                        alt=""
                        className="border border-5 rounded-5 border-warning my-2"
                      />
                      <Card.Text>
                        Le premier tournoi homologué seniors fut lancé en 1983.
                        Il se poursuit sans interruption depuis sa création. En
                        2004 est venu s'ajouté le tournoi jeunes.
                      </Card.Text>
                      <Card.Text>
                        En 2012, le TCF devient le <b>premier</b> club du
                        canton. Depuis, fort de ses 185 licenciés il occupe à ce
                        jour la <b>20ème </b>
                        place du département.
                      </Card.Text>
                      <Card.Text>
                        Cette forte progression des effectifs se traduit par une
                        importantre école de tennis et d'un centre de formation
                        pour adultes en loisir ou compétition en forte hausse.
                        <br />
                        Pour répondre à cette demande et assurer un enseignement
                        de qualité, le club s'est attaché en 2007 les services
                        de Frédéric Gauvrit moniteur diplômé d'état ainsi que
                        d'un CQP AMT (asssitant moniteur de tennis).
                        <br />
                        Depuis cette professionnalisation de l'enseignement le
                        club engage chaque année entre 6 à 7 équipes jeunes de 9
                        à 16 ans, ainsi que 1 à 2 équipes en coupe Genéty.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Card>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotreHistoire;
