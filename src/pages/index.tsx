import React from "react";
import { Layout } from "../components";
import { Jumbotron, About, Sponsors, Contact, Team } from "../components";
import SEO from "../components/seo";

// Enable smooth-scroll behaviour
if (typeof window !== "undefined") require("smooth-scroll")('a[href*="#"]');

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Jumbotron />
    <About />
    <Sponsors />
    <Team />
    <Contact />
  </Layout>
);

export default IndexPage;
