import React from "react";
import { PrivacyTip, Security, Info } from "@mui/icons-material";
import "./styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const accordionData = [
    {
      id: "sectionOne",
      headingId: "sectionOneHeading",
      title: "Information We Collect",
      icon: <Security style={{ marginRight: "10px" }} />,
      content: (
        <ul>
          <li>Personal information you provide to us directly.</li>
          <li>
            Automatically collected information such as IP address, browser
            type, and usage data.
          </li>
        </ul>
      ),
    },
    {
      id: "sectionTwo",
      headingId: "sectionTwoHeading",
      title: "How We Use Your Information",
      icon: <Info style={{ marginRight: "10px" }} />,
      content: (
        <div>
          <p>
            We use your information to provide, improve, and protect our
            services. Examples include:
          </p>
          <ul>
            <li>Personalizing your experience on our platform.</li>
            <li>Sending important updates and promotional materials.</li>
            <li>Ensuring security and preventing fraud.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "sectionThree",
      headingId: "sectionThreeHeading",
      title: "Protecting Your Information",
      icon: <Security style={{ marginRight: "10px" }} />,
      content: (
        <div>
          <p>
            We implement advanced security measures to protect your information,
            including:
          </p>
          <ul>
            <li>Data encryption during transmission.</li>
            <li>Secure servers with restricted access.</li>
            <li>Regular security audits and updates.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="my-5 py-5 privacy-policy">
      <div className="container py-5">
        <h1 className="text-center mb-4" style={{ color: "var(--bg-primary)" }}>
          <PrivacyTip style={{ fontSize: "40px", marginRight: "10px" }} />
          Privacy Policy
        </h1>
        <p
          className="lead text-center mb-5"
          style={{ color: "var(--dark-gray-color)" }}
        >
          Your privacy is critically important to us. This policy outlines how
          we handle your personal data.
        </p>

        <div className="accordion" id="privacyPolicyAccordion">
          {accordionData.map(({ id, headingId, title, icon, content }) => (
            <div className="accordion-item" key={id}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${id}`}
                  aria-expanded="false"
                  aria-controls={id}
                >
                  {icon}
                  {title}
                </button>
              </h2>
              <div
                id={id}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#privacyPolicyAccordion"
              >
                <div className="accordion-body">{content}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="alert alert-info mt-5"
          role="alert"
          style={{ backgroundColor: "var(--color-lit-visible-light)" }}
        >
          <strong>Note:</strong> By using our services, you agree to the terms
          outlined in this Privacy Policy.
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
