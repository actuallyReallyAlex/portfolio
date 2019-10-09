import React from "react";
import { Box, Typography } from "@material-ui/core";
import sectionHeadingStyles from "./sectionHeading.module.scss";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <Box className={sectionHeadingStyles.container}>
      <Typography variant="h2">{heading}</Typography>
      <Typography variant="subtitle1">{subHeading}</Typography>
    </Box>
  );
};

export default SectionHeading;
