import React, { useState, useEffect, useRef } from "react";
import { Star, TrendingUp, People, AttachMoney } from "@mui/icons-material";
import "../styles/successStories/SuccessStoriesChild.css";

const stories = [
  {
    title: "Healthcare Platform Transformation",
    client: "Major Healthcare Provider",
    description: "Revolutionized patient care with digital solutions",
    result: "50% increase in efficiency",
    icon: <Star className="story-icon" />,
  },
  {
    title: "E-commerce Platform Development",
    client: "Retail Giant",
    description: "Built scalable e-commerce solution",
    result: "200% increase in online sales",
    icon: <TrendingUp className="story-icon" />,
  },
  {
    title: "FinTech App Development",
    client: "Leading Bank",
    description: "Created innovative banking app",
    result: "1M+ active users",
    icon: <People className="story-icon" />,
  },
  {
    title: "Supply Chain Optimization",
    client: "Global Manufacturer",
    description: "Implemented AI-driven supply chain management",
    result: "30% reduction in operational costs",
    icon: <AttachMoney className="story-icon" />,
  },
];

const SuccessStoriesChild = () => {
  const [visibleStories, setVisibleStories] = useState([]);
  const storyRefs = useRef(stories.map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStories((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    storyRefs.current.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-light">
      <div className="success-stories container py-5">
        <h1 className="text-center mb-5 animated-title">Success Stories</h1>
        <div className="story-grid">
          {stories.map((story, index) => (
            <div
              key={index}
              ref={storyRefs.current[index]}
              data-index={index}
              className={`story-card-wrapper ${
                visibleStories.includes(index.toString()) ? "visible" : ""
              }`}
            >
              <div className="card custom-card">
                <div className="icon-wrapper mb-3">{story.icon}</div>
                <h5 className="card-title">{story.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {story.client}
                </h6>
                <p className="card-text">{story.description}</p>
                <div className="result">
                  <strong>Result:</strong> {story.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesChild;
