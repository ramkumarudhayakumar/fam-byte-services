import React from "react";

import AboutWelcome from "./aboutUs/AboutWelcome";
import AboutBelowCard from "./aboutUs/AboutBelowCard";
import AboutUsContent from "./aboutUs/AboutUsContent";
import AboutTeam from "./aboutUs/AboutTeam";

function About() {
  return (
    <>
      <AboutWelcome />
      <AboutUsContent />
      <AboutTeam />
      <AboutBelowCard />
    </>
  );
}

export default About;
