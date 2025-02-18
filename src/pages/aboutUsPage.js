import Navbar from "../Navbar";
import "./aboutUsPage.css";
import amySchiff from "../images/AmySchiff.jpeg";
import buffyChoncol from "../images/BuffyChoncol.jpeg";

const founders = [
  {
    name: "Amy Schiff",
    bio: "Amy brings over 20 years of experience in XYZ. As a Colorado native, she has deep knowledge of the local market and has built strong relationships throughout the community. Her expertise in XYZ has helped countless clients achieve their goals.",
    image: amySchiff
  },
  {
    name: "Elizabeth (Buffy) Choncol",
    bio: "Buffy has dedicated her career to excellence for more than two decades. Her background in XYZ and expertise in the Denver metropolitan area market makes her an invaluable resource for clients. She specializes in helping clients find their perfect home while maximizing their potential.",
    image: buffyChoncol
  }
];

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Company Overview Section */}
      <section className="company-section">
        <div className="content-container">
          <h1 className="section-title">Resolute Senior Advocates</h1>
          <p className="company-description">
            We empower older adults and their families by connecting them with the right resources and advocating for their needs. Our team provides guidance and support to help families navigate the complexities of elderly care for their loved ones.
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
