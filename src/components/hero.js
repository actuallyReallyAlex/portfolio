import React, { Fragment } from "react";
import heroStyles from "./hero.module.scss";
import PalmTriangles50 from "../images/palm-triangles-50.svg";
import PalmFull from "../images/palm.jpg";
import useMedia from "../hooks/useMedia";
import Social from "./social";

const Hero = () => {
  const size = useMedia(
    ["(min-width: 1024px)", "(min-width: 800)", "(max-width: 400px)"],
    ["large", "medium", "small"],
    "small"
  );

  return (
    <div className={heroStyles.container}>
      {size === "large" && (
        <Fragment>
          <img
            alt="Palm Tree"
            className={heroStyles.bottom}
            src={PalmTriangles50}
          />
          <img alt="Palm Tree" className={heroStyles.top} src={PalmFull} />
        </Fragment>
      )}

      <div
        data-sal="fade"
        data-sal-duration="1500"
        data-sal-easing="ease"
        className={heroStyles.typographyContainer}
      >
        <h4>HELLO, WORLD.</h4>
        <h1>I'm Alex Lee</h1>
        <h3>APPLICATION DEVELOPER</h3>
      </div>
      <Social />
    </div>
  );
};

export default Hero;
