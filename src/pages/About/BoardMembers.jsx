import React from "react";

const BoardMembers = () => {
  return (
    <section className="board-members" id="board">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4>Board Members</h4>
                <h2>Meet our Leaders</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chairperson Centered */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 col-sm-8">
            <div className="member-card text-center animate__animated animate__fadeInDown">
              <img src="/img/team/mohamedHafidh.jpeg" alt="Fatma Said" />
              <h5>Fatma Said</h5>
              <p>Chairperson</p>
            </div>
          </div>
        </div>

        {/* Other Board Members */}
        <div className="row justify-content-center g-4">
          <div className="col-md-3 col-sm-6">
            <div className="member-card text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
              <img src="/img/team/Rukiya Wadoud.avif" alt="Rukiya Wadoud" />
              <h5>Rukiya Wadoud</h5>
              <p>Board Member</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="member-card text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
              <img src="/img/team/DrIssa.jpeg" alt="Sara Kombo" />
              <h5>Dr Issa Seif</h5>
              <p>Board Member</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="member-card text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
              <img src="/img/team/Abdulla Mzee Mpangile .jpeg" alt="Musa Khalid" />
              <h5>Abdulla Mzee Mpangile</h5>
              <p>Board Member</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="member-card text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
              <img src="/img/team/member3.jpg" alt="Musa Khalid" />
              <h5>Musa Khalid</h5>
              <p>Board Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
