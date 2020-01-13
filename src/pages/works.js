import React from "react";
import Layout from "../components/layout";
import SectionHeading from "../components/sectionHeading";
import worksStyles from "../sections/works.module.scss";
import Work from "../components/work";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "../components/helmet";
import "../styles/prism-tomorrow.min.css";

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
            iconString
            iconBackground
          }
        }
      }
    }
  `);

  return (
    <Layout displayHeader={true}>
      <Helmet title="Works" />
      <div className={worksStyles.container}>
        <div>
          <SectionHeading heading="Works" />
          {data.allContentfulPortfolioWork.edges.map(({ node }) => (
            <Work
              description={node.description}
              iconBackground={node.iconBackground}
              iconString={node.iconString}
              key={node.id}
              slug={node.slug}
              title={node.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Works;
