import React from "react";
import { Carousel, Col } from "react-bootstrap";
import tableNews from "../_params/tablenews";

const News = () => {
  return (
    <>
      <Col
        xs={{ span: 10, offset: 1 }}
        md={{ span: 7, offset: 0 }}
        lg={5}
        className="p-4"
      >
        <Carousel fade className="text-light w-100">
          {tableNews.map((news) => (
            <Carousel.Item key={news.id}>
              <img
                className="d-block w-100 border border-2 rounded-3"
                src={news.img}
                alt="Missing slide"
              />
              <div className="border p-2 bg-secondary border-top-0 border-2 rounded-3">
                <h5>{news.title}</h5>
                <p>{news.texte}</p>
                <br />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </>
  );
};

export default News;
