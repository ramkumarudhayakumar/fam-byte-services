import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../styles/services/OurServices.css";

const services = [
  { title: "Web Development", icon: "🌐" },
  { title: "Mobile App Development", icon: "📱" },
  { title: "UI/UX Design", icon: "🎨" },
  { title: "Cloud Solutions", icon: "☁️" },
  { title: "AI & Machine Learning", icon: "🤖" },
  { title: "Blockchain Development", icon: "🔗" },
  { title: "IoT Solutions", icon: "🔌" },
];

function OurServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="ourServices">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="service-icon">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero et venenatis commodo.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
