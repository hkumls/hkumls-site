import React from "react";
import { Layout } from "../components";
import { Jumbotron, About } from "../components/home";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Jumbotron />
    <About />
  </Layout>
);

export default IndexPage;
