import React from "react";
import PropTypes, { InferProps } from "prop-types";

// TODO - Figure out TS in React
export const Project: any = ({
  description,
  name,
  url,
}: InferProps<typeof Project.propTypes>) => {
  return (
    <li className="project">
      <a href={url} rel="noopener noreferrer" target="_blank">
        <h2 className="project-heading link--iocaste">{name}</h2>
        <svg
          className="project-underline project-underline--slide"
          width="300%"
          height="100%"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
        </svg>
      </a>
      <span className="project-description">{description}</span>
    </li>
  );
};

Project.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Project;
