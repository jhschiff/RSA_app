import Navbar from "../Navbar";
import "./aboutUsPage.css";
import amySchiff from "../images/AmySchiff.jpeg";
import buffyChonchol from "../images/BuffyChonchol.jpeg";

const founders = [
  {
    name: "Amy Schiff",
    bio: "Amy has extensive experience with a unique and proven ability to connect with people. She graduated valedictorian from the University of Colorado Boulder - Leeds School of Business. She received her CPA, worked at Deloitte, U S WEST, QWEST, and AboutSkin Dermatology. She currently serves on several boards and has built strong relationships throughout the community. Using her business acumen and personal communication skills, she is an invaluable resource that helps clients achieve their goals.",
    image: amySchiff
  },
  {
    name: "Elizabeth (Buffy) Chonchol",
    bio: "Buffy has dedicated her career to excellence for more than two decades. Her background in XYZ and expertise in the Denver metropolitan area market makes her an invaluable resource for clients. She specializes in helping clients find their perfect home while maximizing their potential.",
    image: buffyChonchol
  }
];

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Company Overview Section */}
      <section className="company-section">
        <div className="content-container">
          <h1 className="section-title">About The Company</h1>
          <p className="company-description">
            Founded in 2025, Resolute Senior Advocates provides guidance and support to help families navigate the complexities of elderly care for their loved ones.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="content-container">
          <h2 className="section-title">Meet Our Founders</h2>
          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-image-container">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="founder-image"
                  />
                </div>
                <div className="founder-content">
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-bio">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
