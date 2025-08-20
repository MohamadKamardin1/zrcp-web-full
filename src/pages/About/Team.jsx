import React from "react";

const Team = () => {
  return (
    <>
      <div className="container" id="team">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4></h4>
              <h2>Our Team</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="item text-center">
                <div className="thumb">
                  <img src="/img/team/Kawthar.jpg" alt="Thumb" />
                </div>
                <h5>Kauthar Mohammed</h5>
                <p>Research Assistant Volunteer - Business & Finance</p>
              </div>
            </div>
            {/* End of slide */}

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="item text-center">
                <div className="thumb">
                  <img src="/img/team/omar.jpeg" alt="Thumb" />
                </div>
                <h5>Omar Khamis</h5>
                <p>Office Administrator</p>
              </div>
            </div>
            {/* End of slide */}

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="item text-center">
                <div className="thumb">
                  <img src="/img/team/twamaa.jpeg" alt="Thumb" />
                </div>
                <h5>Twamaa Makame</h5>
                <p>Researcher</p>
              </div>
            </div>
            {/* End of slide */}

            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="item text-center">
                <div className="thumb">
                  <img src="/img/team/hala.jpeg" alt="Thumb" />
                </div>
                <h5>Hala Elhassan</h5>
                <p>Program Specialist & Research Assistant r</p>
              </div>
            </div>
            {/* End of slide */}
          </div>

          {/* Navigation buttons with custom SVGs */}
          <div className="swiper-button-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
