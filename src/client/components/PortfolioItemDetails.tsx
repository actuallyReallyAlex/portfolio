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
      <h2>{currentPortfolioItem.tagline}</h2>
      <p>{currentPortfolioItem.content}</p>
    </div>
  );
};

export default PortfolioItemDetails;
