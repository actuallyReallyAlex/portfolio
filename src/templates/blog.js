import React from "react";
import Layout from "../components/layout";
import Helmet from "../components/helmet";
import blogStyles from "./blog.module.scss";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import Code from "../components/code";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      excerpt
      content {
        json
      }
    }
  }
`;

const Blog = props => {
  const {
    title,
    excerpt,
    publishedDate,
    content
  } = props.data.contentfulBlogPost;

  const options = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: node => {
        const { fields } = node.data.target;
        const language = fields.language["en-US"];
        const { code } = fields.code["en-US"];

        return <Code code={code} language={language} />;
      }
    }
  };

  return (
    <Layout displayHeader={true}>
      <div className={blogStyles.container}>
        <Helmet title={title} />
        <h1>{title}</h1>
        <div className={blogStyles.medSpace}>
          <span>{excerpt}</span>
        </div>
        <div className={blogStyles.medSpace}>
          <p>{publishedDate}</p>
        </div>
        <hr />
        {documentToReactComponents(content.json, options)}
      </div>
    </Layout>
  );
};

export default Blog;
