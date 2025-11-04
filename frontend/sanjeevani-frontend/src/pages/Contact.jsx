import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-green-600 py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
          <h5 className="font-semibold flex items-center justify-center gap-2">
            <FaPhoneAlt /> For Emergency & Appointments Call:
            <span className="font-bold"> 01504-222100</span>
          </h5>

          <Link
            to="/appointment"
            className="mt-3 md:mt-0 bg-blue-800 hover:bg-blue-900 px-5 py-2 rounded-full font-semibold transition text-white"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* Left Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h2>

            <p className="flex gap-3 items-start mb-4 text-gray-700">
              <FaPhoneAlt className="text-blue-700 mt-1" /> 
              <span><b>Phone:</b> 01504-222100</span>
            </p>

            <p className="flex gap-3 items-start mb-4 text-gray-700">
              <FaEnvelope className="text-blue-700 mt-1" />
              <span><b>Email:</b> smshospitalbhadra2025@gmail.com</span>
            </p>

            <p className="flex gap-3 items-start mb-4 text-gray-700 leading-relaxed">
              <FaMapMarkerAlt className="text-blue-700 mt-1" />
              <span>
                <b>Address:</b> Near Vivekanand College, in front of Manohar Hotel, Bhadra
              </span>
            </p>
          </div>

          {/* Right Side Appointment/Message Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-700 mb-5">Send us a Message</h3>

            <form className="space-y-4">

              <div>
                <label className="text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 h-24 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md font-semibold transition"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
