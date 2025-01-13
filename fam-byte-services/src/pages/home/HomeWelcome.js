import React from "react";
import { useNavigate } from "react-router-dom";
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

export default function HomeWelcome() {
  const navigate = useNavigate();

  const navigataeHandler = () => {
    navigate("/contact-us");
  };

  return (
    <div className="container herosection-blur-container">
      <ParticlesComponent />
      <div></div>
      <div className="herosection-blur-white"></div>
      <div className="row min-vh-100 align-items-center text-center">
        <motion.div
          className="col-12"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <div className="herosection-topLoaderParent">
            <motion.div
              className="herosection-topLoader bg-primary"
              variants={textLoaderVarinats}
            ></motion.div>
            <h1 className="display-4 fw-bold mb-4 herosection-h1Loader">
              BLENDING <span className="text-primary">STRATEGY</span>,
              <br />
              <span className="text-primary">DESIGN</span> AND
              <span className="text-primary">INNOVATION</span>
            </h1>
          </div>
          <div className="herosection-bottomLoaderParent">
            <motion.div
              className="herosection-bottomLoader"
              variants={textLoaderVarinats}
            ></motion.div>
            <p className="lead mb-4">
              Leveraging technology and innovation to transform your business.
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={navigataeHandler}
            >
              Consult Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
