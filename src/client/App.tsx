import * as React from "react";

import { PortfolioItem } from "./types";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
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
      <h1>Hello, World!</h1>
      <ul>
        {portfolioItems.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
