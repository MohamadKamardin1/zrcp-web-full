import React, { useState } from "react";

const projectsData = [
  {
    title: "Development of an eLearning Management System for the Law School of Zanzibar",
    shortText: "Development of the eLearning Management System (LMS) for the Law School of Zanzibar, commissioned by the President's Office-Constitution, Legal Affairs, Public Service, and Good Governance in 2025...",
    extraText: "...and funded by the Government of the Netherlands through UNDP."
  },
  {
    title: "Participatory Research on Community-Led ECD Practices in Zanzibar",
    shortText: "Project entitled “Participatory Research to Amplify Community-Led ECD Practices in Zanzibar” to be implemented by the NEW YORK UNIVERSITY IN ABU DHABI CORPORATION and ZRCP in collaboration with SUMOOD in 2025.",
    extraText: "(No extra content)"
  },
  {
    title: "Institutional Options for Regulating Social Security in Zanzibar",
    shortText: "Options for institutional arrangements addressing regulatory requirements related to the establishment of Social Security in Zanzibar with the President’s Office Finance and Planning...",
    extraText: "...and Swiss Development Cooperation through Oxford Policy Management (OPM) in 2025, as part of Wajibika Project."
  },
  {
    title: "Designing a Data-Driven Social Registry for Poverty Targeting in Zanzibar",
    shortText: "ZRCP is partnering with Oxford Policy Management (OPM) to create a blueprint for developing a dynamic social registry to identify poor households in Zanzibar.",
    extraText: "This project, under the Data and Evidence to End Extreme Poverty Program under OPM and financed by World Bank and FCDO, aims to build a robust data infrastructure that supports efficient identification, registration, and management of social protection beneficiaries across the region in 2024-2025."
  },
  {
    title: "Integrating Climate Change Adaptation into Tanzania’s Planning Processes",
    shortText: "ZRCP was commissioned by UNDP to implement an important part of the Advancing climate resilience through the national project known as “Integrating Climate Change Adaptation into Tanzania’s Planning Processes”...",
    extraText: "(UNDP-GCF/TZN-RS-002), led by the Vice President’s Office of the Government of the United Republic of Tanzania and the First Vice President’s Office of the Revolutionary Government of Zanzibar between 2023 and 2025."
  },
  {
    title: "Scoping Study on the Start-Up Ecosystem in Zanzibar",
    shortText: "The project on “Scoping Study on the Start-Up Ecosystem in Zanzibar”, policy round tables, and dissemination event conducted with support from the Netherlands Enterprise Agency and UNDP (through the FUNGUO project)...",
    extraText: "...in collaboration with the Revolutionary Government and the Zanzibar Start-up Association."
  },
  {
    title: "Technical Support for Integration of Digital Health Assets under the Jamii ni Afya Initiative",
    shortText: "ZRCP Provided technical support for the transition of D-Tree’s digital health assets under the Jamii ni Afya initiative in 2023...",
    extraText: "...enabling their sustainable integration into government systems. The Centre’s involvement ensured that critical digital tools for community health service delivery were institutionalized, with strengthened governance structures and long-term financial viability."
  },
  {
    title: "Designing the Inclusive Digital Economy Scorecard (IDES) for Zanzibar (2023–2024)",
    shortText: "ZRCP partnered with UNCDF to design the Inclusive Digital Economy Scorecard (IDES) for Zanzibar...",
    extraText: "A framework to monitor digital economy progress in 2023-2024."
  },
];

const Projects = () => {
  // Track which cards are expanded
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="project-and-events" id="project">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="site-heading text-center">
            <h2>Our Projects</h2>
            <div className="devider"></div>
          </div>
        </div>
      </div>

      <div className="card-container">
        {projectsData.map(({ title, shortText, extraText }, index) => (
          <div
            key={index}
            className="card"
            data-aos="fade-up"
            data-aos-delay={index === 0 ? 0 : 100}
          >
            <h3>{title}</h3>
            <p className="short-text">{shortText}</p>
            {expanded[index] && (
              <div className="read-more-content" style={{ display: "block" }}>
                <p>{extraText}</p>
              </div>
            )}
            <button
              className="read-more-btn"
              onClick={() => toggleReadMore(index)}
            >
              {expanded[index] ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
