import React from "react";
import { BrandsSection } from "../components/GenAICOEx/BrandsSection";
import { AlgorithmSection } from "../components/GenAICOEx/AlgorithmSection";
import Layout from "../components/Layout";
import { ExpertiseSection } from "../components/GenAICOEx/ExpertiseSection";
import { WhyChooseUsSection } from "../components/GenAICOEx/WhyChooseUsSection";
import HeroSection from "../components/GenAICOEx/HeroSection";

function GenAICOEx() {
  return (
    <Layout>
      <HeroSection />
      <ExpertiseSection />
      <BrandsSection />
      <AlgorithmSection />
      <WhyChooseUsSection />
    </Layout>
  );
}

export default GenAICOEx;
