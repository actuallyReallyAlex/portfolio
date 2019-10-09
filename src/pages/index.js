import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import AboutSection from "../sections/about";

export default () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
    </Layout>
  );
};
