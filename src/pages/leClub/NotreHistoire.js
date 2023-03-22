import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import les3Presidents from "../../assets/img/imgHistoire/les3Presidents.jpg";
import declaration from "../../assets/img/imgHistoire/declarationJOTCF.png";
import ImageMagnifier from "../../_utils/ImageMagnifier";
import clubHouse from "../../assets/img/imgHistoire/clubHouse.jpg";
import courtsExterieurs from "../../assets/img/imgHistoire/courtsExterieurs.jpg";
import inaugurationCourtsExterieurs from "../../assets/img/imgHistoire/inaugurationCourtsExterieurs.jpg";
import inondationCourts from "../../assets/img/imgHistoire/inondationCourts.jpg";
import inaugurationCh from "../../assets/img/imgHistoire/inaugurationCh.jpg";
import inaugurationChBureau from "../../assets/img/imgHistoire/inaugurationChBureau.jpg";

const NotreHistoire = () => {
  return (
    <div className="mc-fond-ecran1">
      <Container>
        <Row className="pt-5">
          <h1 className="mc-rampart mc-1981 mb-5">
            Le TCF de 1981 à nos jours
          </h1>
        </Row>
        <Row>
          <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
            <Col xs={12} lg={5}>
              <ImageMagnifier width={"100%"} src={declaration} />
            </Col>
            <Col xs={12} lg={7}>
              <Card.Body className="mx-3">
                <Card.Title className="display-6 fw-bold">
                  Création du club
                </Card.Title>
                <Card.Text>
                  <p>
                    Le tennis club de Feillens a été officiellement déclaré en
                    préfecture le <b>11 juin 1981</b> par Roger Catherin (voir
                    Fig.1 ci-dessous) et reçut ensuite l'agrément par arrêté
                    préfectoral <b>n° 01.32.82 le 17/12/1982</b>.
                  </p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
        <Row>
          <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
            <Col xs={12} lg={9}>
              <Card.Body>
                <Card.Title className="display-6 fw-bold">
                  Siège du club
                </Card.Title>
                <Card.Text>
                  <p>
                    Le premier siège social fut <b>le Café « Le Feillens »</b>,
                    remplacé quelques années plus tard par « Chez Patrick »,
                    avant qu'une salle de réunion, dans la salle polyvalente
                    route des Dîmes, ne soit mise à disposition du club par la
                    Municipalité.
                  </p>
                  <p className="d-flex flex-lg-row flex-column align-items-center">
                    <Col xs={12} lg={3} className="pb-3">
                      <img width={"100%"} src={inaugurationCh} alt="" />
                    </Col>
                    <Col xs={12} lg={6} className="px-3">
                      <span className="d-block">
                        Le <b>8 juin 2009</b>, la commune remettait aux membres
                        du bureau les clés du clubhouse en présence de Florence
                        Pocheron Présidente du comité de l'Ain qui remettait
                        pour l'occasion le chèque d'aide fédérale validée la la
                        FFT suite à la demande de subvention formulée par le
                        club dans le cadre de son projet club. Ce nouveau
                        clubhouse, situé <b>575 route des Dîmes</b> devenait de
                        fait le nouveau siège du club.
                      </span>
                    </Col>
                    <Col xs={12} lg={3} className="pt-3">
                      <img width={"100%"} src={inaugurationChBureau} alt="" />
                    </Col>
                  </p>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col xs={12} lg={3} className="ps-3">
              <img
                width={"100%"}
                src={clubHouse}
                alt=""
                className="border border-5 rounded-4"
              />
            </Col>
          </Card>
        </Row>
        <Row>
          <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
            <Col xs={12} lg={3} className="mc-les3Presidents">
              <ImageMagnifier width={"100%"} src={les3Presidents} />
              <small className="text-muted fst-italic">
                <b>Fig.1: </b>Michel CEDDIA, Patrick PAGNON, Roger CATHERIN
              </small>
            </Col>
            <Col xs={12} lg={9}>
              <Card.Body className="mx-3">
                <Card.Title className="display-6 fw-bold">
                  Présidence du club
                </Card.Title>
                <Card.Text>
                  <p>
                    Le premier président <b>Roger Catherin</b> du club qui
                    déposa les statuts en préfecture restera en poste jusqu'en
                    1987 avant de passer le relais à Jean-Paul Joly jusqu'en
                    1990. C'est ensuite Patrick Pagnon (voir Fig.1) qui lui
                    succédera jusqu'en 2000, année où il transmit les rênes du
                    club à Michel Ceddia (voir Fig.1) toujours en fonction à ce
                    jour. À noter que durant les 10 années de présidence,
                    Patrick reçut la médaille de bronze fédérale pour son
                    travail au sein du club et par la suite la médaille d’argent
                    fédérale en 2010 pour son action en tant que juge-arbitre de
                    tournois. Michel quant à lui reçut la médaille de bronze
                    fédérale en 2008, puis la médaille d'argent fédérale en 2018
                    pour toutes les actions menées au sein du club.
                  </p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
        <Row>
          <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
            <Col xs={12} lg={7}>
              <Card.Body className="mx-3">
                <Card.Title className="display-6 fw-bold">
                  Équipements du club
                </Card.Title>
                <Card.Text>
                  <p>
                    Le premier court de tennis fut construit place Lacharme
                    considéré comme l'ancien plateau sportif de la commune et
                    qui permettait également la pratique d'autres sports comme
                    le basket et le handball. En 1984 face à l'explosion du
                    tennis, 2 courts extérieurs en résine furennt mis à
                    disposition du club à l'actuel complexe sportif des Dîmes.
                  </p>
                  <p className="d-flex flex-column flex-lg-row align-items-center">
                    <Col xs={12} lg={4} className="me-3">
                      <img width={"100%"} src={inondationCourts} alt="" />
                    </Col>
                    <Col xs={12} lg={8}>
                      <span className="d-block">
                        Face à l'instabilité du sol, de nombreuses fissures
                        firent leur apparition sur les terrains au fil des ans.
                        La réfection des courts devenait indispensable. Ce fut
                        fait avec un début des travaux en 1999 et une
                        inauguration des nouvelles installations en décembre
                        2000. Les mois qui suivirent cette inauguration
                        plongèrent les adhérents dans la plus grande inquiètude
                        lorsque suite aux inondations de mars 2001 plus d'un
                        mètre d'eau recouvrait les 2 courts tout neufs.
                      </span>
                    </Col>
                  </p>
                  <p>
                    En novembre 2011, ce sont 2 courts couverts, qui sont mis à
                    disposition par la Communauté de Communes du Pays de Bâgé
                    aujourd'hui Bresse et Saône. Ils furent inaugurés le samedi
                    20/4/2013 (voir article).
                  </p>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col xs={12} lg={5}>
              <ImageMagnifier
                width={"90%"}
                src={inaugurationCourtsExterieurs}
              />
              <small className="text-muted fst-italic">
                Gauche à droite : Christian Chanut (président USF), Gilbert
                Thomas (maire de Bâgé-la-ville), Michel Voisin (député-maire de
                Replonges), Guy Billoudet (maire de Feillens) Michel CEDDIA
                (président TCF)
              </small>
            </Col>
          </Card>
        </Row>
        <Row>
          <Card className="flex-lg-row align-items-center border border-5 rounded-5 p-2 my-3 bg-light">
            <Col xs={12} lg={5}>
              <img
                width={"100%"}
                src={courtsExterieurs}
                alt=""
                className="border border-5 rounded-5"
              />
            </Col>
            <Col xs={12} lg={7}>
              <Card.Body className="mx-3">
                <Card.Title className="display-6 fw-bold">
                  Fonctionnement du club
                </Card.Title>
                <Card.Text>
                  <p>
                    Le premier tournoi homologué seniors fut lancé en 1983. Il
                    se poursuit sans interruption depuis sa création, auquel
                    s'est ajouté le tournoi jeunes et 35+ en 2004.
                  </p>
                  <p>
                    En 2012, le TCF est devenu Le premier club du canton et même
                    des cantons si l’on associe ceux de Pont de Veyle et Pont de
                    Vaux, et le 28ème club au niveau du département qui en
                    compte 107. En nombre d’adhérents les archives donnent 137
                    adhérents en 89/90 (années faste du tennis) et 185
                    aujourd’hui.
                    <br />
                    Qui dit adhérents, école de tennis, cours adultes,
                    compétition, dit aussi éducateurs, moniteurs. Depuis nos
                    premiers moniteurs bénévoles, le club s'est structuré et
                    professionnalisé avec l’embauche en 2007 de notre premier
                    moniteur salarié, Frédéric Gauvrit, qui fut épaulé au fil
                    des années par Laurence Ceddia en qualité d’assistante
                    monitrice de tennis. Depuis qu’ils sont aux commandes de la
                    formation, le club engage chaque année entre 6 à 7 équipes
                    jeunes de 9 à 16 ans, ainsi que 2 équipes dans la coupe
                    Genéty. En 2012, nos jeunes, notamment filles, connurent
                    leur premier succès avec le titre de championnes de l'AIN,
                    avec les victoires d’Eugénie Renaud et Chloé Ethève en
                    catégorie 13/14 ans 3ème division. À noter que le premier
                    titre de champion de l’AIN chez les adultes Hommes fut
                    remporté, en 2004 par les 45+ Hommes dont Patrick
                    (ex-président) était le capitaine.
                  </p>
                  <p>
                    Chez les seniors, en 2012, pour la première fois, le club
                    engage 7 équipes (5 hommes et 2 dames) ce qui ne représente
                    pas moins de 35 à 40 joueuses et joueurs, et pour la
                    première fois ces équipes étaient constituées uniquement de
                    classés.
                  </p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default NotreHistoire;
