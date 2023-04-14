import React from "react";
import "../../assets/css/jeunes.css";

const Jeunes = () => {
  return (
    <div>
      <div className="container">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1>Hello World</h1>
            </div>
            <div className="par">
              <p>
                Cupiditate alias odio omnis minima veritatis saepe porro,
                repellendus natus vitae, sequi exercitationem ipsam, qui
                possimus sit eveniet laborum sapiente quisquam quae neque velit?
              </p>
            </div>
            <div className="btns">
              <button className="btns_more"> See more </button>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img
              src="https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
              alt="Hello"
              className="container_img"
            />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Jeunes;
