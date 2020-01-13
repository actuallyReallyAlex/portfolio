import React from "react";
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
    // <Box className={worksStyles.container}>
    //   <Box className={worksStyles.innerContainer}>
    //     <SectionHeading heading="Works" />
    //     {data.allContentfulPortfolioWork.edges
    //       .filter(({ node }) => node.showcase) // TODO - Figure out how to do this with graphql query filter!
    //       .map(({ node }) => (
    //         <Work
    //           description={node.description}
    //           iconBackground={node.iconBackground}
    //           iconString={node.iconString}
    //           key={node.id}
    //           slug={node.slug}
    //           title={node.title}
    //         />
    //       ))}
    //     <Link className={worksStyles.plainLink} to="/works">
    //       <Button variant="contained">View all works</Button>
    //     </Link>
    //   </Box>
    // </Box>
    <span>WORKS</span>
  );
};

export default WorksSection;
