import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

//import css
import "../styles/services/RecentWork.css";

const RecentWork = () => {
  const projects = [
    {
      title: "BLENDING STRATEGY,",
      subtitle: "DESIGN",
      endText: "AND INNOVATION",
      description:
        "Leveraging technology and innovation to transform your business.",
      image: "https://source.unsplash.com/random/800x600?tech,1",
    },
    {
      title: "DIGITAL SOLUTIONS,",
      subtitle: "DEVELOPMENT",
      endText: "AND GROWTH",
      description:
        "Creating cutting-edge digital experiences for modern businesses.",
      image: "https://source.unsplash.com/random/800x600?tech,2",
    },
    {
      title: "CREATIVE THINKING,",
      subtitle: "STRATEGY",
      endText: "AND EXECUTION",
      description:
        "Turning innovative ideas into successful digital realities.",
      image: "https://source.unsplash.com/random/800x600?tech,3",
    },
  ];

  return (
    <div className="services-recent-work pb-5 ps-2">
      <div className="container">
        <h2 className="text-center mb-3 display-4 fw-bold animate__animated animate__fadeInDown">
          Recent Work
        </h2>

        <Swiper
          effect={"cards"}
          cardsEffect={{
            slideShadows: false, // Disable slide shadows
            shadow: false, // Disable card shadows
          }}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          loop
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="card text-white overflow-hidden my-3">
                <img
                  src={project.image || "/placeholder.svg"}
                  className="card-img h-100 w-100 object-fit-cover"
                  alt={project.title}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center bg-opacity-75">
                  <div className="text-center">
                    <h3 className="card-title d-flex flex-column mb-3 animate__animated animate__fadeInUp animate__delay-1s">
                      <div>
                        <span className="text-dark">{project.title}</span>
                        &nbsp;
                        <span className="text-primary">{project.subtitle}</span>
                      </div>
                      <span className="text-dark">{project.endText}</span>
                    </h3>
                    <p className="card-text mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                      {project.description}
                    </p>
                    <button className="btn btn-primary btn-lg rounded-pill px-4 py-2 animate__animated animate__fadeInUp animate__delay-3s">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentWork;
