import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Layout.css";
import { FaBarsStaggered } from "react-icons/fa6";

function Layout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavResponsiveOpen, setIsResponsiveNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 layout">
      <header
        className={`fixed-top ${isScrolled ? "scrolled" : ""} ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <NavLink to="/" className="navbar-brand fw-bold">
              fambyte
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <FaBarsStaggered />
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""} `}
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to="/gen-ai" className="nav-link">
                    Gen AI COEx
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/industries" className="nav-link">
                    Industries
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/success-stories" className="nav-link">
                    Success Stories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/careers" className="nav-link">
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blogs" className="nav-link">
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="nav-indicator"></div>
      </header>
      <div className={`responsive-nav`}>
        <button
          className={`navbar-large-screen  ${isScrolled ? "scrolled" : ""}`}
          type="button"
          onClick={() => setIsResponsiveNavOpen(!isNavResponsiveOpen)}
        >
          <FaBarsStaggered className="text-light" />
        </button>
        {isScrolled && (
          <div
            className={`responsive-navbar-nav-divisions ${
              isNavResponsiveOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto bg-white shadow">
              <li className="nav-item">
                <NavLink to="/gen-ai" className="nav-link">
                  Gen AI COEx
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/industries" className="nav-link">
                  Industries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/success-stories" className="nav-link">
                  Success Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/careers" className="nav-link">
                  Careers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blogs" className="nav-link">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      <main className="flex-grow-1">{children}</main>
    </div>
  );
}

export default Layout;
