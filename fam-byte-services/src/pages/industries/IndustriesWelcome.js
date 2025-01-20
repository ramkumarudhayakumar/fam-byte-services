import React, { useEffect, useRef } from "react";
import "../styles/industries/IndustriesWelcome.css";

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

function IndustriesWelcome() {
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
    <section className="fambyteIndustries">
      <div className="fambyteIndustries-backgoround"></div>
      <div className="fambyteIndustries-welcomne-particles">
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
              className="industries-welcome-topLoaderParent"
              variants={textLoaderVarinats}
            >
              {/* <div
                className="industries-welcome-topLoader bg-dark"
                variants={textLoaderVarinats}
              ></div> */}
              <h1
                ref={titleRef}
                className="industries-welcome-title fambyteIndustries-h1Loader"
              >
                <span className="text-dark">DISRUPTING </span>&nbsp;
                <span className="text-primary">INDUSTRIES</span>
                <span className="text-dark">,</span>
                <br />
                <span className="text-dark">ONE SECTOR AT A TIME</span>
                {/* <span className="text-dark">AT</span>
                <span className="text-primary">A TIME</span> */}
              </h1>
            </motion.div>
            <motion.div
              className="industries-welcome-bottomLoaderParent"
              variants={textLoaderVarinats}
            >
              {/* <div
                className="industries-welcome-bottomLoader bg-dark"
                variants={textLoaderVarinats}
              ></div> */}
              <p ref={subtitleRef} className="industries-welcome-subtitle mt-4">
                We help empower, enable and optimize solutions across all
                industries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesWelcome;
