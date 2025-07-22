import React from "react";
import Navbar from "../Navbar.js";
import './homePage.css';
import sunsetGrass from '../images/sunsetGrass.png';
import aboutImage from '../images/hands.png';

export default function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${sunsetGrass})` }}>
        <div className="hero-content">
          {/* <h1 className="hero-title">Helping Support Aging Loved Ones</h1> */}
          <h1 className="hero-title">HELPING SUPPORT AGING LOVED ONES</h1>
          <div className="hero-subtitle">
            <p>
              Our mission is to provide compassionate, personalized, and financially informed guidance to seniors and their families as they navigate the complexities of aging and senior care.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="content-wrapper">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">ABOUT RSA</h2>
              <p>
                Navigating senior care decisions can be overwhelming, but you don't have to do it alone. As Colorado natives with firsthand experience in elder care, we provide compassionate, financially savvy, and personalized guidance to help families find the best senior living and care solutions. Unlike national companies, we take a hands-on, local approach—personally visiting every recommended community and tailoring options to fit your unique needs. We also offer at-home care solutions, financial tracking assistance, and referrals for essential services like moving, medical devices, and accessibility resources to ensure the highest quality of care.
              </p>
            </div>
            <div className="about-image">
              <img src={aboutImage} alt="Senior Care" />
            </div>
          </div>
        </div>
      </section>

      {/* Complimentary Consultation Section */}
      <section className="about-section consultation-section">
        <div className="content-wrapper">
          <h2 className="section-title">COMPLIMENTARY CONSULTATION</h2>
          <p className="consultation-text">
            Let's talk. Schedule a phone call, virtual meeting, or in-person visit (your home, office, or shop) to discuss your needs and how we can help.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
          <a href="/contact" className="cta-button">Contact Us</a>
      </section>
      </div>
  );
}