import React from "react";
import Project from "./Project";

const projects = [
  {
    description: "A tool to help you find your next job.",
    name: "GitHub Jobs",
    url: "https://github.com/alexlee-dev/gh-jobs",
  },
  {
    description: "A bootstrapper for creating a MERN application.",
    name: "create-mern-application",
    url: "https://github.com/alexlee-dev/create-mern-application",
  },
  {
    description: "A bootstrapper for creating a cli application with Node.",
    name: "create-cli-application",
    url: "https://github.com/alexlee-dev/create-cli-application",
  },
  {
    description:
      "A friendly pelican here to help you organize your next job hunt.",
    name: "applican",
    url: "https://github.com/alexlee-dev/applican",
  },
  {
    description:
      "A CLI tool to get surf conditions at your favorite breaks, using Surfline's API.",
    name: "kahunafy",
    url: "https://github.com/alexlee-dev/kahunafy",
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <ul id="project-list">
        {projects.map(({ description, name, url }, i) => (
          <Project
            description={description}
            key={`project-${i}`}
            name={name}
            url={url}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
