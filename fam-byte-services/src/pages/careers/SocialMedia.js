import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "../styles/career/SocialMedia.css";
import {
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
  GitHub,
  YouTube,
} from "@mui/icons-material";

function SocialMedia() {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [textRef, textVisible] = useIntersectionObserver();
  const [iconsRef, iconsVisible] = useIntersectionObserver();

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: LinkedIn,
      url: "https://www.linkedin.com/company/doodleblue-innovations/",
      color: "#0077B5",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/doodleblue",
      color: "#1DA1F2",
    },
    {
      platform: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/doodleblue/",
      color: "#E4405F",
    },
    {
      platform: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/doodleblue",
      color: "#1877F2",
    },
  ];

  return (
    <section className="social-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              ref={headerRef}
              className={`fade-up ${headerVisible ? "visible" : ""}`}
            >
              <h2 className="display-4 mb-3 fw-bold text-primary">
                Connect With Us
              </h2>
            </div>

            <div
              ref={textRef}
              className={`fade-up ${textVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="lead text-muted mb-5">
                Join our community and stay updated with the latest innovations
                and opportunities at doodleblue
              </p>
            </div>

            <div
              ref={iconsRef}
              className={`d-flex justify-content-center gap-4 flex-wrap stagger-fade-in ${
                iconsVisible ? "visible" : ""
              }`}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    "--hover-color": social.color,
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
