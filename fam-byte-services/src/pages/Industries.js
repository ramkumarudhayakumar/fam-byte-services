import React from "react";
import Layout from "../components/Layout";

function Industries() {
  const industries = [
    {
      name: "Healthcare",
      description: "Digital solutions for modern healthcare challenges",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Finance",
      description: "Innovative fintech solutions and banking systems",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Retail",
      description: "E-commerce and retail technology solutions",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Education",
      description: "EdTech solutions for the future of learning",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing and Industry 4.0 solutions",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Logistics",
      description: "Supply chain and logistics management systems",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <Layout>
      <div className="container py-5">
        <h1 className="text-center mb-5">Industries We Serve</h1>
        <div className="row g-4">
          {industries.map((industry, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={industry.image}
                  className="card-img-top"
                  alt={industry.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{industry.name}</h5>
                  <p className="card-text">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Industries;
