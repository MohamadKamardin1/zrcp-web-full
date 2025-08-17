// src/pages/Home/Home.jsx

import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import ServicesTypes from "./ServicesTypes/ServicesTypes";
import Partners from "./Partners/Partners";
import Blog from "./Blog/Blog";
import "./Home.css";


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ServicesTypes />
      <Partners />
      <Blog />
    </>
  );
};

export default Home;
