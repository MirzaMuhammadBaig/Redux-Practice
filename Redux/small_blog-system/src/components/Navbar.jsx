import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Blogs from "./Blogs";

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/Blogs"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blogs
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Islam">
                        Islam
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Politics">
                        Politics
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Bussiness">
                        Bussiness
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Sport">
                        Sport
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Computer">
                        Computer
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Tourism">
                        Tourism
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Fashion">
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Photography">
                        Photography
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/Food">
                        Food
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Blogs/others">
                        Others
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Create Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
