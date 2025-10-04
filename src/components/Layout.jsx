import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth, AuthProvider } from "../context/AuthContext";

const InnerLayout = () => {
  const { isLoggedIn, login } = useAuth();
  const location = useLocation();

  // Quick refresh: auto-login if token exists whenever page loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isLoggedIn) {
      login(); // sets isLoggedIn = true immediately
    }
  }, [location.pathname]); // run on route change / page load

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Layout = () => (
  <AuthProvider>
    <InnerLayout />
  </AuthProvider>
);

export default Layout;
