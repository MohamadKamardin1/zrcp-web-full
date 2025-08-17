// src/components/PartnersSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  { src: "img/partners/smz.png", alt: "smz" },
  { src: "img/partners/UNCDF.png", alt: "UNCDF" },
  { src: "img/partners/natherlands.png", alt: "Natherlands" },
  { src: "img/partners/nyu_abudhabi.png", alt: "NYU Abu Dhabi" },
  { src: "img/partners/oxford.png", alt: "Oxford" },
  { src: "img/partners/swizeriche.png", alt: "Swizeriche", style: { height: "fit-content", width: "fit-content" } },
];

const Partners = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2>Our Partners</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {partners.map(({ src, alt, style }, index) => (
            <SwiperSlide key={index}>
              <div className="item text-center">
                <div className="partner" style={style}>
                  <img src={src} alt={alt} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Partners;
