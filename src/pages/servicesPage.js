import React from "react";
import Navbar from "../Navbar";
import "./servicesPage.css";

const services = [
  {
    title: "Senior Placement",
    description: "We help identify and evaluate senior living communities that match your loved one's needs, preferences, and budget. Our team personally visits each recommended facility to ensure quality care and proper fit."
  },
  {
    title: "At-Home Care Solutions",
    description: "For seniors who prefer to age in place, we connect families with vetted in-home care providers and help coordinate necessary support services to maintain independence safely."
  },
  {
    title: "Financial Tracking Assistance",
    description: "Our financial expertise helps families understand costs, navigate insurance options, and plan for long-term care expenses while maximizing available resources."
  },
  {
    title: "Essential Service Referrals",
    description: "We maintain a network of trusted partners for moving services, medical equipment, home modifications, and other vital support services to ensure a seamless care transition."
  }
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Navbar />
      
      {/* Overview Section */}
      <section className="overview-section">
        <div className="content-container">
          <h1 className="section-title">Our Services</h1>
          <p className="services-description">
            Our services include senior placement, at-home care solutions, financial tracking assistance, and referrals for essential services like moving, medical devices, and accessibility resources. We offer a complimentary consultation to understand your situation and provide thoughtful, transparent solutions that save you time, reduce stress, and ensure the best possible care for your loved one.
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="detailed-services-section">
        <div className="content-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
