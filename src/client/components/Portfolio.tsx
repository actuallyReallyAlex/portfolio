import * as React from "react";
import { Link } from "react-router-dom";

import { PortfolioItemDocument } from "../types";

export interface PortfolioProps {
  portfolioItems: PortfolioItemDocument[];
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
}

const Portfolio: React.FunctionComponent<PortfolioProps> = (
  props: PortfolioProps
) => {
  const { portfolioItems, setPortfolioItems } = props;
  React.useEffect(() => {
    const getPortfolioItems = async (): Promise<
      PortfolioItemDocument[] | { error: any }
    > => {
      try {
        const response = await fetch("/portfolioItems", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        setPortfolioItems(data);
      } catch (error) {
        console.error(error);
        return { error };
      }
    };
    getPortfolioItems();
  }, []);

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
