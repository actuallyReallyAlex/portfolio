import React from "react";
import { Avatar, Box, Typography, Link } from "@material-ui/core";
import SectionHeading from "../components/sectionHeading";
import aboutStyles from "./about.module.scss";
import selfImage from "../images/self.jpg";
import CustomChip from "../components/customChip";

const skills = [
  "JavaScript",
  "Node.js",
  "React.js",
  "React Native",
  "Java",
  "C#",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JQuery",
  "JSX",
  "Markdown"
];
const tools = [
  "MS Visual Studio",
  "MS Visual Studio Code",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premier"
];

const AboutSection = () => {
  return (
    <Box>
      <SectionHeading heading="About" subHeading="Let me introduce myself." />

      <Box className={`${aboutStyles.content} ${aboutStyles.center}`}>
        <Avatar alt="Alex Lee" src={selfImage} className={aboutStyles.avatar} />
        <Typography className={aboutStyles.mainCopy}>
          I'm a passionate Web Developer. Since I was 11, I've been fascinated
          with computers and design. I started writing in Visual Basic. Now I'm
          proud to say that I've grown in my development and design skillsets,
          making me a valuable asset to any team.
        </Typography>
      </Box>

      <Box className={`${aboutStyles.content} ${aboutStyles.between}`}>
        <Box className={aboutStyles.profileLeftContainer}>
          <Typography variant="h4">Profile</Typography>
          <Typography className={aboutStyles.profileCopy}>
            I love to brainstorm in a team environment; however, I'm also
            incredibly self-motivated. In every project, I'm determined to get
            the job done without compromising on quality.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">NAME</Typography>
          <Typography>Alex Lee</Typography>
          <Typography variant="h5">TITLE</Typography>
          <Typography>Application Developer</Typography>
          <Typography variant="h5">EMAIL</Typography>
          <Link
            className={aboutStyles.link}
            href="mailto:alex@alexlee.dev"
            rel="noopener"
            target="_blank"
          >
            alex@alexlee.dev
          </Link>
        </Box>
      </Box>

      <Box className={aboutStyles.content}>
        <Box>
          <Typography variant="h4">Skills</Typography>
          <Typography className={aboutStyles.profileCopy}>
            As a self-taught developer, I've gained a variety of skillsets that
            I can apply to my projects. Currently, I'm focused on React.js. With
            an industry that's ever-evolving, no one is a master at every
            language. I aim to let my excitement for learning new things guide
            me in my path toward growth.
          </Typography>
        </Box>
      </Box>

      <Box className={`${aboutStyles.content} ${aboutStyles.start}`}>
        <Box className={aboutStyles.profileLeftContainer}>
          <Typography variant="h5">Languages / Technology</Typography>
          <Box>
            {skills.map(skill => (
              <CustomChip key={skill} label={skill} />
            ))}
          </Box>
        </Box>
        <Box className={aboutStyles.profileLeftContainer}>
          <Typography variant="h5">Tools / Software</Typography>
          <Box>
            {tools.map(tool => (
              <CustomChip key={tool} label={tool} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
