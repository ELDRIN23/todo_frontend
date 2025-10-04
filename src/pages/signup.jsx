import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import axiosInstance from "../../axiosInstance";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/signup", { username, password });
      localStorage.setItem("token", response?.data?.token);
      alert("Registration successful!");
      navigate("/Tasks");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg bg-gray-800/80 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-2xl border border-gray-700">
        <h2 className="text-white text-2xl sm:text-3xl font-extrabold text-center mb-4 sm:mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-300 text-sm sm:text-base mb-6">
          Join us and manage your tasks seamlessly
        </p>

        <form onSubmit={handleSignup} className="space-y-4 sm:space-y-5">
          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-3 py-3 sm:py-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
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
              className="w-full pl-10 pr-10 py-3 sm:py-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
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
            className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                       py-3 sm:py-4 rounded-lg text-white font-semibold text-lg
                       shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-gray-300 text-sm sm:text-base">
          Already have an account?{" "}
          <span
            className="text-purple-400 hover:text-purple-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>

        {/* Optional Social Buttons */}
        {/* <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="flex-1 flex items-center justify-center bg-gray-700 text-white px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-600 transition">
            Google
          </button>
          <button className="flex-1 flex items-center justify-center bg-gray-700 text-white px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-600 transition">
            GitHub
          </button>
        </div> */}
      </div>
    </div>
  );
}
