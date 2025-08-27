import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg rounded-t-2xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        {/* App Info */}
        <div>
          <p className="flex items-center justify-center md:justify-start gap-2 font-semibold text-lg">
            <span className="text-yellow-300 text-xl">📝</span> Todo App
          </p>
          <p className="text-sm opacity-80">
            Built with React, TailwindCSS, DaisyUI & Node.js (backend).
          </p>
          <p className="italic opacity-90 text-sm md:text-base font-semibold text-yellow-300">
            #thebestthingsnevercomeeasy
          </p>
        </div>

        {/* Contact Icons (Horizontal) */}
        <div className="flex flex-row items-center md:items-end gap-6 text-2xl">
          <a
            href="https://github.com/ELDRIN23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/eldrin-johnson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_e_ldrin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition"
          >
            <FaInstagram />
          </a>
          {/* Gmail Web Link */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=eldrinjohnsondev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-xs text-center opacity-60 pb-3">
        © {new Date().getFullYear()} Eldrin Todos. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
