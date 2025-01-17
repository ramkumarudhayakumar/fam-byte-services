import React, { useState, useEffect, useRef } from "react";
import "../styles/aboutUs/AboutUsContent.css";
import { FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import cardBg from "../../assets/about/aboutUsContentBg.jpg";

export default function AboutUsContent() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    description: false,
    stats: false,
    image: false,
  });

  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);

  const refs = {
    title: useRef(null),
    description: useRef(null),
    stats: useRef(null),
    image: useRef(null),
  };

  useEffect(() => {
    const observers = {};

    Object.keys(refs).forEach((key) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
            observers[key].unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );

      if (refs[key].current) {
        observers[key].observe(refs[key].current);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (isVisible.stats) {
      const experienceInterval = setInterval(() => {
        setExperience((prev) => (prev < 10 ? prev + 1 : 10));
      }, 200);

      const projectsInterval = setInterval(() => {
        setProjects((prev) => (prev < 500 ? prev + 25 : 500));
      }, 50);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
      };
    }
  }, [isVisible.stats]);

  return (
    <section className="aboutContent">
      <div className="aboutContent-container container py-md-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1
              ref={refs.title}
              className={`mb-4 animated-text ${
                isVisible.title ? "is-visible" : ""
              }`}
            >
              About <span className="text-primary">Us</span>
            </h1>
            <div
              ref={refs.description}
              className={`animated-text ${
                isVisible.description ? "is-visible" : ""
              }`}
            >
              <p className="lead mb-4">
                We are a leading technology company specializing in digital
                transformation and innovative solutions for businesses
                worldwide.
              </p>
              <p className="text-muted mb-4">
                At fambyte, we blend strategy, design, and innovation to create
                cutting-edge solutions that drive business growth and enhance
                user experiences. Our team of experts is passionate about
                leveraging the latest technologies to solve complex challenges
                and deliver exceptional results.
              </p>
            </div>
            <div
              ref={refs.stats}
              className={`row g-4 mb-4 animated-stats ${
                isVisible.stats ? "is-visible" : ""
              }`}
            >
              <div className="col-md-6 mb-4">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaBriefcase />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{experience}+</h3>
                    <h4 className="text-light about-experience-h4">
                      Years Experience
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="stat-card">
                  <div className="stat-icon">
                    <FaProjectDiagram />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{projects}+</h3>
                    <h4 className="text-light about-experience-h4">
                      Projects Delivered
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center p-5">
            <div className="aboutContent-img-backcircle">
              <img
                ref={refs.image}
                src={cardBg}
                alt="About Us"
                className={`img-fluid rounded shadow rounded-circle animated-image ${
                  isVisible.image ? "is-visible" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
