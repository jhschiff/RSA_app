import Navbar from "../Navbar";
import "./aboutUsPage.css";
// import amySchiff from "../images/AmySchiff.jpeg";
// import buffyChonchol from "../images/BuffyChonchol.jpeg";

const founders = [
  {
    name: "Amy Schiff",
    bio: [
      "Amy has leveraged her financial expertise, attention to detail, and strategic insight to help individuals navigate complex issues for sound informed decision-making solutions. She is a passionate advocate for seniors. Her ability to connect with people and translate complex financial concepts into clear, actionable steps makes her a trusted resource for families.",
      "Amy is a highly accomplished Certified Public Accountant (CPA) with extensive experience in finance, strategic planning, executive leadership, and long-term care planning. After graduating valedictorian from the University of Colorado – Leeds School of Business, she began her career at Deloitte before advancing into key leadership roles, including Corporate Accounting Manager at US West, Director of Financial Planning and Analysis at Qwest, and Chief Financial Officer at AboutSkin Dermatology.",
      "Her unique blend of financial acumen and personal commitment to elder care empowers individuals to make well-informed choices prioritizing dignity, independence, and long-term well-being."
    ],
    // image: amySchiff
  },
  {
    name: "Elizabeth (Buffy) Chonchol",
    bio: [
      "Elizabeth \"Buffy\" brings both personal experience and professional expertise to families navigating the challenges of long-term care. As the devoted daughter of a parent who has been in an elderly care community for over a decade, she deeply understands the emotional and logistical complexities of finding the right support for an aging loved one.",
      "Beyond her firsthand experience, Buffy holds a degree in Accounting from George Washington University, a MBA from the University of Denver and is a certified public accountant (inactive). Her career includes roles in public accounting at Price Waterhouse, serving as Director of Finance in Business Development for US West, and working as Director of Development at a private investment group.",
      "A third-generation Denver native, Buffy has a deep knowledge of the city's senior care resources and communities, making her a trusted guide for families seeking the best options for their loved ones."
    ],
    // image: buffyChonchol
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
                  {/* <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="founder-image"
                  /> */}
                </div>
                <div className="founder-content">
                  <h3 className="founder-name">{founder.name}</h3>
                  {Array.isArray(founder.bio) ? (
                    founder.bio.map((paragraph, i) => (
                      <p key={i} className="founder-bio">{paragraph}</p>
                    ))
                  ) : (
                    <p className="founder-bio">{founder.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
