import React from "react";
import Helmet from "../components/helmet";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import BlogPost from "../components/blogPost";
import blogStyles from "./blog.module.scss";
import "../styles/prism-tomorrow.min.css";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            excerpt
            content {
              json
            }
          }
        }
      }
    }
  `);

  return (
    <Layout displayHeader={true}>
      <Helmet title="Blog" />
      <div className={blogStyles.container}>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            const { publishedDate, title, slug } = edge.node;
            return (
              <BlogPost
                key={slug}
                publishedDate={publishedDate}
                slug={slug}
                title={title}
              />
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default Blog;
