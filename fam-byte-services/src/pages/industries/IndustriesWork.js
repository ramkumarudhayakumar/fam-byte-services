import React, { useEffect, useRef } from "react";
import {
  MdArrowForward,
  MdLocalHospital,
  MdAccountBalance,
  MdShoppingCart,
  MdSchool,
  MdBuild,
  MdLocalShipping,
} from "react-icons/md";
import "../styles/industries/IndustriesWork.css";

const industries = [
  {
    name: "Healthcare",
    subtitle: "Revolutionizing Patient Care",
    description: "Digital solutions for modern healthcare challenges",
    icon: MdLocalHospital,
  },
  {
    name: "Finance",
    subtitle: "Empowering Financial Freedom",
    description: "Innovative fintech solutions and banking systems",
    icon: MdAccountBalance,
  },
  {
    name: "Retail",
    subtitle: "Redefining Shopping Experiences",
    description: "E-commerce and retail technology solutions",
    icon: MdShoppingCart,
  },
  {
    name: "Education",
    subtitle: "Shaping Future Minds",
    description: "EdTech solutions for the future of learning",
    icon: MdSchool,
  },
  {
    name: "Manufacturing",
    subtitle: "Optimizing Production Processes",
    description: "Smart manufacturing and Industry 4.0 solutions",
    icon: MdBuild,
  },
  {
    name: "Logistics",
    subtitle: "Streamlining Global Supply Chains",
    description: "Supply chain and logistics management systems",
    icon: MdLocalShipping,
  },
];

const IndustriesWork = () => {
  const observerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".industry-item").forEach((item) => {
      observerRef.current.observe(item);
    });

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("title-animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      titleObserver.disconnect();
    };
  }, []);

  return (
    <div className="enhanced-industries-container">
      <div className="animated-background"></div>
      <div className="container py-5">
        <h1 ref={titleRef} className="text-center mb-4 main-title">
          Industries We Serve
        </h1>
        <h2 className="text-center mb-5 subtitle">
          Transforming Businesses Across Sectors
        </h2>
        <div className="row g-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`col-12 mb-3 mb-sm-5 ${
                index % 2 === 0 ? "offset-lg-1" : "offset-lg-3"
              }`}
            >
              <div
                className={`industry-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="industry-content">
                  <div className="industry-icon">
                    <industry.icon />
                  </div>
                  <h3 className="industry-title">{industry.name}</h3>
                  <h4 className="industry-subtitle">{industry.subtitle}</h4>
                  <p className="industry-description">{industry.description}</p>
                  <div className="industry-link">
                    Learn More <MdArrowForward />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesWork;
