import React from "react";
import { useParams } from "react-router-dom";
import departments from "../data/departments";

const DepartmentDetail = () => {
  const { slug } = useParams();
  const department = departments.find((dep) => dep.slug === slug);

  if (!department) {
    return (
      <h2 className="text-center text-red-600 py-20">Department Not Found</h2>
    );
  }

  return (
    <>
      {/* <img
        src={department.image}
        alt={department.title}
        className="w-full max-h-80 object-cover rounded-lg mb-6"
      /> */}
      <section className="w-full">
        <div className="w-full h-[380px] md:h-[480px] lg:h-[520px] overflow-hidden">
          <img
            src={department.image}
            alt={department.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          {department.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          {department.description}
        </p>

        <div className="text-center mt-10">
          <a
            href="tel:+919999999999"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </>
  );
};

export default DepartmentDetail;
