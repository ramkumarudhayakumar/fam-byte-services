import React from "react";

import "./styles/brands-section.css";

//import css
import "./styles/CommonStyles.css";
import HomeWelcome from "./home/HomeWelcome";
import HomeServices from "./home/HomeServices";
import DigitalTransformation from "./home/DigitalTransformation";
import BuildSection from "./home/BuildSection";

function Home() {
  return (
    <>
      {/* Home Welcome */}
      <HomeWelcome />
      {/* Home Services */}
      <HomeServices />
      {/* Home Digital Transformation */}
      <DigitalTransformation />
      {/* Home Build Section */}
      <BuildSection />
    </>
  );
}

export default Home;
