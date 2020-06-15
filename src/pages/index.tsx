import React from "react";
import { Layout } from "../components";
import { Jumbotron, About, Sponsors } from "../components";

// Enable smooth-scroll behaviour
if (typeof window !== "undefined") require("smooth-scroll")('a[href*="#"]');

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Jumbotron />
    <About />
    <Sponsors />
  </Layout>
);

export default IndexPage;
