import * as React from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;
