import React from "react";
import { Box } from "@material-ui/core";
import SectionHeading from "../components/sectionHeading";
import worksStyles from "./works.module.scss";
import Work from "../components/work";
import { useStaticQuery, graphql } from "gatsby";

const WorksSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioWork {
        edges {
          node {
            id
            title
            description
            slug
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Box className={worksStyles.container}>
      <Box>
        <SectionHeading heading="Works" />
        {data.allContentfulPortfolioWork.edges.map(({ node }) => (
          <Work
            description={node.description}
            iconUrl={node.icon ? node.icon.file.url : undefined}
            key={node.id}
            slug={node.slug}
            title={node.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WorksSection;
