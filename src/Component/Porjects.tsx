import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Swapping Number Academy",
    description:
      "A scalable multi-vendor marketplace with Stripe checkout and Firebase backend.",
    image: "/images/project1.png",
    link: "/case-study/ecommerce",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An ML-powered conversational assistant that automates responses and workflows.",
    image: "/images/project2.png",
    link: "/case-study/ai-assistant",
  },
  {
    title: "Mobile Booking App",
    description:
      "Cross-platform Flutter booking application with smooth UX and animations.",
    image: "/images/project3.png",
    link: "/case-study/booking-app",
  },
  {
    title: "Admin Dashboard System",
    description:
      "Django + React dashboard for analytics, reporting, and user management.",
    image: "/images/project4.png",
    link: "/case-study/dashboard",
  },
  {
    title: "Brand Identity Design",
    description:
      "Complete branding package including logo, color palette, and social visuals.",
    image: "/images/project5.png",
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
            className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all group shadow-md"
          >
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
             className=" inline-block mt-5 px-5 py-2 rounded-full 
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
