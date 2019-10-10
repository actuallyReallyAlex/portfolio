import React from "react";
import Layout from "../components/layout";
import { Box } from "@material-ui/core";
import SectionHeading from "../components/sectionHeading";
import worksStyles from "../sections/works.module.scss";
import Work from "../components/work";
import { useStaticQuery, graphql } from "gatsby";

const Works = () => {
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
    <Layout displayHeader={true}>
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
    </Layout>
  );
};

export default Works;
