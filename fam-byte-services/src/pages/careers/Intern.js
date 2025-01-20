import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function Intern() {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const cardRefs = useRef([]);
  const [cardVisibility, setCardVisibility] = useState([]);

  const internshipPrograms = [
    {
      title: "Technology",
      description: "Dive into cutting-edge tech stack and real-world projects",
      icon: "💻",
      skills: ["React", "Node.js", "Cloud", "AI/ML"],
    },
    {
      title: "Design",
      description: "Create beautiful and intuitive user experiences",
      icon: "🎨",
      skills: ["UI/UX", "Product Design", "Research", "Prototyping"],
    },
    {
      title: "Marketing",
      description: "Drive growth through digital marketing strategies",
      icon: "📈",
      skills: ["SEO", "Content", "Analytics", "Social Media"],
    },
  ];

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, internshipPrograms.length);

    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setCardVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = entry.isIntersecting;
            return newVisibility;
          });
        },
        { threshold: 0.1 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="interns-section py-5 bg-light">
      <div className="container">
        <div
          ref={headerRef}
          className={`text-center mb-5 fade-up ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2 className="display-4 fw-bold text-primary mb-3">
            Interns at Work
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Launch your career with hands-on experience in a dynamic environment
          </p>
        </div>

        <div className="row g-4">
          {internshipPrograms.map((program, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`card interns-section-card h-100 border-0 scale-up ${
                  cardVisibility[index] ? "visible" : ""
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  boxShadow:
                    "0px 2px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="card-body p-4">
                  <div className="display-4 mb-3 text-center">
                    {program.icon}
                  </div>
                  <h3 className="h4 card-title text-primary mb-3">
                    {program.title}
                  </h3>
                  <p className="card-text text-muted mb-4">
                    {program.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {program.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="badge intern-badge bg-opacity-10 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="btn intern-applyNow-btn w-100">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intern;
