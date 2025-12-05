import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// ScrollLink component
interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Navigate to home and send the target section in state
      navigate("/", { state: { scrollTo: to } });
      return;
    }

    // Already on home → scroll directly
    const section = document.getElementById(to);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      {/* Top Footer */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 pb-10">
        {/* About + Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col items-center sm:items-start"
        >
          <div className="flex items-center gap-3">
            <img
              src="/Logo.png"
              alt="CincoByte Logo"
              className="w-12 h-12 object-contain rounded-lg"
            />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              CincoByte
            </h2>
          </div>

          <p className="mt-4 text-center sm:text-left text-gray-400 leading-relaxed">
            Delivering value in every byte with modern web solutions, AI tools,
            automation systems, and visually stunning digital experiences.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex w-full flex-col items-center sm:items-start"
        >
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <ScrollLink
                to="home"
                className="cursor-pointer hover:text-pink-400 transition"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                className="cursor-pointer hover:text-pink-400 transition"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                className="cursor-pointer hover:text-pink-400 transition"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                className="cursor-pointer hover:text-pink-400 transition"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col items-center sm:items-start"
        >
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>

          <p className="mt-4 text-gray-400">Email us anytime.</p>

          <a
            href="mailto:cincobyteofficial@gmail.com"
            className="mt-2 inline-block text-pink-400 hover:text-purple-400 transition"
          >
            cincobyteofficial@gmail.com
          </a>

          <div className="flex items-center gap-5 mt-5">
            <a href="#" className="hover:text-purple-400 transition">
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/cincobyte_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/cincobyte/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:cincobyteofficial@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center text-gray-500 border-t border-white/10 pt-6"
      >
        © {new Date().getFullYear()} CincoByte. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
