import * as React from "react";

import { PortfolioItem } from "../types";

export interface PortfolioProps {}

const Portfolio: React.FunctionComponent<PortfolioProps> = () => {
  const intialPortfolioItems: PortfolioItem[] = [];
  const [portfolioItems, setPortfolioItems] = React.useState(
    intialPortfolioItems
  );

  React.useEffect(() => {
    const getPortfolioItems = async (): Promise<
      PortfolioItem[] | { error: any }
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
          <li key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <h4>{item.tagline}</h4>
              <a href="#">View Item</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
