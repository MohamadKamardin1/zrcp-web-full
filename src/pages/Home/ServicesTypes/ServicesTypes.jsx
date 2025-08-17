// src/pages/Home/ServicesTypes/ServicesTypes.jsx

import React from "react";
import "./ServicesTypes.css";

const ServicesTypes = () => {
  return (
    <div className="services-types-area shadow overflow-hidden bg-theme text-light default-padding">
      <div className="fixed-shape">
        <img src="img/shape/10.png" alt="Shape" />
      </div>
      <div className="container">
        <div className="row align-center">
          <div className="buble-shape">
            <img src="img/shape/bubble-light.png" alt="Bubble" />
          </div>
          <div className="col-lg-12">
            <div className="services-type-items services-type-carousel owl-carousel owl-theme">
              <div className="item" id="theme0">
                <div className="row align-center">
                  <div className="col-lg-6 content">
                    <h5>Thematic Areas</h5>
                    <h2>Economic Growth &amp; Digital Transformation:</h2>
                    <h1 className="thematic">
                      Unlock the potential emerging from the digital economy to drive structural transformation within and between Zanzibar’s strategic sectors.
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <div className="thumb">
                      <img src="img/digital_transformation.jpg" className="themes" alt="Thumb" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item" id="theme1">
                <div className="row align-center">
                  <div className="col-lg-6 content">
                    <h5 className="thematic">Thematic Areas</h5>
                    <h2>Financial Sector Reforms and Private Financing</h2>
                    <h1 className="thematic">
                      Generate empirical evidence to guide the financial sector’s reforms, support the domestic revenue collection, and foster innovative financing and private investments.
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <div className="thumb">
                      <img src="img/financial_sector.png" className="themes" alt="Thumb" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item" id="theme2">
                <div className="row align-center">
                  <div className="col-lg-6 content">
                    <h5 className="thematic">Thematic Areas</h5>
                    <h2>Social Protection</h2>
                    <h1 className="thematic">
                      Explore ways to create robust and efficient social welfare systems and the formalization of informal workers and enterprises.
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <div className="thumb">
                      <img src="img/social_protection.jpg" className="themes" alt="Thumb" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="item" id="theme3">
                <div className="row align-center">
                  <div className="col-lg-6 content">
                    <h5 className="thematic">Thematic Areas</h5>
                    <h2>Good Governance:</h2>
                    <h1 className="thematic">
                      Promoting integrity and accountability in public services delivery and equitable access to natural assets.
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <div className="thumb">
                      <img src="img/good_governance.png" className="themes" alt="Thumb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTypes;
