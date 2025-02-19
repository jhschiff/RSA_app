import Navbar from "../Navbar";
import "./contactPage.css";

const employees = [{
  name: "Amy Schiff",
  position: "Partner",
  email: "aschiff@RSAus.com",
  phone: "303-437-5388"
},
{
  name: "Elizabeth (Buffy) Choncol",
  position: "Partner",
  email: "bchoncol@RSAus.com",
  phone: "303-513-1740"
}
]

export default function ContactPage () {
    return (
      <div className="contact-page">
        <Navbar />
        {/* Contact Cards Container */}
        <div className="contact-container">
          <div className="contact-cards-wrapper">
            {employees.map((employee, index) => (
              <div key={index} className="contact-card">
                <h2 className="contact-name">{employee.name}</h2>
                <div className="contact-details">
                  <p className="contact-text">
                    <span className="contact-label">{employee.position}</span>
                  </p>
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