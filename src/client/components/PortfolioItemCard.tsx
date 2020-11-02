import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text } from "rebass";

import { PortfolioItemDocument } from "../types";

export interface PortfolioItemCardProps {
  portfolioItem: PortfolioItemDocument;
}

const PortfolioItemCard: React.FunctionComponent<PortfolioItemCardProps> = (
  props: PortfolioItemCardProps
) => {
  const { portfolioItem } = props;

  return (
    <li key={portfolioItem._id}>
      <Box>
        <Heading as="h3" sx={{ textTransform: "uppercase" }}>
          {portfolioItem.title}
        </Heading>
        <Text>{portfolioItem.tagline}</Text>
        <RouterLink to={`/portfolio/${portfolioItem._id}`}>
          View Item
        </RouterLink>
      </Box>
    </li>
  );
};

export default PortfolioItemCard;
