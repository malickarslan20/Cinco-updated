import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      {/* Top Footer */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 pb-10">
        
        {/* About + Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            {/* LOGO IMAGE */}
            <img
              src="/Logo.png"  // <-- change path if needed
              alt="CincoByte Logo"
              className="w-12 h-12 object-contain rounded-lg"
            />

            {/* LOGO TEXT */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              CincoByte
            </h2>
          </div>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Delivering value in every byte with modern web solutions, AI tools,
            automation systems, and visually stunning digital experiences.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-pink-400 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-pink-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>

          <p className="mt-4 text-gray-400">Email us anytime.</p>

          <a
            href="cincobyteofficial@gmail.com"
            className="mt-2 inline-block text-pink-400 hover:text-purple-400 transition"
          >
            cincobyteofficial@gmail.com
          </a>

          <div className="flex items-center gap-5 mt-5">
            <a href="#" className="hover:text-purple-400 transition"><Facebook size={22} /></a>
            <a href="https://www.instagram.com/cincobyte_/" className="hover:text-purple-400 transition"><Instagram size={22} /></a>
            <a href="https://www.linkedin.com/company/cincobyte/" className="hover:text-purple-400 transition"><Linkedin size={22} /></a>
            <a href="cincobyteofficial@gmail.com" className="hover:text-purple-400 transition"><Mail size={22} /></a>
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
