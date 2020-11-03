import * as React from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex, Heading, Image, Link } from "rebass";
import BackButton from "../components/BackButton";

import { PortfolioItemDocument } from "../types";

export interface PortfolioItemDetailsProps {
  portfolioItems: PortfolioItemDocument[];
}

const PortfolioItemDetails: React.FunctionComponent<PortfolioItemDetailsProps> = (
  props: PortfolioItemDetailsProps
) => {
  const location = useLocation();
  const portfolioItemId = location.pathname.split("/portfolio/")[1];

  const { portfolioItems } = props;

  const currentPortfolioItem = portfolioItems.find(
    (item) => item._id === portfolioItemId
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (currentPortfolioItem) {
    return (
      <Flex flexDirection="column" sx={{ margin: "100px 15%" }}>
        <BackButton />
        <Heading as="h1" fontSize="7" sx={{ textTransform: "uppercase" }}>
          {currentPortfolioItem.title}
        </Heading>
        <>
          <Heading as="h2" fontSize="3" fontWeight="normal">
            {currentPortfolioItem.tagline}
          </Heading>
          <Box
            fontSize="5"
            sx={{
              margin: "0 auto",
              marginBottom: "25px",
              marginTop: "25px",
              position: "relative",
              width: "fit-content",
            }}
          >
            <ul className="links">
              {currentPortfolioItem.links.demo && (
                <li>
                  <Link
                    aria-label="Demo"
                    href={currentPortfolioItem.links.demo}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="far fa-magic" />
                  </Link>
                </li>
              )}

              {currentPortfolioItem.links.github && (
                <li>
                  <Link
                    aria-label="GitHub"
                    href={currentPortfolioItem.links.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Link>
                </li>
              )}

              {currentPortfolioItem.links.npm && (
                <li>
                  <Link
                    aria-label="NPM"
                    href={currentPortfolioItem.links.npm}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-npm" />
                  </Link>
                </li>
              )}
            </ul>
          </Box>
          <Image alt="Cover Image" src={currentPortfolioItem.coverImage} />
          <div
            dangerouslySetInnerHTML={{ __html: currentPortfolioItem.content }}
          />
        </>
      </Flex>
    );
  } else {
    return null;
  }
};

export default PortfolioItemDetails;
