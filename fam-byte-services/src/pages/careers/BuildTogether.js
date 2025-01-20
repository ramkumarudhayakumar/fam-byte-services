import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function BuildTogether() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const [imageRef, imageVisible] = useIntersectionObserver();

  return (
    <section className="build-together-section py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" ref={sectionRef}>
            <div className={`fade-up ${sectionVisible ? "visible" : ""}`}>
              <h2 className="display-4 fw-bold text-primary mb-4">
                Let's Build Together
              </h2>
              <p className="lead mb-4 text-muted">
                Join our team of innovators and visionaries who are passionate
                about creating cutting-edge digital solutions that make a
                difference.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-primary btn-lg px-4 py-2">
                  Explore Opportunities
                </button>
                <button className="btn build-together-section-learnMore btn-lg px-4 py-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0" ref={imageRef}>
            <div className={`slide-in-right ${imageVisible ? "visible" : ""}`}>
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 translate-middle">
                  <div
                    className="bg-primary rounded-circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      opacity: "0.1",
                    }}
                  ></div>
                </div>
                <img
                  src="/placeholder.svg"
                  alt="Team collaboration"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildTogether;
