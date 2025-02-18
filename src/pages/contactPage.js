import Navbar from "../Navbar";

const employees = [{
  name: "Amy Schiff",
  position: "Co-Founder",
  email: "aschiff@RSAus.com",
  phone: "303-437-5388"
},
{
  name: "Elizabeth (Buffy) Choncol",
  position: "Co-Founder",
  email: "bchoncol@RSAus.com",
  phone: "(303)513-1740"
}
]

export default function ContactPage () {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        {/* Contact Cards Container */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-row justify-center space-x-8">
            {employees.map((employee, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{employee.name}</h2>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-semibold">{employee.position}</span>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Email:</span> {employee.email}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Phone:</span> {employee.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };