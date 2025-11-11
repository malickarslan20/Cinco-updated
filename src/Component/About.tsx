import { JSX,useEffect, useRef } from "react";
import { Target, Users, Award, Zap } from "lucide-react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface Stat {
  number: string;
  label: string;
}

interface Value {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const About: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
const isInView = useInView(ref, { once: true, amount: 0.1 });
const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats: Stat[] = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  const values: Value[] = [
    {
      icon: <Target className="text-purple-400" size={48} />,
      title: "Mission-Driven",
      description:
        "We focus on delivering solutions that align with your business objectives and drive measurable results.",
      color: "purple",
    },
    {
      icon: <Users className="text-pink-400" size={48} />,
      title: "Client-Centric",
      description:
        "Our clients' success is our success. We build lasting partnerships through exceptional service.",
      color: "pink",
    },
    {
      icon: <Award className="text-blue-400" size={48} />,
      title: "Delivering Value",
      description:
        "In every project, we deliver value, not just code, crafting solutions that solve real problems and empower users through innovation.",
      color: "blue",
    },
    {
      icon: <Zap className="text-yellow-400" size={48} />,
      title: "Innovation",
      description:
        "We stay ahead of trends and technologies to deliver cutting-edge solutions for modern challenges.",
      color: "yellow",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // map actual tailwind classes for safe build
  const gradientMap: Record<string, string> = {
    purple: "from-purple-400 to-purple-600",
    pink: "from-pink-400 to-pink-600",
    blue: "from-blue-400 to-blue-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold pb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            About Cincobyte
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are a forward-thinking technology company dedicated to
            transforming businesses through innovative digital solutions and
            exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.4 },
              }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-zinc-900/60 border border-purple-700/40 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-500 cursor-default backdrop-blur-sm"
              whileHover={{
                y: -10,
                scale: 1.05,
                rotate: [0, 1, -1, 0],
              }}
            >
              <motion.div
                className="mb-4"
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.6 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>

              {/* ✅ Fixed Animated Line (works for all cards) */}
              <motion.div
                className={`mt-5 h-1 rounded-full bg-gradient-to-r ${gradientMap[value.color]}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
