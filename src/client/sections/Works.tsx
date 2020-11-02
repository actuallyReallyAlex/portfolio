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
    <div className="section">
      <Flex flexDirection="column" p="50px">
        <Heading as="h2" sx={{ textTransform: "uppercase" }}>
          Works
        </Heading>
        <ul>
          {portfolioItems.map((portfolioItem) => (
            <PortfolioItemCard portfolioItem={portfolioItem} />
          ))}
        </ul>
        <Footer />
      </Flex>
    </div>
  );
};

export default Works;
