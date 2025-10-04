import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <motion.div
        className="w-full max-w-5xl bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          About the Developer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hi, I’m <span className="font-semibold text-white">Eldrin</span>. A{" "}
          <span className="font-semibold text-white">Full Stack Developer</span> &{" "}
          <span className="font-semibold text-white">Cybersecurity Enthusiast</span>.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          I build modern web apps that are fast, clean, and responsive. This Todo project
          is one of my experiments to mix productivity with a smooth user experience.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          I explore new technologies and contribute to open-source communities.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col md:flex-row gap-6 justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 120 }}
        >
          <a
            href="https://wa.me/9061014915"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                       text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl
                       transition-transform duration-300 w-full md:w-auto text-center"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/ELDRIN23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-500 text-gray-200 font-semibold rounded-xl
                       hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300
                       w-full md:w-auto text-center"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
