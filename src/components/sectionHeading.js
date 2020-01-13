import React from "react";
import sectionHeadingStyles from "./sectionHeading.module.scss";

const SectionHeading = ({ heading }) => (
  <div className={sectionHeadingStyles.container}>
    <h2>{heading}</h2>
  </div>
);

export default SectionHeading;
