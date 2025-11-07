import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003E7E] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center gap-2 mb-2">
              <FaPhoneAlt /> 01504-222100
            </p>
            <p className="flex items-center gap-2 mb-2">
              <FaEnvelope /> smshospitalbhadra2025@gmail.com
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              Near Vivekanand College, in front of Manohar Hotel, Bhadra
            </p>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Departments</h3>
            <ul className="space-y-1">
              <li>Nephrology</li>
              <li>Physiotherapy & Rehabilitation</li>
              <li>Neurology</li>
              <li>Orthopedic</li>
            </ul>
          </div>

          {/* Doctors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Doctors</h3>
            <ul className="space-y-1">
              <li>Dr. Anwar Ali</li>
              <li>Dr. Satveer Choudhary</li>
              <li>Dr. Anil Khyaliya</li>
              <li>Dr. Aslam</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mt-8 pt-6 flex flex-col items-center">
          {/* Social */}
          <div className="flex gap-5 mb-4">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaYoutube size={22} />
            </a>
          </div>

          {/* Copyright */}
          {/* <p className="text-xs text-center">
            © 2025 Sanjivani Hospital. Designed & Developed by <b>Star Marketing</b>.
          </p> */}
          <p className="text-xs text-center">
            © 2025 Sanjivani multispeciality Hospital. Designed & Developed by{" "}
            <a
              href="https://wingstarnarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-yellow-400 transition"
            >
              Star Marketing
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
