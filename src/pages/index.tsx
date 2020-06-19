import React from "react";
import { Layout } from "../components";
import { Jumbotron, About, Sponsors } from "../components";
import SEO from "../components/seo";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Jumbotron />
    <About />
    <Sponsors />
  </Layout>
);

export default IndexPage;
