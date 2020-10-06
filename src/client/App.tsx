import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Admin = React.lazy(() => import("./routes/Admin"));
const Home = React.lazy(() => import("./routes/Home"));
const PortfolioItemDetails = React.lazy(
  () => import("./routes/PortfolioItemDetails")
);

import { PortfolioItemDocument } from "./types";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const initialPortfolioItems: PortfolioItemDocument[] = [];
  const [portfolioItems, setPortfolioItems] = React.useState(
    initialPortfolioItems
  );

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
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Home portfolioItems={portfolioItems} />
          </Route>
          <Route exact path="/admin">
            <Admin
              portfolioItems={portfolioItems}
              setPortfolioItems={setPortfolioItems}
            />
          </Route>
          <Route path="/portfolio/:id">
            <PortfolioItemDetails portfolioItems={portfolioItems} />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
