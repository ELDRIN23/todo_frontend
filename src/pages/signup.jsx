import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your signup logic here
    console.log("Signing up:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-md shadow-2xl bg-gray-800 rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-200 font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/30"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-200 font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-200 font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-200 font-semibold">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/30"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
                       text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl 
                       transition-transform duration-300 rounded-md"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-300 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
