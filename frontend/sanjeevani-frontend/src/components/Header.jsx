import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          HospitalCare
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link to="/departments" className="hover:text-blue-600 transition">Departments</Link>
          <Link to="/doctors" className="hover:text-blue-600 transition">Our Doctors</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-lg font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/departments" onClick={() => setIsOpen(false)}>Departments</Link>
          <Link to="/doctors" onClick={() => setIsOpen(false)}>Our Doctors</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
