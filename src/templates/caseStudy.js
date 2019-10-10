import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box } from "@material-ui/core";
import Helmet from "../components/helmet";
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
  return (
    <Layout displayHeader={true}>
      <Box className={caseStudyStyles.container}>
        <Helmet title={props.data.contentfulPortfolioWork.title} />
        {documentToReactComponents(
          props.data.contentfulPortfolioWork.caseStudy.json
        )}
      </Box>
    </Layout>
  );
};

export default CaseStudy;
