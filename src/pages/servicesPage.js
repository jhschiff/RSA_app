import React from "react";
import Navbar from "../Navbar";
import "./servicesPage.css";
import flowersHero from '../images/flowers.jpg';
import mountain from '../images/mountain1.jpg';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${flowersHero})` }}>
        <div className="hero-content">
          <h1 className="hero-title">OUR SERVICES</h1>
          <div className="hero-subtitle">
            <p>
              Our services include senior placement, at-home care solutions, financial tracking assistance, and referrals for essential services like moving, medical devices, and accessibility resources. We offer a complimentary consultation to understand your situation and provide thoughtful, transparent solutions that save you time, reduce stress, and ensure the best possible care for your loved one.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="about-section">
        <div className="content-wrapper">
          <div className="about-grid">
            <div className="about-text">
              <div className="services-list">
                <div className="service-item">
                  <h3>Senior Placement</h3>
                  <p>We help identify and evaluate senior living communities that match your loved one's needs, preferences, and budget. Our team personally visits each recommended facility to ensure quality care and proper fit.</p>
                </div>
                <div className="service-item">
                  <h3>At-Home Care Solutions</h3>
                  <p>For seniors who prefer to age in place, we connect families with vetted in-home care providers and help coordinate necessary support services to maintain independence safely.</p>
                </div>
                <div className="service-item">
                  <h3>Financial Tracking Assistance</h3>
                  <p>We offer financial expertise to help families understand costs and assist with bill payments.</p>
                </div>
                <div className="service-item">
                  <h3>Essential Service Referrals</h3>
                  <p>We maintain a network of trusted partners for moving services, medical equipment, and other vital support services to ensure a seamless care transition.</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={mountain} alt="Mountain view" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
