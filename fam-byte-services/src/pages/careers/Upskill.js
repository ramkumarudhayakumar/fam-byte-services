import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function Upskill() {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();

  const skillTracks = [
    {
      title: "Technical Excellence",
      items: [
        "Full Stack Development",
        "Cloud Architecture",
        "AI & ML",
        "DevOps",
      ],
      icon: "⚡",
    },
    {
      title: "Professional Growth",
      items: ["Leadership", "Communication", "Project Management", "Agile"],
      icon: "🎯",
    },
  ];

  return (
    <section className="upskill-section bg-white py-5">
      <div className="container">
        <div
          ref={headerRef}
          className={`text-center mb-5 fade-up ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2 className="display-4 fw-bold text-primary mb-3">
            Accelerate Your Career Growth
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Looking to upskill and grow your career in the IT services industry?
            Join our comprehensive training programs.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`row g-4 justify-content-center fade-up ${
            contentVisible ? "visible" : ""
          }`}
        >
          {skillTracks.map((track, index) => (
            <div key={index} className="col-md-6">
              <div
                className="card h-100 border-0 shadow upskill-section-card"
                style={{
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <div className="card-body p-4">
                  <div className="display-4 mb-3 text-center">{track.icon}</div>
                  <h3 className="h4 card-title text-primary mb-4 text-center">
                    {track.title}
                  </h3>
                  <ul className="list-unstyled">
                    {track.items.map((item, idx) => (
                      <li key={idx} className="mb-3 d-flex align-items-center">
                        <span className="me-2">✓</span>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-5 py-3">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

export default Upskill;
