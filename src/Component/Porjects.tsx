import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce solution built with React, Firebase, and Stripe integration for smooth product browsing and seamless checkout.",
    image: "/images/project1.png",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by machine learning models that enhances customer support and automates workflows.",
    image: "/images/project2.png",
  },
  {
    title: "Mobile Booking App",
    description:
      "Cross-platform Flutter application enabling users to book services with a clean UI and smooth navigation.",
    image: "/images/project3.png",
  },
  {
    title: "Portfolio Management System",
    description:
      "A full-stack web dashboard built using Django and React, offering analytics, reports, and admin tools.",
    image: "/images/project4.png",
  },
  {
    title: "Brand Identity & Design",
    description:
      "A complete brand identity design solution including logos, color systems, and social media visual themes.",
    image: "/images/project5.png",
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const top = containerRef.current.getBoundingClientRect().top;
      const height = containerRef.current.offsetHeight;

      const scrollPos = window.innerHeight - top;
      const index = Math.floor((scrollPos / height) * projects.length);

      setCurrentIndex(
        Math.min(Math.max(index, 0), projects.length - 1)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-black text-white"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Our Projects
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          A glimpse of the work we’ve delivered for clients worldwide.
        </p>
      </motion.div>

      {/* Sticky Content */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <motion.div
            key={currentProject.title}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-4xl md:text-5xl font-semibold text-purple-300">
              {currentProject.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentProject.description}
            </p>
            <div className="h-1 w-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </motion.div>

          {/* Right: Image */}
          <motion.div
            key={currentProject.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-80 h-80 md:w-96 md:h-96 object-contain rounded-2xl shadow-lg shadow-pink-500/40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
