import React from "react";
import HeroSlider from "../components/HeroSlider";
import About from "../pages/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Departments from "../pages/Departments";
import Doctors from "../pages/Doctors";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <About />

      <section
        className="w-full h-[90vh] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage: "url('/hospital-bg.png')",
        }}
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
      <Departments />
      <Doctors />
      <Contact />
    </>
  );
};

export default Home;
