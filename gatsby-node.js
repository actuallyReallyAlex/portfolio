const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const caseStudyTemplate = path.resolve("./src/templates/caseStudy.js");
  const blogTemplate = path.resolve("./src/templates/blog.js");
  const portfolioRes = await graphql(`
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

  const blogRes = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  portfolioRes.data.allContentfulPortfolioWork.edges.forEach(edge => {
    createPage({
      component: caseStudyTemplate,
      path: `/works/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });

  blogRes.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });
};
