import React from "react";
import aboutStyles from "./about.module.scss";
import SectionHeading from "../components/sectionHeading";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Avatar from "../components/avatar";
import { Link } from "gatsby";

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
      contentfulAsset(title: { eq: "Resume" }) {
        title
        file {
          url
        }
      }
    }
  `);

  return (
    // <Box
    //   data-sal="slide-up"
    //   data-sal-duration="1500"
    //   data-sal-easing="ease"
    //   className={aboutStyles.container}
    // >
    //   <SectionHeading heading="About" />
    //   <Avatar />
    //   {documentToReactComponents(
    //     data.allContentfulAboutCopy.edges[0].node.content.json
    //   )}
    //   <Box className={aboutStyles.buttonContainer}>
    //     <Button
    //       className={aboutStyles.resume}
    //       href={data.contentfulAsset.file.url}
    //       target="_blank"
    //       variant="contained"
    //     >
    //       Résumé
    //     </Button>
    //     <Link className={aboutStyles.blog} to="/blog">
    //       <Button color="secondary" name="Blog" variant="contained">
    //         Blog
    //       </Button>
    //     </Link>
    //   </Box>
    // </Box>
    <span>ABOUT</span>
  );
};

export default AboutSection;
