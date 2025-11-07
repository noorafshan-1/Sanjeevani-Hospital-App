import React, { useState } from "react";
import departments from "../data/departments";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Request Submitted! We will contact you soon.");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Book an Appointment
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-base"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1 text-sm">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-base"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1 text-sm">
                Select Department
              </label>
              <select
                name="department"
                required
                value={form.department}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-base"
              >
                <option value="">-- Select Department --</option>
                {departments.map((d) => (
                  <option key={d.slug} value={d.title}>
                    {d.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1 text-sm">
                Date
              </label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-base"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1 text-sm">
                Message (optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-800 transition"
            >
              {loading ? "Sending..." : "Submit Appointment Request"}
            </button>
          </form>

          {/* Right Side - Map */}
          {/* <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3485.633328151949!2d75.17837907551873!3d29.116504675403853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDA2JzU5LjQiTiA3NcKwMTAnNTEuNCJF!5e0!3m2!1sen!2sin!4v1762337673970!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div> */}
          <div className="w-full h-full min-h-[450px] rounded-lg overflow-hidden shadow-md flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3485.633328151949!2d75.17837907551873!3d29.116504675403853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDA2JzU5LjQiTiA3NcKwMTAnNTEuNCJF!5e0!3m2!1sen!2sin!4v1762337673970!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
