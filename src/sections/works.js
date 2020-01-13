import React from "react";
import worksStyles from "./works.module.scss";
import SectionHeading from "../components/sectionHeading";
import Work from "../components/work";
import { useStaticQuery, graphql, Link } from "gatsby";

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
            iconString
            iconBackground
            showcase
          }
        }
      }
    }
  `);

  return (
    <div className={worksStyles.container}>
      <div className={worksStyles.innerContainer}>
        <SectionHeading heading="Works" />
        {data.allContentfulPortfolioWork.edges
          .filter(({ node }) => node.showcase) // TODO - Figure out how to do this with graphql query filter!
          .map(({ node }) => (
            <Work
              description={node.description}
              iconBackground={node.iconBackground}
              iconString={node.iconString}
              key={node.id}
              slug={node.slug}
              title={node.title}
            />
          ))}
        <Link className={worksStyles.plainLink} to="/works">
          <button>View all works</button>
        </Link>
      </div>
    </div>
  );
};

export default WorksSection;
