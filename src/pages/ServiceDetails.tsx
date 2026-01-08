import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import { CheckCircle, Clock, Briefcase, Star } from "lucide-react";

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <a href="/#services" className="text-purple-400 hover:text-purple-300">
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {service.name}
          </h1>
          <p className="text-gray-400 mb-10 text-lg md:text-xl max-w-3xl mx-auto">
            {service.description}
          </p>

          {/* Stats Cards */}
          {service.details && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Briefcase className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <div className="text-3xl font-bold text-white mb-1">
                  {service.details.projectsCompleted}+
                </div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-lg font-bold text-white mb-1">
                  {service.details.deliveryTime}
                </div>
                <div className="text-sm text-gray-400">Delivery Time</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Star className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-sm text-gray-400">Client Rating</div>
              </div>
            </div>
          )}

          {/* Image */}
          <img
            src={service.src}
            alt={service.name}
            className="rounded-2xl mb-16 mx-auto w-full max-w-2xl shadow-2xl"
          />
        </div>

        {/* Details Section */}
        {service.details && (
          <div className="space-y-16">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                {service.details.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {service.details.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Technologies We Use</h2>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {service.details.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-6 py-3 bg-gradient-to-r ${service.gradient} rounded-full text-white font-medium shadow-lg`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {service.details.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors text-center"
                  >
                    <div className="text-4xl mb-3">💼</div>
                    <p className="text-gray-300">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-6">💬</div>
                <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
                <p className="text-gray-300 text-lg italic leading-relaxed mb-6">
                  "{service.details.clientTestimonial}"
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Let's discuss how we can bring your vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className={`px-8 py-4 bg-gradient-to-r ${service.gradient} rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg`}
                >
                  Contact Us
                </a>
                <a
                  href="/#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDetails;