import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  // Logout
  const handleLogOut = () => {
    // Update context which will re-render layout/navbar
    logout();
    // navigate to login page
    navigate("/login");
  };

  // Links
  const publicLinks = [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Signup", path: "/" },
    { label: "Login", path: "/login" },
  ];

  const privateLinks = [
     { label: "Tasks", path: "/tasks" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
   
    { label: "Logout" },
  ];

  const links = isLoggedIn ? privateLinks : publicLinks;

  return (
    <div className="fixed top-0 left-0 w-full navbar bg-violet-900 text-white px-4 lg:px-8 shadow-lg z-50">
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-violet-200 hover:text-white transition-all duration-300"
        >
          EldrinTodo
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="flex-none hidden md:flex gap-4">
        {links.map((item) =>
          item.label === "Logout" ? (
            <button
              key={item.label}
              onClick={handleLogOut}
              className="btn bg-red-600 hover:bg-red-700"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.label}
              className="btn bg-violet-700 border-none hover:bg-violet-600 hover:scale-105 transition-all duration-300"
              to={item.path}
            >
              {item.label}
            </Link>
          )
        )}
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
            {links.map((item) =>
              item.label === "Logout" ? (
                <li key={item.label}>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-4 py-3 bg-red-600 hover:bg-red-700"
                  >
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-white hover:bg-violet-600 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
