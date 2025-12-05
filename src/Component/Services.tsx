import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: "Full Stack Web Development",
    quote:
      "Custom web applications built with modern technologies for optimal performance, scalability, and seamless user experience.",
    designation: "CincoByte Service",
    src: "/Gig/Web.png",
  },
  {
    name: "Flutter Mobile App Development",
    quote:
      "Native and cross-platform mobile applications that engage users and drive business growth.",
    designation: "CincoByte Service",
    src: "/Gig/App.png",
  },
  {
    name: "Machine Learning",
    quote:
      "We design and deploy intelligent machine learning solutions that transform raw data into actionable insights.",
    designation: "CincoByte Service",
    src: "/Gig/Cinco.png",
  },
  {
    name: "Python Django Web Development",
    quote:
      "Robust and scalable Django solutions tailored for web development, automation, and data processing.",
    designation: "CincoByte Service",
    src: "/Gig/Web.png",
  },
  {
    name: "AI Agents",
    quote:
      "Automated and scalable AI-driven Python solutions tailored for automation and modern requirements.",
    designation: "CincoByte Service",
    src: "/Gig/Python.png",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="bg-black text-white py-24 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-16 
                     bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
        >
          What we Offer?
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
    </>
  );
};

export default Services;
