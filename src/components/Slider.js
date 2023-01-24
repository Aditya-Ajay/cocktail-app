import React from "react";
import { images } from "../assets/images";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Slider = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      {images.map((e) => {
        const { url } = e;
        return (
          <div
            // style={{
            //   display: "inline-block",
            //   //   marginRight: "1.7rem",
            //   marginLeft: "1.7rem",
            // }}
            className="image-slider"
          >
            <div>
              <img
                src={url}
                alt=""
                style={{ height: "200px", width: "200px" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
