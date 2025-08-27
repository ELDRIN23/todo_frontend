import React from "react";

const Advanced = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-20 bg-gray-900 text-white px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Card */}
      <div className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12 border border-gray-700 flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500">
          Advanced Features
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          Stay tuned! 🚀 An AI-powered chat feature is coming soon.  
          We'll bring smarter interactions and real-time assistance to enhance your Todo experience.
        </p>
        <p className="text-sm sm:text-base text-gray-400 mt-4 italic">
          Meanwhile, enjoy the current features and keep exploring!
        </p>
      </div>
    </section>
  );
};

export default Advanced;
