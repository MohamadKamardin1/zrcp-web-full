// src/pages/Home/Hero/Hero.jsx

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="banner-area top-pad-extra text-regular right-shape content-less">
      <div className="animated-bubble">
        <img src="img/shape/bubble.png" alt="Bubble" />
        <img src="img/shape/bubble-mini.png" alt="Bubble" />
        <img src="img/shape/bubble.png" alt="Bubble" />
        <img src="img/shape/bubble.png" alt="Bubble" />
        <img src="img/shape/bubble-mini.png" alt="Bubble" />
        <img src="img/shape/bubble.png" alt="Bubble" />
        <img src="img/shape/bubble-mid.png" alt="Bubble" />
      </div>

      <div id="bootcarousel" className="carousel text-light slide animate_text" data-ride="carousel">
        <div className="carousel-inner">
          <div
            className="carousel-item active bg-cover"
            style={{ backgroundImage: "url(img/bg-image2.png)" }}
          >
            <div className="box-table">
              <div className="box-cell shadow gradient">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="content">
                        <h4 data-animation="animated slideInDown">Evidence for Reform</h4>
                        <h2 data-animation="animated slideInLeft">
                          Research that drives government transformation.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="carousel-item bg-cover"
            style={{ backgroundImage: "url(img/bg-image.png)" }}
          >
            <div className="box-table">
              <div className="box-cell shadow gradient">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="content">
                        <h4 data-animation="animated slideInRight">Strategic Insights for Change</h4>
                        <h2 data-animation="animated slideInLeft">Empowering reforms through evidence.</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className="left carousel-control light" href="#bootcarousel" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control light" href="#bootcarousel" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
