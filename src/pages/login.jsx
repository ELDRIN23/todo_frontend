import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="card w-full max-w-md shadow-2xl bg-gray-800 rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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

          {/* Remember Me */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <label className="label cursor-pointer text-gray-200 flex items-center mb-2 sm:mb-0">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              Remember me
            </label>
            <a href="#" className="text-purple-400 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
                       text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl 
                       transition-transform duration-300 rounded-md"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-4 text-center text-gray-300 text-sm">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-purple-400 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
