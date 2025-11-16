import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  premium?: boolean; // ⭐ NEW FIELD
}

const projects: Project[] = [
  {
    title: "Swapping Number Academy",
    description:
      "Swappin Number Academy is a dynamic app that combines social interaction with advanced AI tools, allowing users to create posts, like/dislike content, chat with AI ",
    image: "/Project/Web.jpg",
    link: "swappinnumbersacademy.com",
    premium: true, // ⭐ THIS WILL SHOW THE BADGE
  },
  {
    title: " Voice Assistant",
    description:
      "It is a Python Powered Voice Assistant, can perform multiple tasks from opening any file or folder to opening any website",
    image: "/Project/Voice.jpg",
    link: "/case-study/ai-assistant",
  },
  {
    title: "Property Price Predictor",
    description:
      "It is a Machine Learning Project. It can predict prices of the property based on data given! It is accurate and 100% trustworthy.",
    image: "/Project/Price.jpg",
    link: "/case-study/booking-app",
  },
  {
    title: "Food Delivery Application",
    description:
      "A customer-facing mobile application built with Flutter that enables users to browse restaurants, place food orders",
    image: "/Project/App1.jpeg",
    link: "/case-study/dashboard",
  },
  {
    title: "Creative Graphic Design Portfolio for Social Media &Marketing",
    description:
      "This project showcases a diverse range of creative graphic designs tailored for social media marketing, academic promotions, product advertisements, events, and awareness campaigns. Our team crafted visually appealing",
    image: "/Project/Graphic.jpeg",
    link: "/case-study/branding",
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="bg-black text-white py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Our Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mt-4 text-lg md:text-xl"
        >
          Crafted with passion. Delivered with precision.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all group shadow-md"
          >
            {/* ⭐ Special Badge for Premium Project */}
            {project.premium && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                🌍 International Project
              </motion.div>
            )}

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-contain rounded-xl group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mt-5 text-purple-300">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-3 text-base leading-relaxed">
              {project.description}
            </p>

            {/* Case Study Button */}
            <a
              href={project.link || "#"}
              className="inline-block mt-5 px-5 py-2 rounded-full 
             bg-gradient-to-r from-purple-500 to-pink-500
             text-white font-semibold text-sm 
             hover:shadow-lg hover:shadow-purple-500/40 
             transition-all"
            >
              <span className="text-white">View Case Study</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
