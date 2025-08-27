import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./src/components/Layout";

// pages
import Tasks from "./src/pages/Tasks";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Advanced from "./src/pages/Advanced"; 
import Signup from "./src/pages/signup";
import Login from "./src/pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Signup />} /> {/* Default route */}
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="advanced" element={<Advanced />} />
        <Route path="Tasks" element={<Tasks />} />
         <Route path="Login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
