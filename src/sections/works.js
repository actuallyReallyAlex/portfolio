import React from "react";
import { Box } from "@material-ui/core";
import SectionHeading from "../components/sectionHeading";
import worksStyles from "./works.module.scss";
import Work from "../components/work";

const works = [
  {
    title: "Reposier",
    description:
      "Tasty CLI on the outside, simple integration with GitHub's API on the inside."
  },
  {
    title: "Hermes",
    description: "A game about space and junk."
  },
  {
    title: "Contractor Tool",
    description:
      "A tool used to contract employees. Ability to export important information in a specific format. A part of the Staffing Dashboard."
  },
  {
    title: "SuperCamp Facilitator Page",
    description:
      "A staff showcase for SuperCamp. Used to show clients the staff of SuperCamp, and their credentials. Successful marketing campaign."
  },
  {
    title: "Payroll Admin",
    description:
      "A comprehensive dashboard to view payroll information. Used by companies to manage previous, current, and future reports. Ability to export data in a variety of formats."
  }
];

const WorksSection = () => {
  return (
    <Box className={worksStyles.container}>
      <Box>
        <SectionHeading heading="Works" />
        {works.map(({ description, title }, i) => (
          <Work description={description} key={i} title={title} />
        ))}
      </Box>
    </Box>
  );
};

export default WorksSection;
