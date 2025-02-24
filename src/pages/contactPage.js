import Navbar from "../Navbar";
import "./contactPage.css";

const employees = [{
  name: "Amy Schiff",
  position: "Partner",
  // email: "aschiff@RSAus.com",
  phone: "303-437-5388"
},
{
  name: "Elizabeth (Buffy) Chonchol",
  position: "Partner",
  // email: "bchonchol@RSAus.com",
  phone: "303-513-1740"
}
]

export default function ContactPage () {
    return (
      <div className="contact-page">
        <Navbar />
        <div className="contact-container">
          <div className="contact-header">
            <h1> Contact Us</h1>
          </div>
          <div className="contact-cards-wrapper">
            {employees.map((employee, index) => (
              <div key={index} className="contact-card">
                {/* Name and Position Group */}
                <div className="info-group">
                  <h2 className="contact-name">{employee.name}</h2>
                  <p className="contact-text">
                    <span className="contact-label">{employee.position}</span>
                  </p>
                </div>

                {/* Contact Info Group */}
                <div className="info-group">
                  <p className="contact-text">
                    <span className="contact-label">Email:</span> {employee.email}
                  </p>
                  <p className="contact-text">
                    <span className="contact-label">Phone:</span> {employee.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };