import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box } from "@material-ui/core";
// import Head from "../components/head"
import caseStudyStyles from "./caseStudy.module.scss";

export const query = graphql`
  query($slug: String!) {
    contentfulPortfolioWork(slug: { eq: $slug }) {
      caseStudy {
        json
      }
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

  console.log(props.data.contentfulPortfolioWork);

  return (
    <Layout displayHeader={true}>
      <Box className={caseStudyStyles.container}>
        {/* <Head title={props.data.contentfulBlogPost.title} /> */}
        {documentToReactComponents(
          props.data.contentfulPortfolioWork.caseStudy.json
        )}
      </Box>
    </Layout>
  );
};

export default CaseStudy;
