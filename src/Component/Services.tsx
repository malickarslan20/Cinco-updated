import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance, scalability, and seamless user experience.",
    image: "/images/webdev.png",
  },
  {
    title: "Mobile Development",
    description:
      "We create seamless mobile experiences for Android and iOS using cutting-edge frameworks.",
    image: "/images/mobile.png",
  },
  {
    title: "UI/UX Design",
    description:
      "We craft intuitive, user-centered interfaces that enhance engagement and usability.",
    image: "/images/design.png",
  },
  {
    title: "Cloud Integration",
    description:
      "We help businesses scale and secure their infrastructure using cloud technologies like Firebase, AWS, and Appwrite.",
    image: "/images/cloud.png",
  },
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const top = containerRef.current.getBoundingClientRect().top;
      const height = containerRef.current.offsetHeight;
      const scrollPos = window.innerHeight - top; // how much we scrolled into the section
      const index = Math.floor(
        (scrollPos / height) * services.length
      );
      setCurrentIndex(Math.min(Math.max(index, 0), services.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentService = services[currentIndex];

  return (
    <section
      id="services"
      ref={containerRef}
      className={`relative bg-black text-white`}
      style={{ height: `${services.length * 100}vh` }} // each service gets full viewport height
    >
      {/* Heading */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          What We Offer?
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Explore the services we provide to bring your ideas to life.
        </p>
      </motion.div>

      {/* Sticky content */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: title + description */}
          <motion.div
            key={currentService.title}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-4xl md:text-5xl font-semibold text-purple-300">
              {currentService.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentService.description}
            </p>
            <div className="h-1 w-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </motion.div>

          {/* Right: corresponding image */}
          <motion.div
            key={currentService.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-80 h-80 md:w-96 md:h-96 object-contain rounded-2xl shadow-lg shadow-purple-500/40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
