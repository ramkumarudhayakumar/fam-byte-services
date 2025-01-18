import React, { useEffect, useRef, useState } from "react";
import "../styles/BuildSection.css";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const BuildSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const buildItems = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Building intelligent solutions for tomorrow",
      icon: "bi bi-cpu",
    },
    {
      id: 2,
      title: "IoT Solutions",
      description: "Connecting the physical and digital worlds",
      icon: "bi bi-hdd-network",
    },
    {
      id: 3,
      title: "Blockchain",
      description: "Developing secure and transparent systems",
      icon: "bi bi-box",
    },
    {
      id: 4,
      title: "Cloud Native",
      description: "Scalable and flexible cloud solutions",
      icon: "bi bi-cloud-arrow-up",
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
      className={`build-section py-5 bg-white ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <motion.h2
              className="display-4 fw-bold mb-4"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              There is so much left to build
            </motion.h2>
            <motion.p
              className="lead text-muted "
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We're at the forefront of digital innovation, creating solutions
              that shape the future of technology and business.
            </motion.p>
            <motion.button
              className="btn btn-primary btn-lg mt-3"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Start Building With Us
              <i className="bi bi-arrow-right ms-2"></i>
            </motion.button>
          </div>
          <div
            className={`col-lg-6 build-card-Maincol ${
              isVisible ? "isVisible" : ""
            }`}
          >
            <div className="row g-4">
              {buildItems.map((item, index) => (
                <div key={item.id} className="col-sm-6">
                  <div
                    className={`build-card p-4 bg-white rounded-3 shadow-sm h-100 animated-card delay-${
                      index + 3
                    }`}
                  >
                    <i className={`${item.icon} fs-1 text-primary mb-3`}></i>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
