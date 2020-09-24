import * as React from "react";

import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

import { PortfolioItemDocument } from "../types";

export interface HomeProps {
  portfolioItems: PortfolioItemDocument[];
}

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  const { portfolioItems } = props;
  return (
    <div>
      <Hero />
      <About />
      <Portfolio portfolioItems={portfolioItems} />
      <Footer />
    </div>
  );
};

export default Home;
