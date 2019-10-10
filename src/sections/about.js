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
      allContentfulAboutCopyContentRichTextNode {
        edges {
          node {
            json
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
        data.allContentfulAboutCopyContentRichTextNode.edges[0].node.json
      )}
    </Box>
  );
};

export default AboutSection;
