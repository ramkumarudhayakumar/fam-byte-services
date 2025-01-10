import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import "./styles/brands-section.css";

function Home() {
  const [isPaused, setIsPaused] = useState(false);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="container">
        <div className="row min-vh-100 align-items-center text-center">
          <div className="col-12">
            <h1 className="display-4 fw-bold mb-4">
              BLENDING <span className="text-primary">STRATEGY</span>,
              <br />
              <span className="text-primary">DESIGN</span> AND{" "}
              <span className="text-primary">INNOVATION</span>
            </h1>
            <p className="lead mb-4">
              Leveraging technology and innovation to transform your business.
            </p>
            <button className="btn btn-primary btn-lg">Consult Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
