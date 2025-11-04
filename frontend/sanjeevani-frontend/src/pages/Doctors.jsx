import React from "react";
import { Container, Carousel } from "react-bootstrap";

const doctors = [
  {
    name: "Dr. Anwar Ali",
    specialty: "Mbbs, Ms, MCH (Urology)  Ex – SMS hospital jaipur",
    image: "/doctors/Dr.Anwar Ali.jpeg",
  },
  {
    name: "Dr. Satveer Choudhary",
    specialty: "Mbbs, DNB Orthopedic Specialist",
    image: "/doctors/Dr.Satveer Chaudhary.jpeg",
  },
  {
    name: "Dr. Anil Khyaliya",
    specialty: "MBBS, MS, MCh (Neurosurgeon) Ex – SMS Jaipur & MDM Jodhpur",
    image: "/doctors/Dr. Anil Khyaliya.jpeg",
  },
  {
    name: "Dr. Aslam (PT)",
    specialty: "BPT (Ex. SMS Hospital) Physiotherapist",
    image: "/doctors/Dr. Aslam (PT).jpeg",
  },
];



const Doctors = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Doctors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border border-gray-300"
            />
            <h3 className="text-xl font-semibold">{doc.name}</h3>
            <p className="text-gray-600">{doc.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
