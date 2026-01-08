import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import About from "./Component/About";
import ContactForm from "./Component/Contact";
import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Porjects";
import AllProjects from "./Component/AllProjects";
import TeamSection from "./Component/Team";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails"; // Import your dynamic page

function App() {
  const location = useLocation();

  // Scroll to target section after Home is mounted
  useEffect(() => {
    const scrollToTarget = () => {
      const target = localStorage.getItem("scrollTo");
      if (!target) return;

      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollTo"); // clear after scrolling
      } else {
        // If section not found, try again next frame
        requestAnimationFrame(scrollToTarget);
      }
    };

    if (location.pathname === "/") {
      scrollToTarget();
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <Services />
              <Projects />
              <TeamSection />
              <ContactForm />
            </>
          }
        />

        {/* All Projects page */}
        <Route path="/AllProjects" element={<AllProjects />} />

        {/* Dynamic Service Details page */}
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
