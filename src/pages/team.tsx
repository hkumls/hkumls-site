import React from "react";
import { Layout } from "../components";
import { Contact, Team, Footer } from "../components";
import SEO from "../components/seo";

// Enable smooth-scroll behaviour
if (typeof window !== "undefined") require("smooth-scroll")('a[href*="#"]');

const TeamPage = ({ location }) => (
  <>
    <Layout location={location}>
      <SEO title="Team" />
      <Team />
      <Contact />
    </Layout>
    <Footer />
  </>
);

export default TeamPage;
