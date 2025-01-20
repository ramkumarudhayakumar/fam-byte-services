import React from "react";
import { useNavigate } from "react-router-dom";
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
            {/* <motion.div
              className="herosection-topLoader"
              style={{ background: `var(--bg-primary)` }}
              variants={textLoaderVarinats}
            ></motion.div> */}
            <motion.h1
              className="display-4 fw-bold mb-4 herosection-h1Loader"
              variants={textLoaderVarinats}
            >
              BLENDING <span className="text-primary">STRATEGY</span>,
              <br />
              <span className="text-primary">DESIGN</span> AND
              <span className="text-primary">INNOVATION</span>
            </motion.h1>
          </div>
          <div className="herosection-bottomLoaderParent">
            {/* <motion.div
              className="herosection-bottomLoader"
              variants={textLoaderVarinats}
            ></motion.div> */}
            <motion.p className="lead mb-4" variants={textLoaderVarinats}>
              Leveraging technology and innovation to transform your business.
            </motion.p>
            <motion.div variants={textLoaderVarinats}>
              <button
                className="btn btn-primary btn-lg"
                onClick={navigataeHandler}
              >
                Consult Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
