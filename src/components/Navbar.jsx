import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setIsOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // List of all nav items
  const navItems = [
    { label: "Tasks", path: "/Tasks" },
    // { label: "Home", path: "/" },
    { label: "Contact", path: "/Contact" },
    { label: "About", path: "/About" },
    { label: "Advanced", path: "/Advanced" },
    { label: "Login", path: "/Login" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full navbar bg-violet-900 text-white px-4 lg:px-8 shadow-lg z-50">
      {/* Left Section (Logo) */}
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-violet-200 hover:text-white transition-all duration-300"
        >
          EldrinTodo
        </Link>
      </div>

      {/* Right Section (Links - Desktop) */}
      <div className="flex-none hidden md:flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            className="btn bg-violet-700 border-none hover:bg-violet-600 hover:scale-105 transition-all duration-300"
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center" ref={dropdownRef}>
        <button
          className="relative w-10 h-10 flex flex-col justify-between items-center px-2 py-1 border-2 border-violet-300 rounded-lg transition-all duration-300 hover:border-yellow-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 w-full bg-violet-200 rounded transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-3.5" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-violet-200 rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-violet-200 rounded transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          ></span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`fixed top-16 right-4 w-52 bg-violet-800 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 z-[9999]
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white hover:bg-violet-600 transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
