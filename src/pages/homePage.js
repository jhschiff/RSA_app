import React from "react";
import Navbar from "../Navbar.js";
import './homePage.css';
// import seniorCare from '../images/senior-care.jpeg';
// import familySupport from '../images/familySupport.jpeg';

export default function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Helping Support Aging Loved Ones</h1>
          <div className="hero-subtitle">
            <p>
              Navigating senior care decisions can be overwhelming, but you don't have to do it alone. As Colorado natives with firsthand experience in elder care, we provide compassionate, financially savvy, and personalized guidance to help families find the best senior living and care solutions. Unlike national companies, we take a hands-on, local approach—personally visiting every recommended community and tailoring options to fit your unique needs.
            </p>
            <p>
              Our mission is to provide compassionate, personalized, and financially informed guidance to seniors and their families as they navigate the complexities of aging and senior care.
            </p>
          </div>
          <a href="/contact" className="cta-button">Get Started Today</a>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="services-section">
        <div className="content-wrapper">
          <h2 className="section-title">How We Help</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Senior Care Navigation</h3>
              <p>We help families understand and access the right care options for their loved ones, from independent living to specialized care communities.</p>
            </div>
            <div className="service-card">
              <h3>Family Support</h3>
              <p>Our team provides guidance and resources to help families make informed decisions about their loved one's care and future.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="content-wrapper">
          <h2 className="section-title">Why Choose Resolute Senior Advocates</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Expert Guidance</h3>
              <p>Experience and in-depth market knowledge of Senior Care</p>
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