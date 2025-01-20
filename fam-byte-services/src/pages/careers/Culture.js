import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "../styles/career/AllChildStyles.css";

function Culture() {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [cardRef1, card1Visible] = useIntersectionObserver();
  const [cardRef2, card2Visible] = useIntersectionObserver();
  const [cardRef3, card3Visible] = useIntersectionObserver();

  const cultureItems = [
    {
      title: "Innovation Hub",
      description: "Where creativity meets technology to build the future",
      icon: "🚀",
      delay: "0s",
    },
    {
      title: "Growth Mindset",
      description: "Continuous learning and evolution is in our DNA",
      icon: "🌱",
      delay: "0.2s",
    },
    {
      title: "Collaborative Spirit",
      description: "Together we achieve the extraordinary",
      icon: "🤝",
      delay: "0.4s",
    },
  ];

  return (
    <section className="culture-section bg-white py-5 mt-5">
      <div className="container">
        <div
          ref={headerRef}
          className={`text-center mb-5 fade-up ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2 className="display-4 fw-bold text-primary mb-3">Our Culture</h2>
          <p className="lead text-muted">
            We're building something special. Come be a part of it.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {cultureItems.map((item, index) => (
            <div
              key={index}
              className="col-md-4"
              ref={index === 0 ? cardRef1 : index === 1 ? cardRef2 : cardRef3}
            >
              <div
                className={`culture-section-card card h-100 border-0 scale-up ${
                  (index === 0 && card1Visible) ||
                  (index === 1 && card2Visible) ||
                  (index === 2 && card3Visible)
                    ? "visible"
                    : ""
                }`}
                style={{
                  transitionDelay: item.delay,
                  backgroundColor: "#f8f9fa",
                  boxShadow:
                    "0px 2px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="card-body p-4 text-center">
                  <div className="display-4 mb-3">{item.icon}</div>
                  <h3 className="card-title h4 text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Culture;
