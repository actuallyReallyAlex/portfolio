import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import SectionHeading from "../components/sectionHeading";
import aboutStyles from "./about.module.scss";
import selfImage from "../images/self.jpg";

const AboutSection = () => {
  return (
    <Box>
      <SectionHeading heading="About" subHeading="Let me introduce myself." />
      <Box className={aboutStyles.content}>
        <Avatar alt="Alex Lee" src={selfImage} className={aboutStyles.avatar} />
        <Typography className={aboutStyles.copy}>
          I'm a passionate Web Developer. Since I was 11, I've been fascinated
          with computers and design. I started writing in Visual Basic. Now I'm
          proud to say that I've grown in my development and design skillsets,
          making me a valuable asset to any team.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
