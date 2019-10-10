import React from "react";
import { Box, Button } from "@material-ui/core";
import SectionHeading from "../components/sectionHeading";
import worksStyles from "./works.module.scss";
import Work from "../components/work";
import { useStaticQuery, graphql, Link } from "gatsby";

const WorksSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioWork {
        edges {
          node {
            showcase
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
      <Box className={worksStyles.innerContainer}>
        <SectionHeading heading="Works" />
        {data.allContentfulPortfolioWork.edges
          .filter(({ node }) => node.showcase) // TODO - Figure out how to do this with graphql query filter!
          .map(({ node }) => (
            <Work
              description={node.description}
              iconUrl={node.icon ? node.icon.file.url : undefined}
              key={node.id}
              slug={node.slug}
              title={node.title}
            />
          ))}
        <Button color="inherit">
          <Link className={worksStyles.plainLink} to="/works">
            View all works
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default WorksSection;
