import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Text } from "rebass";

import { PortfolioItemDocument } from "../types";

export interface PortfolioItemCardProps {
  portfolioItem: PortfolioItemDocument;
}

const PortfolioItemCard: React.FunctionComponent<PortfolioItemCardProps> = (
  props: PortfolioItemCardProps
) => {
  const { portfolioItem } = props;

  return (
    <li className="card__portfolio-item">
      <Flex
        alignItems="center"
        flexDirection="row"
        justifyContent="flex-start"
        sx={{
          border: "1px solid blue",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          fontSize="6"
          sx={{
            background: "linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)",
            border: "1px solid red",
            borderRadius: "50%",
            color: "#ffffff",
            height: "100px",
            marginRight: "50px",
            width: "100px",
          }}
        >
          <i className={portfolioItem.iconClass} />
        </Flex>
        <Box sx={{ border: "1px solid green", maxWidth: "80%" }}>
          <Heading as="h3" sx={{ textTransform: "uppercase" }}>
            {portfolioItem.title}
          </Heading>
          <Text>{portfolioItem.tagline}</Text>
          <RouterLink to={`/portfolio/${portfolioItem._id}`}>
            View Item
          </RouterLink>
        </Box>
      </Flex>
    </li>
  );
};

export default PortfolioItemCard;
