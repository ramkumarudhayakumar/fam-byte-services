import React, { useEffect, useRef, useState } from "react";
import "../styles/DigitalTransformation.css";

const DigitalTransformation = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [cardVisible, setCardVisible] = useState({});

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
    // Observer for the section heading and paragraph
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          sectionObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Observer for individual cards
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            if (index !== undefined) {
              setCardVisible((prev) => ({
                ...prev,
                [index]: true,
              }));
            }
            cardObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) cardObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="digital-transformation py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2
              ref={sectionRef}
              className={`fw-bold mb-4 animated-text ${
                isSectionVisible ? "is-visible" : ""
              }`}
            >
              Our Digital Transformation Consulting Approach
            </h2>
            <p
              ref={sectionRef}
              className={`text-muted lead animated-text delay-1 ${
                isSectionVisible ? "is-visible" : ""
              }`}
            >
              We help businesses navigate their digital transformation journey
              with our proven methodology
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center mb-5">
          {approaches.map((approach, index) => (
            <div
              key={approach.id}
              className="col-md-6 col-lg-3"
              ref={(el) => (cardRefs.current[index] = el)} // Assign ref to the current card
              data-index={index} // Add index as a data attribute
            >
              <div
                className={`approach-card p-4 h-100 bg-white rounded-3 ${
                  cardVisible[index]
                    ? "animated-card is-visible"
                    : "animated-card"
                } delay-${index + 1} ${index % 2 && "mt-sm-5"}`}
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
