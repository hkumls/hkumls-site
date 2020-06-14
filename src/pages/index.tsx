import React from "react";
import { Layout } from "../components";
import { Jumbotron, About } from "../components";

// Enable smooth-scroll behaviour
if (typeof window !== "undefined") require("smooth-scroll")('a[href*="#"]');

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Jumbotron />
    <About />
  </Layout>
);

export default IndexPage;
