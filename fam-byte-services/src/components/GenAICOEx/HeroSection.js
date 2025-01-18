import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticlesComponent from "../../particles/ParticlesComponent";
import "../styles/GenAICOEx/HeroSection.css";

const textLoaderVariants = {
  hidden: {
    width: "100%",
    opacity: 1,
  },
  visible: {
    width: "0%",
    opacity: 0.5,
    transition: {
      duration: 0.8,
    },
  },
};

function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for animations
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
    <section className="hero-section position-relative min-vh-100 d-flex align-items-center">
      {/* Background Particles */}
      <div className="hero-section-particles">
        <ParticlesComponent />
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6"
            animate="visible"
            initial="hidden"
            viewport={{ once: true }}
          >
            <div className="hero-section-topLoaderParent">
              <motion.div
                className="hero-section-topLoader bg-dark"
                variants={textLoaderVariants}
              ></motion.div>
              <h1
                ref={titleRef}
                className="display-4 fw-bold hero-title text-dark "
              >
                GEN AI {""}
                <span className="text-primary">CENTRE OF EXCELLENCE</span>
              </h1>
            </div>
            <div className="hero-section-bottomLoaderParent">
              <motion.div
                className="hero-section-bottomLoader bg-dark"
                variants={textLoaderVariants}
              ></motion.div>
              <p
                ref={subtitleRef}
                className="lead hero-subtitle text-muted mt-3"
              >
                Empowering Businesses with Cutting-Edge AI Solutions
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg mt-2">
                Get in Touch
              </Link>
            </div>
          </motion.div>
          <div className="col-lg-6 text-center">
            <motion.img
              src="/ai-illustration.svg"
              alt="AI Illustration"
              className="img-fluid"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          opacity: 0.1,
          zIndex: -1,
        }}
      ></div>
    </section>
  );
}

export default HeroSection;
