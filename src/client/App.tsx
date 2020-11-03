import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "@rebass/preset";

const Admin = React.lazy(() => import("./routes/Admin"));
const Home = React.lazy(() => import("./routes/Home"));
const PortfolioItemDetails = React.lazy(
  () => import("./routes/PortfolioItemDetails")
);

import { PortfolioItemDocument } from "./types";

theme.fonts = {
  body: "'Poppins', sans-serif",
  heading: "'Nunito', sans-serif",
  monospace: "Menlo, monospace",
};

const App: React.FunctionComponent<unknown> = () => {
  const initialPortfolioItems: PortfolioItemDocument[] = [];
  const [portfolioItems, setPortfolioItems] = React.useState(
    initialPortfolioItems
  );

  React.useEffect(() => {
    const getPortfolioItems = async (): Promise<
      PortfolioItemDocument[] | { error: Error }
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
    <ThemeProvider theme={theme}>
      <Router>
        <React.Suspense
          fallback={
            <div id="spinner-container">
              <div className="spinner" />
            </div>
          }
        >
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
    </ThemeProvider>
  );
};

export default App;
