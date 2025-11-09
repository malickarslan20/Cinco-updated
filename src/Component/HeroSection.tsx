import { motion } from "framer-motion";
import Squares from "../components/Squares";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[550px] bg-black overflow-hidden">
      {/* Animated background */}
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
      />

      {/* Optional overlay gradient for better readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>

      {/* Hero content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Delivering <span className="text-purple-500">value</span> in every bite
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.button
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          <motion.button
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple transition text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Services
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
