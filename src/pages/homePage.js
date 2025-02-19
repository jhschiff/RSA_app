import React from "react";
import Navbar from "../Navbar.js";
import './homePage.css';
// import seniorCare from '../images/senior-care.jpeg';
// import familySupport from '../images/family-support.jpeg';

export default function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Helping Support Aging Loved Ones</h1>
          <p className="hero-subtitle">
            Guiding you through senior care decisions with expertise and compassion
          </p>
          <a href="/contact" className="cta-button">Get Started Today</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="content-wrapper">
          <h2 className="section-title">How We Help</h2>
          <div className="services-grid">
            <div className="service-card">
              {/* <img src={seniorCare} alt="Senior Care Services" className="service-image" /> */}
              <h3>Senior Care Navigation</h3>
              <p>We help families understand and access the right care options for their loved ones, from independent living to specialized care facilities.</p>
            </div>
            <div className="service-card">
              {/* <img src={familySupport} alt="Family Support Services" className="service-image" /> */}
              <h3>Family Support</h3>
              <p>Our team provides guidance and resources to help families make informed decisions about their loved one's care and future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="content-wrapper">
          <h2 className="section-title">Why Choose Resolute Senior Advocates</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Expert Guidance</h3>
              <p>Decades of combined experience in senior care and advocacy</p>
            </div>
            <div className="feature-item">
              <h3>Personalized Approach</h3>
              <p>Customized solutions for each family's unique situation</p>
            </div>
            <div className="feature-item">
              <h3>Comprehensive Support</h3>
              <p>From initial consultation to ongoing assistance</p>
            </div>
            <div className="feature-item">
              <h3>Local Expertise</h3>
              <p>Deep knowledge of Denver metro area resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="content-wrapper">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a consultation about your family's needs.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>
    </div>
  );
}