import React, { useState } from "react";
import './NyotaHub.css'; // Custom styles for hero and tabs

const tabs = [
  {
    id: "description",
    label: "DESCRIPTION",
    content: (
      <>
        <h2>Intro</h2>
        <p>
          Welcome to Nyota Hub, a vibrant center for innovation and creativity.
          Here we foster collaboration, develop ideas, and empower change-makers.
        </p>
        {/* Add more descriptive content */}
      </>
    ),
  },
  {
    id: "sdgs",
    label: "SDGS & TARGETS",
    content: (
      <>
        <h2>SDGs & Targets</h2>
        <p>
          Nyota Hub aligns with Sustainable Development Goals by targeting education, innovation, and community empowerment.
        </p>
        {/* Add more SDG-related content */}
      </>
    ),
  },
  {
    id: "deliverables",
    label: "DELIVERABLES & TIMELINE",
    content: (
      <>
        <h2>Deliverables & Timeline</h2>
        <p>
          We plan to deliver impactful projects in phases, focusing on capacity building and technology transfer over the next 3 years.
        </p>
        {/* More timeline details */}
      </>
    ),
  },
  {
    id: "resources",
    label: "RESOURCES MOBILIZED",
    content: (
      <>
        <h2>Resources Mobilized</h2>
        <p>
          Our partners and sponsors provide critical funding, knowledge, and tools needed to drive success.
        </p>
        {/* Resource details */}
      </>
    ),
  },
  {
    id: "progress",
    label: "PROGRESS REPORTS",
    content: (
      <>
        <h2>Progress Reports</h2>
        <p>
          Stay updated with our latest milestones, outcomes, and lessons learned.
        </p>
        {/* Progress details */}
      </>
    ),
  },
];

const NyotaHub = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="nyota-hub-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ 
          backgroundImage: `url('/img/nyotahub.jpg')`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay">
          <h1>Innovation Club</h1>
          <p>Center for Balanced Development (Non-governmental organization (NGO))</p>
          <p className="hashtag">#SDGAction53604</p>
        </div>
      </section>

      {/* Tabs Menu */}
      <nav className="tabs-menu">
        <ul>
          {tabs.map(({ id, label }) => (
            <li 
              key={id} 
              className={activeTab === id ? "active" : ""}
              onClick={() => setActiveTab(id)}
              role="button"
              tabIndex={0}
              onKeyPress={() => setActiveTab(id)}
            >
              {label}
              {activeTab === id && <div className="underline" />}
            </li>
          ))}
        </ul>
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default NyotaHub;
