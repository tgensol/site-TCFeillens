import React from "react";
import { Carousel } from "react-bootstrap";
import imgNews from "../assets/img/imgNews";

const News = () => {
  return (
    <>
      <Carousel fade className="text-light">
        <Carousel.Item>
          <img
            className="d-block w-100 border border-2"
            src={imgNews[0]}
            alt="First slide"
          />
          <div className="border p-2 bg-secondary border-top-0 border-2">
            <h5>Balle mouillée en couleur</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <br />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-2"
            src={imgNews[1]}
            alt="Second slide"
          />
          <div className="border p-2 bg-dark border-top-0 border-2">
            <h5>Court Central US Open</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <br />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-2"
            src={imgNews[2]}
            alt="Third slide"
          />
          <div className="border p-2 bg-dark border-top-0 border-2">
            <h5>Match de tennis féminin</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <br />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-2"
            src={imgNews[3]}
            alt="Balle mouillée noire et blanc"
          />
          <div className="border p-2 bg-dark border-top-0 border-2">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <br />
          </div>
        </Carousel.Item>
      </Carousel>
      <div>News</div>
    </>
  );
};

export default News;
