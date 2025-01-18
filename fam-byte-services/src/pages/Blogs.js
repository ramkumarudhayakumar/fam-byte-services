import React from "react";
import Layout from "../components/Layout";
import BlogWelcome from "./blogs/BlogWelcome";
import OurBlog from "./blogs/OurBlog";

function Blogs() {
  return (
    <Layout>
      <BlogWelcome />
      <OurBlog />
    </Layout>
  );
}

export default Blogs;
