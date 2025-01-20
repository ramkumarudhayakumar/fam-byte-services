import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

//import css
import "../styles/services/RecentWork.css";

const RecentWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heading = document.querySelector(".services-recent-work-movingH1");
      if (heading) {
        const rect = heading.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Reduce the rotation sensitivity
        const rotateX = (e.clientY - centerY) * 0.02; // Subtle effect
        const rotateY = (centerX - e.clientX) * 0.02;

        // Apply a smaller scale for a minimal effect
        heading.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      }
    };

    const handleMouseLeave = () => {
      const heading = document.querySelector(".services-recent-work-movingH1");
      if (heading) {
        heading.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        heading.style.transition = "transform 0.3s ease-out";
      }
    };

    const headingElement = document.querySelector(
      ".services-recent-work-movingH1"
    );
    if (headingElement) {
      headingElement.addEventListener("mousemove", handleMouseMove);
      headingElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (headingElement) {
        headingElement.removeEventListener("mousemove", handleMouseMove);
        headingElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

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
        {/* <h2
          ref={textRef}
          className={`text-center text-dark display-4 animate__animated animate__fadeInDown
            ${isVisible ? "is-visible" : ""} `}
        >
          Recent Work
        </h2> */}
        <h1 className="services-recent-work-movingH1 text-center">
          Recent Work
        </h1>

        <Swiper
          touchStartPreventDefault={false}
          touchMoveStopPropagation={true}
          effect={"cards"}
          cardsEffect={{
            slideShadows: false,
            shadow: false,
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
