import React from "react";
import Layout from "../components/Layout";

function Services() {
  const services = [
    {
      title: "Digital Transformation",
      description:
        "Modernize your business with cutting-edge digital solutions",
      icon: "🚀",
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions for your unique needs",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "Create engaging and intuitive user experiences",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure",
      icon: "☁️",
    },
    {
      title: "AI & Machine Learning",
      description: "Implement intelligent solutions for your business",
      icon: "🤖",
    },
    {
      title: "Mobile App Development",
      description: "Build powerful and responsive mobile applications",
      icon: "📱",
    },
  ];

  return (
    <Layout>
      <div className="container py-5">
        <h1 className="text-center mb-5">Our Services</h1>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-4 mb-3">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Services;
