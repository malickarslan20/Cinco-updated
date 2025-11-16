import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mt-4 text-lg md:text-xl"
        >
          Have a project in mind? Let's bring it to life!
        </motion.p>
      </div>

      {/* ✨ Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10
                   p-8 md:p-10 rounded-2xl shadow-2xl"
      >
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="text-gray-300 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 
                         text-white placeholder-gray-500 
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                         transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 
                         text-white placeholder-gray-500 
                         focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 
                         transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-300 font-medium">Message</label>
            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 
                         text-white placeholder-gray-500 
                         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                         transition-all"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 
                       text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/40 
                       transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
