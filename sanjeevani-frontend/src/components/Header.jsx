import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import departments from "../data/departments";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItem = "hover:text-blue-600 transition";

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-blue-600 text-white text-center text-sm py-1">
        Call Us: +91 9999999999 | Email: info@sanjeevanihospital.com
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/SanjeevaniHospital.jpeg"
              alt="Hospital Logo"
              className="w-14"
            />
            <div>
              <h2 className="text-blue-700 font-bold text-lg">
                Sanjeevani Hospital
              </h2>
              <p className="text-xs text-gray-600 -mt-1">
                Multispeciality Care
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-[15px] font-medium">
            <Link
              to="/"
              className={`${navItem} ${
                location.pathname === "/"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${navItem} ${
                location.pathname === "/about"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              About Us
            </Link>
            {/* <li className="relative group">
              <span className="cursor-pointer hover:text-blue-600">
                Departments ▼
              </span>

              <div className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 w-56 z-50">
                {departments.map((dep) => (
                  <Link
                    key={dep.slug}
                    to={`/departments/${dep.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-blue-100"
                  >
                    {dep.title}
                  </Link>
                ))}
              </div>
            </li> */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
                Departments <span>▼</span>
              </span>

              <div className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 w-60 rounded-md border z-50">
                {departments.map((dep) => (
                  <Link
                    key={dep.slug}
                    to={`/departments/${dep.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-blue-100"
                  >
                    {dep.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* <Link to="/departments" className={`${navItem} ${location.pathname === "/departments" ? "text-blue-600 border-b-2 border-blue-600" : ""}`}>Departments</Link> */}
            <Link
              to="/doctors"
              className={`${navItem} ${
                location.pathname === "/doctors"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Our Doctors
            </Link>
            <Link
              to="/contact"
              className={`${navItem} ${
                location.pathname === "/contact"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-white shadow-md border-t px-5 py-3 space-y-3 text-[15px] font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className={navItem}>
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navItem}
            >
              About Us
            </Link>
            {/* <Link
              to="/departments"
              onClick={() => setMenuOpen(false)}
              className={navItem}
            >
              Departments
            </Link> */}
            <div>
              <button
                onClick={() => setMenuOpen(menuOpen === "dept" ? null : "dept")}
                className={`${navItem} flex justify-between w-full`}
              >
                Departments <span>▼</span>
              </button>

              {menuOpen === "dept" && (
                <div className="ml-3 mt-2 border-l pl-3 space-y-2">
                  {departments.map((dep) => (
                    <Link
                      key={dep.slug}
                      to={`/departments/${dep.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm hover:text-blue-600"
                    >
                      {dep.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/doctors"
              onClick={() => setMenuOpen(false)}
              className={navItem}
            >
              Our Doctors
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={navItem}
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
