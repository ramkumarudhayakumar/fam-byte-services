import React from "react";

const expertiseAreas = [
  "Natural Language Processing",
  "Computer Vision",
  "Predictive Analytics",
  "Generative AI",
  "Machine Learning",
  "Deep Learning",
];

export function ExpertiseSection() {
  return (
    <section className="expertise-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Expertise</h2>
        <div className="row g-4 justify-content-center">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="hexagon d-flex align-items-center justify-content-center">
                <span>{area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
