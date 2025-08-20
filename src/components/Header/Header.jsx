// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
      {/* Header Top */}
      <div className="top-bar-area multi-content bg-dark text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-3 logo">
              <Link to="/index2.html">
                <img
                  src="/img/logo.png"
                  className="logo"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="col-lg-9 info item-flex space-between">
              <ul>
                <li>
                  <h3 id="logo_name" className="logo_name">
                    Zanzibar Research Centre for Socio-economic and policy analysis
                  </h3>
                  {/* <i className="fas fa-clock"></i> Working Hours: 8:00 AM – 5:00 PM */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header id="home">
        <div className="container box-nav">
          <div className="row">
            {/* Navigation */}
            <nav className="navbar top-less logo-less white navbar-default navbar-fixed dark bootsnav on no-full nav-box no-background">
              <div className="container nav-container">
                <div className="row">
                  {/* Header Navigation */}
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#navbar-menu"
                    >
                      <i className="fa fa-bars"></i>
                    </button>
                    <Link className="navbar-brand" to="/index.html">
                      <img
                        src="/img/logo.png"
                        className="logo"
                        alt="Logo"
                      />
                    </Link>
                  </div>

                  {/* Navbar Collapse */}
                  <div className="col-lg-12">
                    <div className="collapse navbar-collapse" id="navbar-menu">
                      <ul
                        className="nav navbar-nav navbar-left"
                        data-in="fadeInDown"
                        data-out="fadeOutUp"
                      >
                        <li>
                          <Link to="/home" className="active" data-toggle="dropdown">
                            Home
                          </Link>
                        </li>
                        <li className="dropdown">
                          <Link
                            to="/About"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            About Us
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/Board">Board Members</Link>
                            </li>
                            <li>
                              <Link to="/Management">Management</Link>
                            </li>
                            <li>
                              <Link to="/Assosiate">Research Associates</Link>
                            </li>
                            <li>
                              <Link to="/Team">Team</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="about.html#themes"
                            className="dropdown-toggle "
                          >
                            Focus Areas
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            href="/project-research"
                            className="dropdown-toggle active"
                            data-toggle="dropdown"
                          >
                            Publications
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/research">Research & Policy</Link>
                            </li>
                            <li>
                              <Link to="/projects">Project</Link>
                            </li>
                            <li>
                              <Link to="/events">Events</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {/* Blog block simplified to a single link to /blog */}
                          <Link to="/blog" className="dropdown-toggle">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <a href="/contact">contact</a>
                        </li>
                        <li>
                          <a href="/nyotahub">Nyota Hub</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Side Menu */}
                  <div className="side">
                    <a href="#" className="close-side">
                      <i className="icon_close"></i>
                    </a>
                    <div className="widget">
                      <img src="/img/logo.png" alt="Logo" />
                    </div>
                    <div className="widget address">
                      <div>
                        <ul>
                          <li>
                            <div className="content">
                              <p>Address</p>
                              <strong>
                                House No. 2, Old Airport Road, Kiembesamaki,
                                Zanzibar.
                              </strong>
                            </div>
                          </li>
                          <li>
                            <div className="content">
                              <p>Email</p>
                              <strong>info@zrcp.or.tz</strong>
                            </div>
                          </li>
                          <li>
                            <div className="content">
                              <p>Contact</p>
                              <strong>+255 7775 242 400</strong>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="widget social">
                      <ul className="link">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Side Menu */}
                </div>
              </div>
            </nav>
            {/* End Navigation */}
          </div>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
