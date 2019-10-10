import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulPortfolioWork(slug: { eq: $slug }) {
      title
    }
  }
`;

const CaseStudy = props => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       return <img alt={alt} src={url} />
  //     },
  //   },
  // }

  return (
    <Layout displayHeader={true}>
      {/* <Head title={props.data.contentfulBlogPost.title} /> */}
      <h1>{props.data.contentfulPortfolioWork.title}</h1>
      {/* <p>{props.data.contentfulBlogPost.publishedDate}</p> */}
      {/* {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )} */}
    </Layout>
  );
};

export default CaseStudy;
