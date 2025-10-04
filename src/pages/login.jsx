import React, { useState } from "react";
import axiosInstance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", { username, password });
      localStorage.setItem("token", response?.data?.token);
      alert("Login successful!");
      navigate("/tasks");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg bg-gray-800/90 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">Login</h2>
        <p className="text-center text-gray-300 mb-6">
          Access your account to manage your tasks efficiently
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
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
              className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
              required
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-purple-400 transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
                       text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl 
                       transition transform duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-gray-300 text-sm">
          Don't have an account?{" "}
          <a href="/" className="text-purple-400 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
