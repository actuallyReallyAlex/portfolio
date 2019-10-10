import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AboutSection from "../sections/about";
import WorksSection from "../sections/works";

export default () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <WorksSection />
    </Layout>
  );
};
