import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4">About Us</h1>
            <p className="lead mb-4">
              We are a leading technology company specializing in digital
              transformation and innovative solutions for businesses worldwide.
            </p>
            <p className="mb-4">
              At fambyte, we blend strategy, design, and innovation to create
              cutting-edge solutions that drive business growth and enhance user
              experiences. Our team of experts is passionate about leveraging
              the latest technologies to solve complex challenges and deliver
              exceptional results.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-6">
                <div className="border rounded p-3 text-center">
                  <h3 className="h2 mb-0">10+</h3>
                  <p className="mb-0">Years Experience</p>
                </div>
              </div>
              <div className="col-6">
                <div className="border rounded p-3 text-center">
                  <h3 className="h2 mb-0">500+</h3>
                  <p className="mb-0">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
