import React from "react";

const reasons = [
  "Expertise in cutting-edge AI technologies",
  "Customized solutions for your business needs",
  "Proven track record of successful implementations",
  "Dedicated team of AI specialists",
  "Continuous innovation and research",
];

export function WhyChooseUsSection() {
  return (
    <section className="why-choose-us-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Reason {index + 1}</h5>
                  <p className="card-text">{reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
