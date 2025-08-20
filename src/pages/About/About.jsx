import React from "react";
import AboutIntro from "./AboutIntro";
import Services from "./Services";
import BoardMembers from "./BoardMembers";
import Management from "./Management";
import Team from "./Team";
import Associates from "./Associates";
import "./about.css"; // Import original CSS globally for all components

const About = () => {
  return (
    <div>
      <AboutIntro />
      <Services />
      <BoardMembers />
      <Management />
      <Team />
      <Associates />
    </div>
  );
};

export default About;
