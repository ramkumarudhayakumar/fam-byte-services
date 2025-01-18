import React, { useEffect, useRef } from "react";
import "../styles/successStories/StoriesWelcome.css";

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

function StoriesWelcome() {
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
    <section className="fambyteStories">
      <div className="fambyteStories-backgoround"></div>
      <div className="fambyteStories-welcomne-particles">
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
            <div className="stories-welcome-topLoaderParent">
              <motion.div
                className="stories-welcome-topLoader bg-dark"
                variants={textLoaderVarinats}
              ></motion.div>
              <h1
                ref={titleRef}
                className="stories-welcome-title fambyteStories-h1Loader"
              >
                <span className="text-dark">SUCCESS STORIES AT</span>&nbsp;
                <span className="text-primary">fambyte</span>
              </h1>
            </div>
            <div className="stories-welcome-bottomLoaderParent">
              <motion.div
                className="stories-welcome-bottomLoader bg-dark"
                variants={textLoaderVarinats}
              ></motion.div>
              <p ref={subtitleRef} className="stories-welcome-subtitle mt-4">
                We are engineers, designers, marketers and gamers who are
                shaping the future digitally
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StoriesWelcome;
