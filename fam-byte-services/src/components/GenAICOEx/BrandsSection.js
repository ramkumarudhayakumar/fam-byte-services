import React, { useState, useRef } from "react";

export function BrandsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-4">BRANDS WE'VE WORKED WITH</h2>
            <div className="col-lg-8 mx-auto">
              <p className="lead mb-5">
                Our Gen AI COEx (Centre Of Excellence) stands at the forefront
                of innovation, serving a diverse clientele ranging from global
                brands and top consultancies to startups, Fortune 500 companies,
                and governments bodies. Our expertise lies in harnessing the
                power of advanced technologies such as generative artificial
                intelligence, machine learning, and data analytics to drive
                digital transformation.
              </p>
            </div>
          </div>
        </div>

        <div
          className="logos-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`logos-slide ${isPaused ? "paused" : ""}`}
            ref={firstRowRef}
          >
            {[...Array(7)].map((_, i) => (
              <img
                key={`first-${i}`}
                src="/placeholder.svg"
                alt={`Brand Logo ${i + 1}`}
                className="logo"
                height="60"
                width="120"
              />
            ))}
            {[...Array(7)].map((_, i) => (
              <img
                key={`first-dup-${i}`}
                src="/placeholder.svg"
                alt={`Brand Logo ${i + 1}`}
                className="logo"
                height="60"
                width="120"
              />
            ))}
          </div>

          <div
            className={`logos-slide ${isPaused ? "paused" : ""}`}
            ref={secondRowRef}
          >
            {[...Array(7)].map((_, i) => (
              <img
                key={`second-${i}`}
                src="/placeholder.svg"
                alt={`Brand Logo ${i + 1}`}
                className="logo"
                height="60"
                width="120"
              />
            ))}
            {[...Array(7)].map((_, i) => (
              <img
                key={`second-dup-${i}`}
                src="/placeholder.svg"
                alt={`Brand Logo ${i + 1}`}
                className="logo"
                height="60"
                width="120"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
