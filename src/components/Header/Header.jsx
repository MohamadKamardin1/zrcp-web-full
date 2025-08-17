// src/components/Header.jsx
import React from "react";
import './Header.css'
const Header = () => {
  return (
    <>
      {/* Header Top */}
      <div className="top-bar-area multi-content bg-dark text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-3 logo">
              <a href="index2.html">
                <img
                  src="img/logo.png"
                  className="logo"
                  alt="Logo"
                />
              </a>
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
                    <a className="navbar-brand" href="index.html">
                      <img
                        src="img/logo.png"
                        className="logo"
                        alt="Logo"
                      />
                    </a>
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
                          <a href="#" className="active" data-toggle="dropdown">
                            Home
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            href="about.html"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            About Us
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="about.html#board">Board Members</a>
                            </li>
                            <li>
                              <a href="about.html#management">Management</a>
                            </li>
                            <li>
                              <a href="about.html#associates">
                                Research Associates
                              </a>
                            </li>
                            <li>
                              <a href="about.html#team">Team</a>
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
                            href="#"
                            className="dropdown-toggle active"
                            data-toggle="dropdown"
                          >
                            Publications
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="research.html">Research & Policy</a>
                            </li>
                            <li>
                              <a href="projects_and_events.html#project">
                                Project
                              </a>
                            </li>
                            <li>
                              <a href="projects_and_events.html#events">Events</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle "
                            data-toggle="dropdown"
                          >
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="./blog/Economic & Digital Transformation/Economic & Digital Transformation.html">
                                Economic & Digital Transformation
                              </a>
                            </li>
                            <li>
                              <a href="./blog/Public & Private Financing/Public & Private Financing.html">
                                Public & Private Financing
                              </a>
                            </li>
                            <li>
                              <a href="./blog/Social Protection/Social Protection.html">
                                Social Protection
                              </a>
                            </li>
                            <li>
                              <a href="./blog/Good Governance/Good Governance.html">
                                Good Governance
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#contact">contact</a>
                        </li>
                        <li>
                          <a href="#">Nyota Hub</a>
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
                      <img src="img/logo.png" alt="Logo" />
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
