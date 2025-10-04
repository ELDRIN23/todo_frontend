import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <motion.div
        className="card w-full max-w-5xl bg-base-100 shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="card-body md:p-16 p-6 text-center">
          <motion.h2
            className="card-title text-4xl md:text-6xl font-extrabold justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            About the Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-base-content/80 mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Hi, I’m <span className="font-semibold">Eldrin</span> 👋. A{" "}
            <span className="font-semibold">Full Stack Developer</span> &
            <span className="font-semibold"> Cybersecurity Enthusiast</span>.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-base-content/80 mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            I build modern web apps that are fast, clean, and responsive. This
            Todo project is one of my experiments to mix productivity with a
            smooth user experience,
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-base-content/80 mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            i explore new technologies, and contribute to open-source communities.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 120 }}
          >
            {/* Contact Me button */}
            <a
              href="https://wa.me/9061014915" // your phone number
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg w-full md:w-auto"
            >
              Contact Me
            </a>

            {/* View My Work button */}
            <a
              href="https://github.com/ELDRIN23" // replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg w-full md:w-auto"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
