import * as React from "react";

import Scene from "../Scene";

import { PortfolioItemDocument } from "../types";

export interface HomePageProps {
  portfolioItems: PortfolioItemDocument[];
}

const HomePage: React.FunctionComponent<HomePageProps> = (
  props: HomePageProps
) => {
  const { portfolioItems } = props;

  return (
    <div>
      <Scene />
    </div>
  );
};

export default HomePage;
