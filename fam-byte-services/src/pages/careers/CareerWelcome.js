import React, { useEffect, useRef } from "react";
import "../styles/career/CareerWelcome.css";

import { motion } from "framer-motion";
import ParticlesComponent from "../../particles/ParticlesComponent";

const textLoaderVarinats = {
  hidden: {
    Y: 50,
    opacity: 0.5,
    scale: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      siffness: 120,
    },
  },
};

function CareerWelcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Intersection Observer setup
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="fambyteCareer">
      <div className="fambyteCareer-backgoround"></div>
      <div className="fambyteCareer-welcomne-particles">
        <ParticlesComponent />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <motion.div
            className="col-12 text-center"
            animate="visible"
            initial="hidden"
            viewport={{ once: true }}
          >
            <motion.div
              className="career-welcome-topLoaderParent"
              variants={textLoaderVarinats}
            >
              <div
                className="career-welcome-topLoader bg-dark"
                variants={textLoaderVarinats}
              ></div>
              <h1
                ref={titleRef}
                className="career-welcome-title fambyteCareer-h1Loader"
              >
                <span className="text-dark">CAREERS AT</span>&nbsp;
                <span className="text-primary">fambyte</span>
              </h1>
            </motion.div>
            <motion.div
              className="career-welcome-bottomLoaderParent"
              variants={textLoaderVarinats}
            >
              <div
                className="career-welcome-bottomLoader bg-dark"
                variants={textLoaderVarinats}
              ></div>
              <p ref={subtitleRef} className="career-welcome-subtitle mt-4">
                We are engineers, designers, marketers and gamers who are
                shaping the future digitally
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CareerWelcome;
