import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import PortfolioItemDetails from "./components/PortfolioItemDetails";

import { PortfolioItemDocument } from "./types";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const initialPortfolioItems: PortfolioItemDocument[] = [];
  const [portfolioItems, setPortfolioItems] = React.useState(
    initialPortfolioItems
  );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Hero />
            <About />
            <Portfolio
              portfolioItems={portfolioItems}
              setPortfolioItems={setPortfolioItems}
            />
            <Footer />
          </div>
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioItemDetails portfolioItems={portfolioItems} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
