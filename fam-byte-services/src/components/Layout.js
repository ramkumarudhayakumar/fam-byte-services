import React, { useState } from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="fixed-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand fw-bold">
              fambyte
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/gen-ai" className="nav-link">
                    Gen AI COEx
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/industries" className="nav-link">
                    Industries
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/success-stories" className="nav-link">
                    Success Stories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/careers" className="nav-link">
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow-1">{children}</main>
      <footer className="bg-light py-4">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 fambyte. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
