import * as React from "react";

import HomePage from "../pages/HomePage";

import { PortfolioItemDocument } from "../types";

export interface HomeProps {
  portfolioItems: PortfolioItemDocument[];
}

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  const { portfolioItems } = props;
  return <HomePage portfolioItems={portfolioItems} />;
};

export default Home;
