// src/components/ServicesSection.jsx
import React from "react";
import './Services.css'
const Service= () => {
  return (
    <div id="themes" className="services-style-three-area relative text-center default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4>What we Offer</h4>
              <h2>Recent Research </h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Single Item */}
          <div className="services-style-three col-lg-4 col-md-6">
            <div className="style-three-item item">
              <div
                className="shape"
                style={{ backgroundImage: "url(/assets/img/shape/21.png)" }}
              ></div>
              <h4>
                <a
                  href="/assets/pdf/economic_and_digital_transformation_research.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Embracing Technology and Innovation for catalyzing a Vibrant Startup Ecosystem in Zanzibar
                </a>
              </h4>
            </div>
          </div>
          {/* End Single Item */}

          {/* Single Item */}
          <div className="services-style-three col-lg-4 col-md-6">
            <div className="style-three-item item active">
              <div
                className="shape"
                style={{ backgroundImage: "url(/assets/img/shape/21.png)" }}
              ></div>
              <h4>
                <a
                  href="/assets/pdf/public_research.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Levelling up the Local Context Engagement for The Inclusive Socio-economic Transformation and Sustainable Human Development in Zanzibar
                </a>
              </h4>
            </div>
          </div>
          {/* End Single Item */}

          {/* Single Item */}
          <div className="services-style-three col-lg-4 col-md-6">
            <div className="style-three-item item">
              <div
                className="shape"
                style={{ backgroundImage: "url(/assets/img/shape/21.png)" }}
              ></div>
              <h4>
                <a
                  href="/assets/pdf/social_protection.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Malaria in Zanzibar: An Economic and Social Burden Transformed
                </a>
              </h4>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>

      <div
        className="shape-bottom"
        style={{ backgroundImage: "url(/assets/img/shape/33.png)" }}
      ></div>
    </div>
  );
};

export default Service;
