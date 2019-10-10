const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const caseStudyTemplate = path.resolve("./src/templates/caseStudy.js");
  const res = await graphql(`
    query {
      allContentfulPortfolioWork {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulPortfolioWork.edges.forEach(edge => {
    createPage({
      component: caseStudyTemplate,
      path: `/works/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });
};
