import React, { useEffect, useRef } from "react";
import "../styles/aboutUs/AboutWelcome.css";

import { motion } from "framer-motion";
import ParticlesComponent from "../../particles/ParticlesComponent";

const textLoaderVarinats = {
  hidden: {
    width: "100%",
    opacity: 1,
  },
  visible: {
    width: "0%",
    opacity: 0.5,
    transition: {
      duration: 1,
    },
  },
};

function AboutWelcome() {
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
    <section className="aboutWelcome">
      <div className="aboutWelcome-backgoround"></div>
      <div className="aboutWelcome-welcomne-particles">
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
            <div className="services-welcome-topLoaderParent">
              <motion.div
                className="services-welcome-topLoader bg-dark"
                variants={textLoaderVarinats}
              ></motion.div>
              <h1
                ref={titleRef}
                className="services-welcome-title aboutWelcome-h1Loader"
              >
                <span className="text-dark">HELLO WORLD.</span>
                <span className="text-primary">&nbsp;THIS IS US.</span>
              </h1>
            </div>
            <div className="services-welcome-bottomLoaderParent">
              <motion.div
                className="services-welcome-bottomLoader bg-dark"
                variants={textLoaderVarinats}
              ></motion.div>
              <p ref={subtitleRef} className="services-welcome-subtitle mt-4">
                We are happy and passionate people committed to solving big
                problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutWelcome;
