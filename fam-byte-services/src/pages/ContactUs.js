import React, { useState } from "react";
import "./styles/ContactUs.css";
import Layout from "../components/Layout";
import axios from "axios";

export default function ContactUs() {
  const [formData, setState] = useState({
    Name: "",
    Email: "",
    Number: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    setState({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      // setSnackbar({
      //   ...snackbar,
      //   open: true,
      //   snackMessage: "Please Fill All The Details!",
      //   snackColor: "#B22222",
      // });
      console.log("Please Fill All The Details!");
    } else {
      try {
        await axios.post("http://localhost:3000/send-email", formData);
        // setSnackbar({
        //   ...snackbar,
        //   open: true,
        //   snackMessage: "Sent Successfully!",
        //   snackColor: "var( --Text-Light)",
        // });
        console.log("Sent Successfully!");
      } catch (error) {
        console.error(error);
        // setSnackbar({
        //   ...snackbar,
        //   open: true,
        //   snackMessage: "Failed To Send!",
        //   snackColor: "#B22222",
        // });
        console.log("Failed To Send!");
      } finally {
        setState({
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
      <div className="contact-page ">
        {/* Navigation */}

        {/* Hero Section */}
        <section className="hero-section min-vh-100 d-flex align-items-center pb-5">
          <div className="container text-center">
            <h1 className="display-3 mb-4">
              LET'S GET <span className="text-primary">TALKING</span>
            </h1>
            <p className="lead mb-5">
              We are ready for our next challenge. Reach out to us.
            </p>

            {/* Contact Form */}
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
