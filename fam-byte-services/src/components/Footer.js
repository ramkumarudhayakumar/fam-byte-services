import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Doodleblue</h5>
            <p>Empowering businesses with innovative AI solutions.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@doodleblue.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2023 Doodleblue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
