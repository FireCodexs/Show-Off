import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
