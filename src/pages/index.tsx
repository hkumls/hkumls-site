import React from "react";
import { Layout } from "../components";
import { Jumbotron } from "../components/home";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Jumbotron />
  </Layout>
);

export default IndexPage;
