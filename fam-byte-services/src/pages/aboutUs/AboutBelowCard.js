import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/aboutUs/AboutBelowCard.css";

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

function AboutBelowCard() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cardsData = {
    cards: [
      {
        id: 1,
        icon: "fas fa-lightbulb",
        title: "Innovation",
        description:
          "Pushing boundaries with creative solutions and cutting-edge technology",
        delay: 100,
      },
      {
        id: 2,
        icon: "fas fa-users",
        title: "Collaboration",
        description:
          "Working together to achieve exceptional results and create impact",
        delay: 200,
      },
      {
        id: 3,
        icon: "fas fa-rocket",
        title: "Excellence",
        description:
          "Delivering high-quality solutions with precision and dedication",
        delay: 300,
      },
    ],
  };

  const handleMouseEnter = useCallback((id) => {
    setActiveCard(id);
    return () => {
      setActiveCard(null);
    };
  }, []);

  //   const handleMouseLeave = useCallback(() => {
  //     setActiveCard(null);
  //   }, []);

  return (
    <div className="aboutCard-section">
      <div className="container py-5">
        <div className="d-flex flex-column align-items-center">
          <motion.h4
            className="text-muted text-center aboutCard-section-h4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Amazing things happen to your business when we connect these dots of
            utility and value.
          </motion.h4>
        </div>
        <div className="row g-4 mt-4 position-relative">
          {cardsData.cards.map((card) => (
            <div
              key={card.id}
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              <div
                className={`card h-100 hover-card`}
                onMouseEnter={() => handleMouseEnter(card.id)}
                // onMouseLeave={handleMouseLeave}
              >
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper mb-3">
                    <i className={`${card.icon} fs-2 text-primary`}></i>
                  </div>
                  <h3 className="card-title h4">{card.title}</h3>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`aboutCard-section-row-backPalette ${
            activeCard ? `active card-${activeCard}` : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default AboutBelowCard;
