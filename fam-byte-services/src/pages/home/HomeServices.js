import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
// import Laptop from "../../assets/laptop.png";

//import mui
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

// Import Swiper and Bootstrap styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const HomeServices = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "DIGITAL TRANSFORMATION",
      description:
        "Comprehensive digital transformation and strategy consulting services",
      icon: "bi bi-lightbulb",
      list: [
        "Technology & Ecosystem Audit",
        "Digital Strategy",
        "Digital Marketing",
        "Digital Analytics",
      ],
    },
    {
      id: 2,
      title: "UI/UX & DESIGN THINKING",
      description: "Creating intuitive and engaging user experiences",
      icon: "bi bi-palette",
      list: ["Branding", "UX Strategy", "Mobile & Web Design"],
    },
    {
      id: 4,
      title: "MOBILE ENGINEERING",
      description: "Native and cross-platform mobile app development",
      icon: "bi bi-phone",
      list: [
        "Android Development",
        "IOS Development",
        "React Native Development",
        "Wearable Development",
        "Hybrid Development",
      ],
    },
    {
      id: 3,
      title: "WEB TECHNOLOGY DEVELOPMENT",
      description: "Building scalable and responsive web applications",
      icon: "bi bi-code-square",
      list: [
        "Content Management Systems",
        "E-Commerce Platforms",
        "Custom Web Applications",
      ],
    },
    {
      id: 4,
      title: "INNOVATION TECHNOLOGY",
      description:
        "Driving future-ready solutions through cutting-edge technologies.",
      icon: "bi bi-phone",
      list: [
        "Augmented & Virtual Reality",
        "Machine Learning & AI",
        "Internet of Things",
        "Blockchain",
        "Cyber Security",
      ],
    },
    {
      id: 5,
      title: "ENTERPRISE APP DEVELOPMENT",
      description: "Cloud infrastructure and deployment services",
      icon: "bi bi-cloud",
      list: [
        "Enterprise Resource Planning",
        "Point of Sale",
        "Customer Relation Management",
        "Data & Workflow Automation",
        "Business Intelligence",
      ],
    },
    {
      id: 6,
      title: "PERFORMANCE ENGINEERING",
      description: "Artificial Intelligence and Machine Learning solutions",
      icon: "bi bi-cpu",
      list: [
        "Quality Assurance as a Service",
        "Cloud Architecture Engineering & Optimization",
      ],
    },
  ];

  return (
    <section className="services-section py-5 mb-5">
      <div className="container">
        <div className="row mb-2">
          <div className="col-12 text-center">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="lead"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Discover how we can help transform your business
            </motion.p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="services-swiper-slide">
              <div className="card">
                {/* <div className="home-services-section-spiral"></div> */}
                <motion.div className="card-body text-start ps-4 p2-2 py-4">
                  <motion.h5
                    className="card-title fw-bold mb-2"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h5>
                  <motion.p
                    className="card-text text-muted"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                  {service.list && (
                    <ul className="list-unstyled">
                      {service.list.map((lis, index) => (
                        <motion.li
                          key={index}
                          className="mb-2 d-flex align-items-start"
                          variants={textVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <LabelImportantIcon
                            className="me-1 text-primary"
                            style={{ marginBottom: "-3px" }}
                          />
                          {lis}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeServices;
