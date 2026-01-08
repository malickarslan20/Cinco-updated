import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { Service } from "../types/service";

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/services/${service.slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full cursor-pointer"
      >
        <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700">
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.src}
              alt={service.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className={`absolute bottom-4 left-6 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl`}
            >
              {service.icon}
            </motion.div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {service.name}
            </h3>
            {/* <p className="text-gray-400 mb-6">{service.description}</p> */}

            <div className="text-purple-400 font-semibold text-sm">
              Learn More →
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-400">
            Cutting-edge solutions tailored to your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
