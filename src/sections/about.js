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
    <div
      className={aboutStyles.container}
      data-sal="slide-up"
      data-sal-duration="1500"
      data-sal-easing="ease"
    >
      <SectionHeading heading="About" />
      <Avatar />
      {documentToReactComponents(
        data.allContentfulAboutCopy.edges[0].node.content.json
      )}
      <div className={aboutStyles.buttonContainer}>
        <button
          className={aboutStyles.resume}
          href={data.contentfulAsset.file.url}
          target="_blank"
        >
          Résumé
        </button>
        <Link className={aboutStyles.blog} to="/blog">
          <button name="Blog">Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
