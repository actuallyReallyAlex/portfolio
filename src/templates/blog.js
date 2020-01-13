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
    // <Layout displayHeader={true}>
    //   <Box className={blogStyles.container}>
    //     <Helmet title={title} />
    //     <Typography variant="h1">{title}</Typography>
    //     <Box className={blogStyles.medSpace} fontStyle="italic">
    //       <Typography variant="subtitle1">{excerpt}</Typography>
    //     </Box>
    //     <Box className={blogStyles.medSpace}>
    //       <Typography>{publishedDate}</Typography>
    //     </Box>
    //     <hr />
    //     {documentToReactComponents(content.json, options)}
    //   </Box>
    // </Layout>
    <span>BLOG</span>
  );
};

export default Blog;
