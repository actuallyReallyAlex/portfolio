import React from "react";
import { Box, Avatar } from "@material-ui/core";
import aboutStyles from "./about.module.scss";
import SectionHeading from "../components/sectionHeading";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import selfImage from "./self.jpg";

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutCopy {
        edges {
          node {
            content {
              json
            }
          }
        }
      }
    }
  `);

  return (
    <Box className={aboutStyles.container}>
      <SectionHeading heading="About" />
      <Avatar className={aboutStyles.avatar} src={selfImage} />
      {documentToReactComponents(
        data.allContentfulAboutCopy.edges[0].node.content.json
      )}
    </Box>
  );
};

export default AboutSection;
