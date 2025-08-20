// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-theme text-light">
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-4 col-md-6 item">
              <div className="f-item about">
                <img src="/img/logo.png" alt="Logo" />
                <p>
                  Be part of our dynamic research and innovation journey. Collaborate with us on impactful multisectoral research, policies, and evidence based projects that drive real change. Follow us on social media to stay informed on our latest initiatives.
                </p>

                <a href="#" className="btn btn-success">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-success">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-success">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-success">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>

            {/* Quick Link Section */}
            <div className="col-lg-2 col-md-6 item">
              <div className="f-item link">
                <h4 className="widget-title">Quick Link</h4>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fas fa-angle-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="#aboutus">
                      <i className="fas fa-angle-right"></i> About us
                    </a>
                  </li>
                  <li>
                    <a href="#themes">
                      <i className="fas fa-angle-right"></i> Themes
                    </a>
                  </li>
                  <li>
                    <a href="#blog">
                      <i className="fas fa-angle-right"></i> Our Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Themes Section */}
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item link">
                <h4 className="widget-title">Themes</h4>
                <ul>
                  <li>
                    <a href="#economic_growth">
                      <i className="fas fa-angle-right"></i> Economic Growth &amp; Digital Transformation
                    </a>
                  </li>
                  <li>
                    <a href="#financial_sector">
                      <i className="fas fa-angle-right"></i> Financial Sector Reforms and Private Financing
                    </a>
                  </li>
                  <li>
                    <a href="#social_protection">
                      <i className="fas fa-angle-right"></i> Social Protection
                    </a>
                  </li>
                  <li>
                    <a href="#good_governance">
                      <i className="fas fa-angle-right"></i> Good Governance
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="col-lg-3 col-md-6 item" id="contact">
              <div className="f-item contact-widget">
                <h4 className="widget-title">Contact Info</h4>
                <div className="address">
                  <ul>
                    <li>House No. 2, Old Airport Road, Kiembesamaki, Zanzibar.</li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="content">
                        <strong>Opening Hours:</strong> 8:00 AM – 5:00 PM
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="content">
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+2557775242400">+255 7775 242 400</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="content">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:info@zrcp.or.tz">info@zrcp.or.tz</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-box">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p style={{ color: "black" }}>
                  &copy; Copyright 2025. All Rights Reserved by Zanzibar Research Centre for Socio-economic and Policy Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Shape */}
      <div className="fixed-shape-left">
        <img src="/img/shape/5.png" alt="Shape" />
      </div>
    </footer>
  );
};

export default Footer;
