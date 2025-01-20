"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/aboutUs/AboutTeam.css";
import bg from "../../assets/sample.jpg";

//import mui
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const testimonials = [
  {
    id: 1,
    logo: "/kluo-logo.png",
    company: "Kluo App",
    testimonial:
      "We were looking for a company to see our vision, understand our target market and deliver on time. To get the best of both worlds is fairly hard to get and we were able to pick this up with doodleblue, so we are delighted.",
    name: "Tyler Sellars",
    position: "CEO at Kluo App",
    bgColor: bg,
  },
  {
    id: 2,
    logo: "/eshakti-logo.png",
    company: "eShakti",
    testimonial:
      "Simply put dedication to work, client-centric engagement, high-quality delivery, desire to deliver beyond the promise, convenience of engagement are some of the traits one will come across when partnering with doodleblue.",
    name: "Varun L",
    position: "Product Manager, eShakti",
    bgColor: "#ffffff",
  },
  {
    id: 3,
    logo: "/beezer-logo.png",
    company: "Beezer Golf LLC",
    testimonial:
      "The doodleblue team helped us build the best golf game app in the market. The app has a very comprehensive golf scorecard. Its UI is a step ahead of the competition. The doodleblue development team had great iOS development and UX expertise.",
    name: "Antonio Casacuberta",
    position: "Founder, Beezer Golf LLC",
    bgColor: "#ffffff",
  },
  {
    id: 4,
    logo: "/crayon-logo.png",
    company: "CrayonData",
    testimonial:
      "We have been quite impressed with the skill level and flexibility they offered us. doodleblue has always helped us work towards the best solutions. They deliver on time with the highest standards and quality.",
    name: "Priyanshu Mishra",
    position: "CrayonData",
    bgColor: "#ffffff",
  },
  {
    id: 5,
    logo: "/crayon-logo.png",
    company: "CrayonData",
    testimonial:
      "We have been quite impressed with the skill level and flexibility they offered us. doodleblue has always helped us work towards the best solutions. They deliver on time with the highest standards and quality.",
    name: "Priyanshu Mishra",
    position: "CrayonData",
    bgColor: "#ffffff",
  },
  {
    id: 6,
    logo: "/crayon-logo.png",
    company: "CrayonData",
    testimonial:
      "We have been quite impressed with the skill level and flexibility they offered us. doodleblue has always helped us work towards the best solutions. They deliver on time with the highest standards and quality.",
    name: "Priyanshu Mishra",
    position: "CrayonData",
    bgColor: "#ffffff",
  },
  {
    id: 7,
    logo: "/crayon-logo.png",
    company: "CrayonData",
    testimonial:
      "We have been quite impressed with the skill level and flexibility they offered us. doodleblue has always helped us work towards the best solutions. They deliver on time with the highest standards and quality.",
    name: "Priyanshu Mishra",
    position: "CrayonData",
    bgColor: "#ffffff",
  },
];

export default function AboutTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  const prevRef = useRef(null);

  const nextRef = useRef(null);

  const swiperRef = useRef(null);

  const cardBodyRef = useRef(null);

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
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heading = document.querySelector(".AboutTeam-moving-heading");
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
      const heading = document.querySelector(".AboutTeam-moving-heading");
      if (heading) {
        heading.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        heading.style.transition = "transform 0.3s ease-out";
      }
    };

    const headingElement = document.querySelector(".AboutTeam-moving-heading");
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

  const cardHoverActiveClassHandler = () => {
    if (cardBodyRef.current) {
      cardBodyRef.current.classList.add("active");

      return () => cardBodyRef.current.classList.remove("active");
    }
  };

  return (
    <section className="AboutTeam py-3 py-md-5">
      <div className="container-fluid px-3 px-md-4">
        <div className="row mb-3 mb-md-5">
          <div className="col-12">
            {/* <h2
              ref={textRef}
              className={`testimonial-title text-dark text-center mb-2
            ${isVisible ? "is-visible" : ""}`}
            >
              Our Team
            </h2> */}
            <h1 className="AboutTeam-moving-heading text-center">Our Team</h1>
          </div>
        </div>
        <div className="AboutTeam-swiper-parent py-3 py-md-5">
          <Swiper
            modules={[Navigation, Pagination]}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={false}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                if (index < 4) {
                  return `<span class="${className}"></span>`;
                }
                return "";
              },
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1380: { slidesPerView: 4, spaceBetween: 30 },
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="testimonial-card"
                  onClick={cardHoverActiveClassHandler}
                >
                  <img
                    src={item.bgColor || "/placeholder.svg"}
                    alt="team"
                    className="img-fluid testimonial-card-img"
                    loading="lazy"
                  />
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="client-info pb-3 pb-md-4">
                      <h4 className="client-name">{item.name}</h4>
                      <p className="client-position">{item.position}</p>
                    </div>
                    <p className="testimonial-text mt-3 mt-md-4">
                      {item.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination"></div>

            <div className="swiper-custom-navigation">
              <button
                ref={nextRef}
                className="swiper-button-next-custom btn ms-2 ms-md-3"
              >
                <KeyboardDoubleArrowLeftIcon className="text-light" />
              </button>
              <button
                ref={prevRef}
                className="swiper-button-prev-custom btn ms-2 ms-md-3"
              >
                <KeyboardDoubleArrowRightIcon className="text-light" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
