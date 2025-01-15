import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ServicesWelcome from "./services/ServicesWelcome";
import OurServices from "./services/OurServices";
import RecentWork from "./services/RecentWork";

function Services() {
  return (
    <Layout>
      <ServicesWelcome />
      <OurServices />
      <RecentWork />
    </Layout>
  );
}

export default Services;
