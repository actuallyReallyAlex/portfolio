import * as React from "react";
import { Flex, Heading } from "rebass";

import PortfolioItemCard from "../components/PortfolioItemCard";
import Footer from "../components/Footer";

import { PortfolioItemDocument } from "../types";

export interface WorksProps {
  portfolioItems: PortfolioItemDocument[];
}

const Works: React.FunctionComponent<WorksProps> = (props: WorksProps) => {
  const { portfolioItems } = props;

  return (
    <div id="works">
      <Flex flexDirection="column" sx={{ margin: ["100px 10%", "100px 15%"] }}>
        <Heading as="h2" sx={{ textTransform: "uppercase" }}>
          Works
        </Heading>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
          }}
        >
          {portfolioItems.map((portfolioItem) => (
            <PortfolioItemCard
              key={portfolioItem._id}
              portfolioItem={portfolioItem}
            />
          ))}
        </ul>
        <Footer />
      </Flex>
    </div>
  );
};

export default Works;
