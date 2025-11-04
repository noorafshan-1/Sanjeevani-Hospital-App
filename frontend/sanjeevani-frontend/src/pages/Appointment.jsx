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
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Book an Appointment
        </h2>

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
      </div>
    </div>
  );
};

export default Appointment;
