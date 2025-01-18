import React, { useState } from "react";
import "./styles/ContactUs.css";
import Layout from "../components/Layout";
import axios from "axios";
import Toast from "../components/Toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Number: "",
    Subject: "",
    Message: "",
  });

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.Name?.trim() ||
      !formData.Email?.trim() ||
      !formData.Number.trim() ||
      !formData.Subject.trim() ||
      !formData.Message?.trim()
    ) {
      showToast("Please Fill All The Details!", "error");
    } else {
      try {
        await axios.post("http://localhost:8000/send-email", formData);
        showToast("Sent Successfully!", "success");
        setFormData({
          Name: "",
          Email: "",
          Number: "",
          Subject: "",
          Message: "",
        });
      } catch (error) {
        console.error(error);
        showToast("Failed To Send!", "error");
      } finally {
        setFormData({
          Name: "",
          Email: "",
          Number: "",
          Subject: "",
          Message: "",
        });
      }
    }
  };

  return (
    <Layout>
      <div className="contact-page">
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
        <section className="contact-hero-section min-vh-100 d-flex align-items-center pb-5">
          <div className="container text-center">
            <h1 className="display-3 mb-4">
              LET'S GET <span className="text-primary">TALKING</span>
            </h1>
            <p className="lead mb-5">
              We are ready for our next challenge. Reach out to us.
            </p>

            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <form
                  onSubmit={handleSubmit}
                  className="contact-form p-4 bg-white rounded shadow"
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="Number"
                      value={formData.Number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="Subject"
                      value={formData.Subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      name="Message"
                      value={formData.Message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary px-4 py-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
