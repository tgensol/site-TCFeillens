import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import imgFacebook from "../../assets/img/imgheader/Facebook_logo.png";
import imgInstagram from "../../assets/img/imgheader/Instagram_logo.png";
import imgTwitter from "../../assets/img/imgheader/Twitter_logo.png";

const Header = () => {
  return (
    <div className="mc-banner">
      <Container fluid>
        <Row>
          <Col xs={2}>
            <img
              className="img-fluid py-2"
              src="logoTCF1.png"
              alt="Logo TCF ?"
              width={100}
            ></img>
          </Col>
          <Col
            xs={10}
            className="text-light d-flex justify-content-center align-items-center"
          >
            <div className="col-11 fw-bolder mc-rampart">
              TENNIS CLUB DE FEILLENS
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="border border-top-0 border-start-0 border-end-0 border-bottom-1">
          <Col className="d-flex justify-content-end">
            <OverlayTrigger
              placement={"top"}
              delay={{ show: 100, hide: 200 }}
              overlay={<Tooltip id={"tooltip-TCF"}>TCF sur facebook</Tooltip>}
            >
              <a
                className="nav-link px-2"
                href="https://www.facebook.com/TCFeillens/?locale=fr_FR"
                target="_blank"
                rel="noreferrer noopenner"
              >
                <img
                  className="img-fluid pb-2"
                  src={imgFacebook}
                  alt="Logo Facebook ?"
                  width={20}
                  height={20}
                ></img>
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement={"top"}
              delay={{ show: 100, hide: 200 }}
              overlay={<Tooltip id={"tooltip-TCF"}>TCF sur Instagram</Tooltip>}
            >
              <a
                className="nav-link px-2"
                href="https://www.instagram.com/p/ByAiUIQijYq/"
                target="_blank"
                rel="noreferrer noopenner"
              >
                <img
                  className="img-fluid pb-2"
                  src={imgInstagram}
                  alt="Logo Instagram ?"
                  width={20}
                  height={20}
                ></img>
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement={"top"}
              delay={{ show: 100, hide: 200 }}
              overlay={<Tooltip id={"tooltip-TCF"}>TCF sur Twitter</Tooltip>}
            >
              <a
                className="nav-link px-2"
                href="https://twitter.com/search?q=tennis%20club%20de%20feillens"
                target="_blank"
                rel="noreferrer noopenner"
              >
                <img
                  className="img-header img-fluid pb-2"
                  src={imgTwitter}
                  alt="Logo Instagram ?"
                  width={40}
                  height={40}
                ></img>
              </a>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
