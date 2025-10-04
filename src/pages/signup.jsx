import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/users/signup", { username, password });
      console.log("Signup response:", response?.data);
      localStorage.setItem("token", response?.data?.token)
      alert("Registration successful!");
      navigate("/Tasks"); 
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-xl">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 py-2 rounded text-white hover:bg-purple-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
