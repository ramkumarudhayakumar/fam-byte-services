import React from "react";
import Layout from "../components/Layout";
import AboutWelcome from "./aboutUs/AboutWelcome";
import AboutBelowCard from "./aboutUs/AboutBelowCard";
import AboutUsContent from "./aboutUs/AboutUsContent";
import AboutTeam from "./aboutUs/AboutTeam";

function About() {
  return (
    <Layout>
      <AboutWelcome />
      <AboutUsContent />
      <AboutTeam />
      <AboutBelowCard />
    </Layout>
  );
}

export default About;
