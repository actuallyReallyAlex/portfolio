import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AboutSection from "../sections/about";
import WorksSection from "../sections/works";
import Helmet from "../components/helmet";

export default () => {
  return (
    <Layout>
      <Helmet title="Home" />
      <Hero />
      <AboutSection />
      <WorksSection />
    </Layout>
  );
};
