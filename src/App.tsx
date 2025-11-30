import './App.css'
import About from './Component/About'
import ContactForm from './Component/Contact'
import Footer from './Component/Footer'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import Projects from './Component/Porjects'
import AllProjects from './Component/AllProjects'
import Services from './Component/Services'
import TeamSection from './Component/Team'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from "react";



function App() {
  useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  }
}, []);
  return (
    <Router>
      <div className="min-h-screen bg-black text-white w-screen">
        <Navbar />
        <Routes>
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
          <Route path="/AllProjects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
