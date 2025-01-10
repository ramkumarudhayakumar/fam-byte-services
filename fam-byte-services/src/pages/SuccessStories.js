import React from "react";
import Layout from "../components/Layout";

function SuccessStories() {
  const stories = [
    {
      title: "Healthcare Platform Transformation",
      client: "Major Healthcare Provider",
      description: "Revolutionized patient care with digital solutions",
      result: "50% increase in efficiency",
    },
    {
      title: "E-commerce Platform Development",
      client: "Retail Giant",
      description: "Built scalable e-commerce solution",
      result: "200% increase in online sales",
    },
    {
      title: "FinTech App Development",
      client: "Leading Bank",
      description: "Created innovative banking app",
      result: "1M+ active users",
    },
    {
      title: "Supply Chain Optimization",
      client: "Global Manufacturer",
      description: "Implemented AI-driven supply chain management",
      result: "30% reduction in operational costs",
    },
  ];

  return (
    <Layout>
      <div className="container py-5">
        <h1 className="text-center mb-5">Success Stories</h1>
        <div className="row g-4">
          {stories.map((story, index) => (
            <div key={index} className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {story.client}
                  </h6>
                  <p className="card-text">{story.description}</p>
                  <div className="mt-3 p-3 bg-light rounded">
                    <strong>Result:</strong> {story.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default SuccessStories;
