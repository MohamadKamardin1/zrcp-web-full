import React from "react";

const Services = () => {
  return (
    <div id="themes" className="services-style-three-area relative text-center default-padding">
      <div className="container">
        <div className="row">
          {/* Single Item */}
          <div className="services-style-three col-lg-3 col-md-6">
            <div className="style-three-item item">
              <div className="shape" style={{ backgroundImage: "url(/img/shape/21.png)" }}></div>
              <div className="thumb">
                <img src="/img/theme1.svg" alt="Icon" />
              </div>
              <h4>
                <a href="#">Economic Growth &amp; Digital Transformation:</a>
              </h4>
              <p>
                Unlock the potential emerging from the
                digital economy to drive structural transformation within and between Zanzibar’s
                strategic sectors.
              </p>
            </div>
          </div>
          {/* End Single Item */}
          
          {/* Single Item */}
          <div className="services-style-three col-lg-3 col-md-6">
            <div className="style-three-item item active">
              <div className="shape" style={{ backgroundImage: "url(/img/shape/21.png)" }}></div>
              <div className="thumb">
                <img src="/img/theme0.svg" alt="Icon" />
              </div>
              <h4>
                <a href="#">Financial Sector Reforms and Private Financing:</a>
              </h4>
              <p>
                Generate empirical evidence to guide the financial sector’s reforms, support the domestic revenue collection, foster innovative financing and promote private investments....
              </p>
            </div>
          </div>
          {/* End Single Item */}

          {/* Single Item */}
          <div className="services-style-three col-lg-3 col-md-6">
            <div className="style-three-item item">
              <div className="shape" style={{ backgroundImage: "url(/img/shape/21.png)" }}></div>
              <div className="thumb">
                <img src="/img/theme2.svg" alt="Icon" />
              </div>
              <h4>
                <a href="#">Social Protection:</a>
              </h4>
              <p>
                Explore ways to create robust and efficient social welfare systems and
                the formalization of informal workers and enterprises
              </p>
            </div>
          </div>
          {/* End Single Item */}
          
          {/* Single Item */}
          <div className="services-style-three col-lg-3 col-md-6">
            <div className="style-three-item item">
              <div className="shape" style={{ backgroundImage: "url(/img/shape/21.png)" }}></div>
              <div className="thumb">
                <img src="/img/theme3.svg" alt="Icon" />
              </div>
              <h4>
                <a href="#">Good Governance:</a>
              </h4>
              <p>
                Promoting integrity and accountability in public services delivery and
                equitable access to natural assets
              </p>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>
      <div className="shape-bottom" style={{ backgroundImage: "url(/img/shape/33.png)" }}></div>
    </div>
  );
};

export default Services;
