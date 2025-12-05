import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [status, setStatus] =
    useState<"idle" | "success" | "error" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/xzznglgq", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-12">
      {/* Inline CSS for loader */}
      <style>{`
        .loader {
          border-top-color: transparent;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
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

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10
                   p-8 md:p-10 rounded-2xl shadow-2xl"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="text-gray-300 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 
                         text-white placeholder-gray-500 
                         focus:outline-none focus:border-purple-500 focus:ring-1 
                         focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 
                         text-white placeholder-gray-500 
                         focus:outline-none focus:border-pink-500 focus:ring-1 
                         focus:ring-pink-500 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-300 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Write your message..."
              className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 
                         text-white placeholder-gray-500 
                         focus:outline-none focus:border-purple-500 focus:ring-1 
                         focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Success / Error Message */}
          {status === "success" && (
            <p className="text-green-400 text-center font-medium">
              ✔ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center font-medium">
              ✖ Something went wrong. Please try again.
            </p>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: status !== "loading" ? 1.05 : 1 }}
            whileTap={{ scale: status !== "loading" ? 0.97 : 1 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 
                       text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/40 
                       transition-all flex items-center justify-center gap-3"
          >
            {status === "loading" ? (
              <>
                <span className="loader w-5 h-5 border-2 border-white rounded-full inline-block"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
