import React from "react";
import departments from "../data/departments";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <div className="pt-28 pb-16 px-6 bg-gray-50">
      <h1 className="text-4xl text-center font-bold text-blue-700 mb-4">
        Our Departments
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Our hospital provides specialized medical care with expert doctors and
        advanced clinical support across multiple medical departments.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <Link
            key={dept.slug}
            to={`/departments/${dept.slug}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition p-3"
          >
            <img
              src={dept.image}
              alt={dept.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-blue-700 mt-3">
              {dept.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Departments;
