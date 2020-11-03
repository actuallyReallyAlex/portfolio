import * as React from "react";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Works from "../sections/Works";

import { PortfolioItemDocument } from "../types";

export interface HomePageProps {
  portfolioItems: PortfolioItemDocument[];
}

const HomePage: React.FunctionComponent<HomePageProps> = (
  props: HomePageProps
) => {
  const { portfolioItems } = props;

  return (
    <div id="home">
      <Hero />
      <About />
      <Works portfolioItems={portfolioItems} />
    </div>
  );
};

export default HomePage;
