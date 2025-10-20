import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import axiosInstance from "../../axiosInstance";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/users/signup", {
        username,
        password,
      });
      localStorage.setItem("token", response?.data?.token);
      alert("Registration successful!");
      // Simulate delay for smoother loading experience
      await new Promise((resolve) => setTimeout(resolve, 2500));
      navigate("/Tasks");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed. Try again!");
    } finally {
      // small delay before hiding loader for smooth UX
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Blur content when loading */}
      <div
        className={`transition-all duration-300 ${loading ? "blur-sm" : ""}`}
      >
        <div className="w-full max-w-xl sm:max-w-2xl bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-700">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold text-center mb-5 sm:mb-7">
            Create Account
          </h2>
          <p className="text-center text-gray-300 text-base sm:text-lg mb-7">
            Join us and manage your tasks seamlessly
          </p>

          <form onSubmit={handleSignup} className="space-y-5 sm:space-y-6">
            {/* Username */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-4 sm:py-5 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-4 sm:py-5 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                required
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                         py-4 sm:py-5 rounded-lg text-white font-semibold text-lg
                         shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="mt-8 text-center text-gray-300 text-base sm:text-lg">
            Already have an account?{" "}
            <span
              className="text-purple-400 hover:text-purple-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
        </div>
      </div>

      {/* Loading Overlay (Your Loader) */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md z-50">
          <span className="loading loading-spinner loading-xl text-purple-400 mb-4"></span>
          <p className="text-gray-300 text-center text-sm sm:text-base px-4">
            We apologize for the delay — our backend server is experiencing high
            traffic and may take a few seconds to respond. Thank you for your
            understanding.{" "}
          </p>
        </div>
      )}
    </div>
  );
}
