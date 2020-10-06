import * as React from "react";
import { useLocation } from "react-router-dom";

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

  return (
    <div>
      <h1>Portfolio Item</h1>
      {currentPortfolioItem && (
        <>
          <h2>{currentPortfolioItem.tagline}</h2>
          <h3>Links</h3>
          {currentPortfolioItem.links.demo && (
            <a
              href={currentPortfolioItem.links.demo}
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
          )}
          {currentPortfolioItem.links.github && (
            <a
              href={currentPortfolioItem.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          )}
          {currentPortfolioItem.links.npm && (
            <a
              href={currentPortfolioItem.links.npm}
              rel="noopener noreferrer"
              target="_blank"
            >
              NPM
            </a>
          )}
          <img alt="Cover Image" src={currentPortfolioItem.coverImage} />
          <ul>
            {currentPortfolioItem.links &&
              Object.keys(currentPortfolioItem.links).map((link, i) => (
                <li key={`link-${i}`}>
                  <a
                    href={currentPortfolioItem.links[link]}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link}
                  </a>
                </li>
              ))}
          </ul>
          <div
            dangerouslySetInnerHTML={{ __html: currentPortfolioItem.content }}
          />
        </>
      )}
    </div>
  );
};

export default PortfolioItemDetails;
