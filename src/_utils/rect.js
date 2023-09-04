import React, { useState } from "react";

const ImageMagnifier = ({
  src = "",
  width = "",
  height = "",
  magnifierHeight = 200,
  magnifieWidth = 400,
  zoomLevel = 2,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
        textAlign: "center",
      }}
    >
      <img
        src={src}
        style={{
          height: height,
          width: width,
          borderRadius: "1.5rem",
          cursor: "zoom-in",
          border: "5px solid lightgray",
          boxShadow: "inner 0 0 20px gray",
        }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;

          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);

          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;

          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;

          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent magnifier blocks the mousemove event off img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,

          opacity: "1", // reduce opacity so you can verify position
          border: "5px solid lightgray",
          borderRadius: "25px",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          zIndex: "1000",
        }}
      ></div>
    </div>
  );
};

export default ImageMagnifier;
