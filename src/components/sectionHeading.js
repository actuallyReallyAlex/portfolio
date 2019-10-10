import React from "react";
import { Box, Typography } from "@material-ui/core";
import sectionHeadingStyles from "./sectionHeading.module.scss";

const SectionHeading = ({ heading }) => {
  return (
    <Box className={sectionHeadingStyles.container}>
      <Typography variant="h2">{heading}</Typography>
    </Box>
  );
};

export default SectionHeading;
