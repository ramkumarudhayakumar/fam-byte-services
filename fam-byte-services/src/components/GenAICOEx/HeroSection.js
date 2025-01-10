import React from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="hero-section position-relative min-vh-50 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              GEN AI CENTRE OF EXCELLENCE
            </h1>
            <p className="lead mb-4">
              Empowering Businesses with Cutting-Edge AI Solutions
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src="/placeholder.svg"
              alt="AI Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          opacity: 0.1,
          zIndex: -1,
        }}
      ></div>
    </section>
  );
}
