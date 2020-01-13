import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Helmet from "../components/helmet";
import caseStudyStyles from "./caseStudy.module.scss";

export const query = graphql`
  query($slug: String!) {
    contentfulPortfolioWork(slug: { eq: $slug }) {
      caseStudy {
        json
      }
      title
      description
      contentLink
      sourceLink
      screenshot {
        title
        file {
          url
        }
      }
    }
  }
`;

const CaseStudy = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const { title } = node.data.target.fields;
        const { contentType, url } = node.data.target.fields.file["en-US"];
        if (contentType.match(/(image)/)) return <img alt={title} src={url} />;
      }
    }
  };

  const {
    contentLink,
    description,
    screenshot,
    sourceLink,
    title
  } = props.data.contentfulPortfolioWork;
  return (
    <Layout displayHeader={true}>
      <div className={caseStudyStyles.container}>
        <Helmet title={title} />
        <h1 variant="h1">{title}</h1>
        <div className={caseStudyStyles.medSpace} fontStyle="italic">
          <p variant="subtitle1">{description}</p>
        </div>
        <div
          className={`${caseStudyStyles.buttonContainer} ${caseStudyStyles.medSpace}`}
        >
          {contentLink && (
            <button
              color="primary"
              onClick={() => window.open(contentLink, "_blank")}
              variant="contained"
            >
              See it in action
            </button>
          )}
          {sourceLink && (
            <button
              color="secondary"
              onClick={() => window.open(sourceLink, "_blank")}
              variant="contained"
            >
              View source
            </button>
          )}
        </div>
        <img alt={screenshot.title} src={screenshot.file.url} />
        <hr />
        {documentToReactComponents(
          props.data.contentfulPortfolioWork.caseStudy.json,
          options
        )}
      </div>
    </Layout>
  );
};

export default CaseStudy;
