import React, { useEffect, useRef } from "react";
import "../styles/blogs/BlogWelcome.css";

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

function BlogWelcome() {
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
    <section className="BlogWelcome">
      <div className="BlogWelcome-backgoround"></div>
      <div className="BlogWelcome-welcomne-particles">
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
            <div className="blog-welcome-topLoaderParent">
              <motion.div
                className="blog-welcome-topLoader bg-dark"
                variants={textLoaderVarinats}
              ></motion.div>
              <h1
                ref={titleRef}
                className="blog-welcome-title BlogWelcome-h1Loader"
              >
                <span className="text-dark">INDUSTRY INSIGHTS ON</span>
                <span className="text-primary">&nbsp;db Blogs.</span>
              </h1>
            </div>
            <div className="blog-welcome-bottomLoaderParent">
              <motion.div
                className="blog-welcome-bottomLoader bg-dark"
                variants={textLoaderVarinats}
              ></motion.div>
              <p ref={subtitleRef} className="blog-welcome-subtitle mt-4">
                Our outlook on all-things-digital, start reading.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BlogWelcome;
