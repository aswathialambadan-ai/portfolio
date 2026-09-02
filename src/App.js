import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./utils/ThemeContext";
import Home from "./components.jsx/Home";
import About from "./components.jsx/About";
import Skills from "./components.jsx/Skills";
import Experience from "./components.jsx/Experience";
import Projects from "./components.jsx/Projects";
import Resume from "./components.jsx/Resume";
import Contact from "./components.jsx/Contact";
import NotFound from "./components.jsx/NotFound";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Portfolio Single Page & Section Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          {/* Custom 404 Page */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
