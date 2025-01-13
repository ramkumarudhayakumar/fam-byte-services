import React from "react";
import "./styles/UiCommonStyles.css";
import { useNavigate } from "react-router-dom";

//import mui

export default function ContactButton() {
  const navigate = useNavigate();

  const navigataeHandler = () => {
    navigate("/contact-us");
  };
  return (
    // Consult Now Button
    <div>
      <button
        className="btn btn-primary rounded-pill consult-btn"
        onClick={navigataeHandler}
      >
        Consult Now
      </button>
    </div>
  );
}
