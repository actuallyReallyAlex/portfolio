import * as React from "react";
import { Link } from "react-router-dom";

import { PortfolioItemDocument } from "../types";

export interface PortfolioProps {
  portfolioItems: PortfolioItemDocument[];
}

const Portfolio: React.FunctionComponent<PortfolioProps> = (
  props: PortfolioProps
) => {
  const { portfolioItems } = props;

  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {portfolioItems.map((item) => (
          <li key={item._id}>
            <div>
              <h3>{item.title}</h3>
              <h4>{item.tagline}</h4>
              <Link to={`/portfolio/${item._id}`}>View Item</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
