import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "@rebass/preset";

const Admin = React.lazy(() => import("./routes/Admin"));
const Home = React.lazy(() => import("./routes/Home"));
const PortfolioItemDetails = React.lazy(
  () => import("./routes/PortfolioItemDetails")
);
const NotFound = React.lazy(() => import("./routes/NotFound"));

import { PortfolioItemDocument } from "./types";
import { isError } from "./util";
import getPortfolioItems from "./data/getPortfolioItems";

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
    const getData = async () => {
      const data = await getPortfolioItems();

      if (isError(data)) {
        console.error(data);
      } else {
        setPortfolioItems(data);
      }
    };

    getData();
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
              <PortfolioItemDetails
                portfolioItems={portfolioItems}
                setPortfolioItems={setPortfolioItems}
              />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
