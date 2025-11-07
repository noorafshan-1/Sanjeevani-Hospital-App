import React from "react";
import departments from "../data/departments";
import { Link } from "react-router-dom";

const DepartmentSection = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Our Hospital Departments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {departments.slice(0, 8).map((dept) => (
            <Link
              key={dept.slug}
              to={`/departments/${dept.slug}`}
              className="bg-white shadow-md rounded-lg p-3 hover:shadow-xl transition"
            >
              <img
                src={dept.image}
                alt={dept.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-2 font-semibold text-gray-800 text-sm">
                {dept.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <Link
          to="/departments"
          className="inline-block mt-8 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
        >
          View All Departments
        </Link>
      </div>
    </section>
  );
};

export default DepartmentSection;
