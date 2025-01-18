import React from "react";
import {
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container">
        <div className="row">
          {/* Company Info Column */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h4 className="text-white mb-4">fambyte</h4>
            <p className="text-muted">
              We discover, design & build strategy to help brands achieve
              digital transformation through innovation.
            </p>
            <div className="social-icons mt-3">
              <a href="#" className="me-3 text-primary">
                <LinkedIn />
              </a>
              <a href="#" className="me-3 text-primary">
                <Facebook />
              </a>
              <a href="#" className="me-3 text-primary">
                <Twitter />
              </a>
              <a href="#" className="me-3 text-primary">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-white mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Digital Transformation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Product Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  UI/UX Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Cloud Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  AI & ML Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Case Studies
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Industries
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-white mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 text-muted">
                <LocationOn className="me-2" />
                123 Innovation Street, Tech City, 12345
              </li>
              <li className="mb-3 text-muted">
                <Phone className="me-2" />
                +1 234 567 8900
              </li>
              <li className="mb-3 text-muted">
                <Email className="me-2" />
                info@fambyte.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted mb-0">
              © {new Date().getFullYear()} fambyte. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-muted text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-muted text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
