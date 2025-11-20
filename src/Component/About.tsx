import { JSX, useEffect, useRef, useState } from "react";
import { Target, Users, Award, Zap } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

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

/* ---------------------------------------------
   Keep stats stable (move outside component)
   so the hook isn't retriggered every render.
--------------------------------------------- */
const STATS: Stat[] = [
  { number: "10+", label: "Projects Completed" },
  { number: "5+", label: "Happy Clients" },
  { number: "2+", label: "Years Experience" },
];

/* ===========================================
   SAFE COUNT-UP HOOK (works in browser)
   - expects stable stats (we use STATS)
   - runs once when isInView becomes true
=========================================== */
const useCountUpArray = (stats: Stat[], isInView: boolean) => {
  const [counts, setCounts] = useState<string[]>(() => stats.map(() => "0"));

  useEffect(() => {
    if (!isInView) return;

    const intervals: number[] = [];

    stats.forEach((stat, index) => {
      const numericStr = stat.number.replace(/\D/g, "");
      const numeric = numericStr === "" ? NaN : parseInt(numericStr, 10);
      const symbol = stat.number.replace(/[0-9]/g, "");

      if (Number.isNaN(numeric)) {
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = stat.number;
          return updated;
        });
        return;
      }

      const duration = 2000;
      const tickMs = 75;
      const steps = Math.max(1, Math.floor(duration / tickMs));
      const increment = numeric / steps;

      let current = 0;
      const id = window.setInterval(() => {
        current += increment;
        if (current >= numeric) {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = `${numeric}${symbol}`;
            return updated;
          });
          window.clearInterval(id);
        } else {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = `${Math.floor(current)}${symbol}`;
            return updated;
          });
        }
      }, tickMs);

      intervals.push(id);
    });

    return () => intervals.forEach((i) => window.clearInterval(i));
  }, [isInView, stats]);

  return counts;
};

const About: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const animatedCounts = useCountUpArray(STATS, isInView);

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

  const gradientMap: Record<string, string> = {
    purple: "from-purple-400 to-purple-600",
    pink: "from-pink-400 to-pink-600",
    blue: "from-blue-400 to-blue-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-4xl md:text-5xl font-bold pb-2 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            About Cincobyte
          </h2>
          <p className="md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming
            businesses through innovative digital solutions and exceptional user experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-2 animate-pulse">
                {animatedCounts[index] ?? stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-2 animate-pulse">
              24/7
            </div>
            <div className="text-gray-400 font-medium">Support</div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/60 border border-purple-700/40 p-8 rounded-2xl shadow-lg 
                 cursor-default backdrop-blur-sm"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {value.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                {value.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{value.description}</p>

              <motion.div
                className={`mt-5 h-1 rounded-full bg-gradient-to-r ${gradientMap[value.color]}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default About;
