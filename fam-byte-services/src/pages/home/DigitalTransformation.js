import React, { useEffect, useRef, useState } from "react";
import "../styles/DigitalTransformation.css";

const DigitalTransformation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const approaches = [
    {
      id: 1,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business needs and develop a comprehensive digital strategy.",
      icon: "bi bi-search",
    },
    {
      id: 2,
      number: "02",
      title: "Design & Innovation",
      description:
        "Creating innovative solutions with user-centered design principles.",
      icon: "bi bi-pencil-square",
    },
    {
      id: 3,
      number: "03",
      title: "Development & Testing",
      description: "Building robust solutions with thorough quality assurance.",
      icon: "bi bi-code-slash",
    },
    {
      id: 4,
      number: "04",
      title: "Deployment & Support",
      description: "Seamless deployment and ongoing maintenance support.",
      icon: "bi bi-rocket-takeoff",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`digital-transformation py-5 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-4 animated-text">
              Our Digital Transformation Consulting Approach
            </h2>
            <p className="text-muted lead animated-text delay-1">
              We help businesses navigate their digital transformation journey
              with our proven methodology
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center mb-5">
          {approaches.map((approach, index) => (
            <div key={approach.id} className="col-md-6 col-lg-3">
              <div
                className={`approach-card p-4 h-100 bg-white rounded-3 animated-card delay-${
                  index + 2
                } ${index % 2 && "mt-sm-5"}`}
              >
                <div className="card-header d-flex align-items-center mb-3">
                  <span className="number me-3">{approach.number}</span>
                  <i className={`${approach.icon} fs-3 text-primary`}></i>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold mb-3">{approach.title}</h5>
                  <p className="text-muted mb-0">{approach.description}</p>
                </div>
                <div className="card-footer mt-3">
                  <button className="btn btn-link p-0 text-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
