import * as React from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
