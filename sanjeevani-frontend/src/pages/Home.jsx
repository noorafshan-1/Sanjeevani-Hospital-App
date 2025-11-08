import React from "react";
import HeroSlider from "../components/HeroSlider";
import About from "../pages/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Departments from "../pages/Departments";
import DepartmentSection from "../components/DepartmentSection";
import Doctors from "../pages/Doctors";
import HospitalGallery from "../components/HospitalGallery";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSlider />
      {/* <About /> */}

      <section
        className="w-full h-[90vh] bg-cover bg-center relative flex items-center"
        // style={{
        //   backgroundImage: "url('/hospital-bg.png')",
        // }}
      >
        {/* Overlay (light transparent) */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 drop-shadow-sm uppercase">
            Your Health is Our Responsibility
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-800 font-medium">
            24/7 Multispeciality Medical Care With Trusted Doctors
          </p>

          {/* <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
          Book Appointment
        </button> */}
          <Link
            to="/appointment"
            className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
      <WhyChooseUs />
      {/* Hospital Image Section */}
      {/* <section className="w-full py-10">
        <div className="max-w-6xl mx-auto px-6">
          <img
            src="/hospital-building.jpeg" // Change to your image path
            alt="Our Hospital"
            className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </section> */}

      {/* If you want a heading above the image, use this:*/}
      {/* <section className="w-full py-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Hospital</h2>
        <div className="max-w-6xl mx-auto px-6">
          <img
            src="/hospital-building.jpeg"
            alt="Hospital"
            className="w-full h-[500px] md:h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </section> */}

      {/* If you want a slider of multiple hospital images */}

      <HospitalGallery />
      {/* <Departments /> */}
      <DepartmentSection />
      <Doctors />
      <Contact />
    </>
  );
};

export default Home;
