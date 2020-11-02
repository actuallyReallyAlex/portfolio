import * as React from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.js";
import "fullpage.js/dist/fullpage.min.css";

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

  React.useEffect(() => {
    new fullpage("#fullpage", {});
  }, []);

  return (
    <div id="fullpage">
      <Hero />
      <About />
      <Works portfolioItems={portfolioItems} />
    </div>
  );
};

export default HomePage;
