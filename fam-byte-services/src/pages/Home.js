import React from "react";
import Layout from "../components/Layout";
import "./styles/brands-section.css";

//import css
import "./styles/CommonStyles.css";
import HomeWelcome from "./home/HomeWelcome";
import HomeServices from "./home/HomeServices";
import DigitalTransformation from "./home/DigitalTransformation";
import BuildSection from "./home/BuildSection";

function Home() {
  return (
    <Layout>
      {/* Home Welcome */}
      <HomeWelcome />
      {/* Home Services */}
      <HomeServices />
      {/* Home Digital Transformation */}
      <DigitalTransformation />
      {/* Home Build Section */}
      <BuildSection />
    </Layout>
  );
}

export default Home;
