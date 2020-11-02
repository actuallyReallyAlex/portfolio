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
    <div className="section fp-auto-height">
      <Flex flexDirection="column" p="50px">
        <Heading as="h2" sx={{ textTransform: "uppercase" }}>
          Works
        </Heading>
        <ul
          style={{
            listStyle: "none",
            maxHeight: "75vh",
            overflow: "scroll",
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
