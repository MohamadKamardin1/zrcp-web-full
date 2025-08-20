import React from "react";

const eventsData = [
  "Hosted 3-day iterative workshop on Early Childhood Development (ECD) in Zanzibar. This workshop is a key component of a collaborative research project between New York University Abu Dhabi, ZRCP and SUMOOD took place on between 4 and 6 August 2025 at Madinatul Bahar in Zanzibar.",
  "ZRCP is collaborating with Zanzibar e-Government Authority (eGA) Oxford Policy Management (OPM) to conduct a workshop on  comprehensive digital diagnosis of Zanzibar’s social protection sector in March 2025 at the Golden Tulip Hotel.",
  "Hosted  the 3rd Annual Development Conference (2024), “Enhancing Technology and Innovation for Catalysing a Vibrant Startup Ecosystem in Zanzibar\" officiated by the President of the Revolutionary Government of Zanzibar and closed by the Second Vice President of Zanzibar. The event was held at Madinatul al Bahr.",
  "Hosted  a High Level Conference on, “Zanzibar Digital Transformation\" in December 2023 officiated by the Minister of Infrastructure, Communication and Transport and attended by diverse stakeholders including the Director General of Tanzania Communication Regulatory Authority (TCRA). The event was held at the Hotel Verde, Maruhubi.",
  "Hosted  the 2nd Joint Annual Policy Conference on “Digital Transformation and Innovative Financing as catalysts for accelerating economic growth” with the President’s Office - Finance and Planning, in collaboration with the UNCDF, Zanzibar Investment Promotion Authority (ZIPA), People’s Bank of Zanzibar (PBZ), and Office of the Chief Government Statistician (OCGS). The event was held at the Sea Cliff Hotel, Mangapwani",
  "Hosted a High-Level Policy Dialogue on Universal Health Insurance, with the President’s Office, the Swiss Embassy, and the Jakaya Mrisho Kikwete Foundation in 2021 at the Hotel Verde,.",
  "Presented various strategic research to the Inter-Ministerial Technical Committee (IMTC), engaging key government leadership.",
  "Collaborated with the Indian Institute of Technology  (ITT) Madras and UNCDF to host a seminar on ICT and digital upskilling, bringing together leaders from government, academia, and industry.",
  "Hosted a series of policy dialogues with African Urban Lab (AUL) at ZRCP office."
];

const Events = () => {
  return (
    <section className="project-and-events" id="events">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="site-heading text-center">
            <h2>Events</h2>
            <div className="devider"></div>
          </div>
        </div>
      </div>
      <div className="card-container">
        {eventsData.map((text, idx) => (
          <div key={idx} className="card" data-aos="fade-up">
            <p className="short-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
