import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Service not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>

        <p className="text-gray-400 mb-10 text-lg md:text-xl">
          {service.description}
        </p>

        {/* Smaller responsive image */}
        <img
          src={service.src}
          alt={service.name}
          className="rounded-xl mb-10 mx-auto w-full max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
};

export default ServiceDetails;
