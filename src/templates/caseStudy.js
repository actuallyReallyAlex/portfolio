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
    // <Layout displayHeader={true}>
    //   <Box className={caseStudyStyles.container}>
    //     <Helmet title={title} />
    //     <Typography variant="h1">{title}</Typography>
    //     <Box className={caseStudyStyles.medSpace} fontStyle="italic">
    //       <Typography variant="subtitle1">{description}</Typography>
    //     </Box>
    //     <Box
    //       className={`${caseStudyStyles.buttonContainer} ${caseStudyStyles.medSpace}`}
    //     >
    //       {contentLink && (
    //         <Button
    //           color="primary"
    //           onClick={() => window.open(contentLink, "_blank")}
    //           variant="contained"
    //         >
    //           See it in action
    //         </Button>
    //       )}
    //       {sourceLink && (
    //         <Button
    //           color="secondary"
    //           onClick={() => window.open(sourceLink, "_blank")}
    //           variant="contained"
    //         >
    //           View source
    //         </Button>
    //       )}
    //     </Box>
    //     <img alt={screenshot.title} src={screenshot.file.url} />
    //     <hr />
    //     {documentToReactComponents(
    //       props.data.contentfulPortfolioWork.caseStudy.json,
    //       options
    //     )}
    //   </Box>
    // </Layout>
    <span>CASESTUDY</span>
  );
};

export default CaseStudy;
