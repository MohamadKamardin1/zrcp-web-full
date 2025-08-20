import React from "react";

const researchData = [
  {
    sectionTitle: "Economic and Digital Transformations",
    items: [
      {
        title: "Scoping Study on the Start-Up Ecosystem in Zanzibar",
        desc: "Conducted with support from the Netherlands Enterprise Agency and UNDP (through the FUNGUO project), in collaboration with the Revolutionary Government and the Zanzibar Start-up Association.",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Policy Note",
        desc: "Zanzibar’s Economic Transition: Importance of Harnessing the Ocean-Based Industrialization",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Policy Note",
        desc: "The Role of Deep-water Seaweed Farming on Economic Empowerment in Zanzibar.",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Zanzibar Statistical Abstract 2022",
        desc: "A Brief Analysis: Synthesizes national data with a focus on inclusive growth, employment, digitalisation, and social services..",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Policy Note",
        desc: "Is the investment towards industries and the blue economy present an opportunity or pose a threat to the ZSSF?",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Report on the 3rd Annual Development Conference (2024)",
        desc: "Enhancing Technology and Innovation for Catalysing a Vibrant Startup Ecosystem in Zanzibar",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Report on the 2nd Joint Annual Policy Conference ",
        desc: "Digital Transformation and Innovative Financing as catalysts for accelerating economic growth”",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
    ],
  },
  {
    sectionTitle: "Financial Sector Reform & Private Financing",
    items: [
      {
        title:
          "Do Microfinance Institutions Bridge the Financing Gap for SMEs in Zanzibar? Demand and Supply Perspectives (Forthcoming).",
        desc: "Empirical research focusing on improving credit availability through microfinance institutions undertaken in collaboration with the President’s Office Finance and Planning",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Zanzibar National Budget 2024/2025 – Private Sector’s Perspective",
        desc: "A joint analysis with the Zanzibar National Chamber of Commerce, focusing on fiscal priorities and the investment environment",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Filling the Funding Gap",
        desc: "Options for boosting private financing  and initiating the domestic capital markets in Zanzibar",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
    ],
  },
  {
    sectionTitle: "Social Protection & Formalisation of the Informal Sector",
    items: [
      {
        title: "Malaria in Zanzibar: An Economic and Social Burden Transformed”",
        desc: "",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title:
          "A blueprint for developing a dynamic social registry to identify poor households in Zanzibar” (Forthcoming).",
        desc: "",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "Conditionality for Developing Readiness of Universal Health Insurance (UHI) in Zanzibar",
        desc: "",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title: "System Design Options for  Introducing Universal Health Insurance (UHI) in Zanzibar",
        desc: "",
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
    ],
  },
  {
    sectionTitle: "Good Governance and Public",
    items: [
      {
        title: "Climate Vulnerability Assessment (CVA) for both Mainland Tanzania and Zanzibar",
        desc: `Focusing on nine critical sectors: agriculture, livestock, fisheries, coastal and marine ecosystems, water, health, tourism, wildlife, and infrastructure and human settlements. This research was conducted in partnership with OneWorld (South Africa), and commissioned by UNDP for the Vice President’s Office of the Government of the United Republic of Tanzania and the First Vice President’s Office of the Revolutionary Government of Zanzibar.`,
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title:
          "A comprehensive Public Sector Competency Framework and its implementation strategy",
        desc: `For five strategic ministries, commissioned by UNDP and the President’s Office in 2024. The framework established a structured foundation for strengthening institutional performance, improving workforce capabilities, and aligning public service delivery with Zanzibar’s development priorities.`,
        pdfLink: "pdfs/startup-ecosystem-zanzibar.pdf",
      },
      {
        title:
          "Competency analysis and framework for the Department of Administration and Human Resource Management (DAHRM) and the Department of Policy, Planning, and Research (DPPR) for five strategic ministries in Zanzibar",
        desc: `This work was commissioned by UNDP on behalf of the President's Office-Constitution, Legal Affairs, Public Service, and Good Governance in 2023.`,
        pdfLink: "/pdfs/startup-ecosystem-zanzibar.pdf",
      },
    ],
  },
];

const ResearchAndPolicy = () => {
  return (
    <>
      <div className="breadcrumb-area text-center shadow dark text-light bg-cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 about-title">
              <h1 >RESEARCH AND POLICY</h1>
            </div>
          </div>
        </div>
      </div>
        <br /><br />
      {researchData.map(({ sectionTitle, items }, idx) => (
        <section className="thematic-section" key={idx} id="ai">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2>{sectionTitle}</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
          <div className="research-cards">
            {items.map(({ title, desc, pdfLink }, i) => (
              <div className="research-page-card" key={i}>
                <div className="card-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <a
                  href={pdfLink}
                  className="btn btn-success"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PDF
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default ResearchAndPolicy;
