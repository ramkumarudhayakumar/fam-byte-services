import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ServicesWelcome from "./services/ServicesWelcome";
import OurServices from "./services/OurServices";

function Services() {
  return (
    <Layout>
      <ServicesWelcome />
      <OurServices />
    </Layout>
  );
}

export default Services;
