import React from "react";

const AboutIntro = () => {
  return (
    <div className="about-us-area overflow-hidden default-padding">
      <div className="container">
        <div className="about-items">
          <div className="row align-center">
            <div className="col-lg-6">
              <div className="thumb">
                <img src="/img/team/mohamedHafidh.jpeg" alt="Thumb" />
                <img src="/img/aboutusmini.png" alt="Thumb" />
                <div className="experience">
                  <h2>4</h2>
                  <h4>Years Experiences</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 info">
              <h2>About Us</h2>
              <p>
                Zanzibar Research Centre for Socio-Economic and Policy Analysis (ZRCP) was established in 2021 as a multidisciplinary think tank dedicated to conduct cutting-edge research, policy analysis and technical assignments. The center was founded to address the need for evidence-based policymaking to foster socio-economic development and inclusive economic growth in Zanzibar.
              </p>
              <p>
                ZRCP operates under the motto of "Translating Knowledge into Actionable Policies" in Zanzibar. The organization seeks to bridge the gap between research, policy, and practice by providing insights that influence socio-economic progress. Our core mission is to conduct cutting-edge research, promote evidence-based policies, and empower Zanzibari communities. Additionally, ZRCP’s vision is to become a leading multidisciplinary think tank in Zanzibar that fosters sustainable development and inclusive growth.
              </p>
              <div className="bottom-info">
                <div className="button">
                  <a 
                    data-animation="animated zoomInUp"
                    className="btn btn-theme primary effect btn-md" 
                    href="tel:+255 7775 242 400"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="contact">
                  <div className="content">
                    <h5>+255 7775 242 400</h5>
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

export default AboutIntro;
