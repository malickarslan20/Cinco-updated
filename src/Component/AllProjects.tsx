import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface Project {
  title: string;
  descriptionPoints: string[]; // bullet points for modal
  techStack?: string[]; // tech list
  images: string[]; // carousel images
  github?: string; // optional GitHub repo link
  deploy?: string; // optional deployment link
  premium?: boolean;
}

const projects: Project[] = [
  {
    title: "Swapping Number Academy",
    descriptionPoints: [
      "Dynamic app combining social interaction with advanced AI tools and features.",
      "Users can create posts, like/dislike content, chat with AI.",
      "Advanced AI tools help generate content suggestions and automate tasks.",
    ],
    techStack: ["React.js", "Node.js", "Firebase", "OpenAI API"],
    images: ["/Project/Swapping.png"],
    deploy: "https://swappinnumbersacademy.com",
    premium: true,
  },
  {
    title: "Mamaar-e-Jahaan",
    descriptionPoints: [
      "More than a society — it’s a movement of medicos working with passion.",
      "Rooted in Iqbal’s dream and the spirit of Shaheen.",
      "We work to uplift students spiritually, mentally, and professionally.",
      "Guiding them toward balanced lives of purpose, resilience, and leadership.",
      "All activities are conducted under the light of divine values.",
      "Includes an Admin Panel and a Student Panel for management and participation.",
    ],
    techStack: ["TypeScript", "Node.js", "Framer Motion"],
    images: ["/Project/MJ/M1.jpg", "/Project/MJ/M2.jpg", "/Project/MJ/M3.jpg"],
    deploy: "https://mamaar-e-jahaan.com",
  },
  {
    title: "Visa & Travel Agency Management Web Application",
    descriptionPoints: [
      "Multi-dashboard system with role-based access for Admin, Applicant, and Demand users.",
"Secure data isolation ensuring each role accesses only permitted information.",
"Full applicant and demand management including profile updates, references, and linked records.",
"Server-side pagination for fast performance with large datasets.",
"Advanced group-based filtering using key-value pairs for precise data queries.",
"Automatic CV generation based on applicant information with export support.",
"Progress tracking modules with weekly, monthly, and yearly reporting.",
"Appwrite-powered backend for authentication, database, storage, and permissions.",
    ],
    techStack: ["TypeScript", "Framer Motion", "Appwrite"],
   images: [
  "/Project/PakQurtuba/Thumbnail.png",
  "/Project/PakQurtuba/1.png",
  "/Project/PakQurtuba/2.png",
  "/Project/PakQurtuba/3.png",
  "/Project/PakQurtuba/4.png",
  "/Project/PakQurtuba/5.png",
  "/Project/PakQurtuba/6.png"
],

    deploy: "https://pakqurtubaoep.com/",
  },
{
    title: "MasjidConnect",
    descriptionPoints: [
      "Automated prayer time updates daily via API",
"Mosque registration & secure admin login",
"Admin dashboard for uploading events and announcements",
"SMS & email notification support",
"Django REST APIs for all data",
"Celery for background tasks (notifications, scheduled updates)",
"Admin can Register mosque and manage profile",
"Admin can Add, edit, or delete events",
"Admin can Post community announcements",
"Admin can Send SMS/email notifications of events",
"Admin can Manage prayer time settings (API sync or manual)",
"Admin can View dashboard analytics",

" Users Can View live, automatically updated prayer times",
"Users Can Browse mosque events and announcements",
"Users Can Receive notifications/alerts"
    ],
    techStack: ["React.js", "DJango", "Rest API","Celery","MYSQL"],
    images: ["/Project/Masjid/thumbnail.jpg","/Project/Masjid/Homepage.png","/Project/Masjid/Features.jpeg","/Project/Masjid/Events.jpeg","/Project/Masjid/Mosque.png","/Project/Masjid/Search.png"],
    deploy: "https://swappinnumbersacademy.com",
  },

  {
    title: "Voice Assistant",
    descriptionPoints: [
      "Python-powered voice assistant capable of performing multiple intelligent tasks.",
      "Can open files, folders, websites, and play music.",
      "Responds to commands intelligently using speech recognition.",
    ],
    techStack: ["Python", "SpeechRecognition", "pyttsx3","OS"],
    images: ["/Voice.jpeg"],
    github: "https://github.com/example/voice-assistant",
  },
  {
    title: "Car Rental System",
    descriptionPoints: [
     "BLoC State Management: Uses Bloc pattern for clean separation of business logic and UI, ensuring maintainable and reactive code.",

"Firebase Authentication: Secure multi-method sign-in (email, phone, social login) via Firebase.",
"Real-Time Data: Firestore syncs data instantly across devices for bookings, availability, and notifications.",

"Vehicle Catalog: Browse vehicles with detailed specs, images, pricing, and availability.",
"Interactive Booking: Select vehicles, rental periods, and locations with real-time availability checks.",

"Booking Management: View, modify, or cancel reservations with automated history and refunds.",
"Owner Dashboard: Manage fleet, track bookings, earnings, and communicate with renters efficiently."
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs"],

    images: ["/Project/Car-Rental/Thumbnail.jpeg","/Project/Car-Rental/Pictures/home.jpg","/Project/Car-Rental/Pictures/cardetail.jpg","/Project/Car-Rental/Pictures/onBoarding.jpg","/Project/Car-Rental/Pictures/maps.jpg"],
    github: "https://github.com/example/property-predictor",
  },
  {
    title: "Food Delivery Application",
    descriptionPoints: [
      "Mobile app to browse restaurants, place food orders, and track them easily.",
      "Order tracking, restaurant reviews, and secure payment integration.",
      "Built for both iOS and Android platforms.",
    ],
    techStack: ["Flutter", "Firebase", "REST APIs"],
    images: ["/Project/App1.jpeg", "/Project/App2.jpeg"],
  },
  
  {
    title: "Resturant Reservation and Management System",
    descriptionPoints: [
     "Firebase Authentication: Supports email/password, phone, and social logins (Google, Facebook, Apple).",
  "Real-Time Menu Management: Restaurants can update dishes, prices, and availability instantly via Firestore.",
  "Interactive Digital Menu: High-quality images, descriptions, ingredients, nutrition, and customization options.",
  "Online Ordering: Customers can browse, customize, and place orders for delivery or pickup.",
  "Table Reservations: Book tables with date, time, party size, and seating preferences; real-time confirmation.",
  "Firebase Firestore Backend: Efficient data storage, retrieval, and sync for menus, orders, and reservations.",
  "Secure Payments: Supports cards, digital wallets, cash on delivery, and contactless payments with encryption.",
  "Ratings & Reviews: Customers can rate dishes and service, helping restaurants maintain quality."
    ],
    techStack: ["Flutter", "Firebase", "REST APIs","Payment method"],
    images: ["/Project/Restaurant/Thumbnail.png", "/Project/Restaurant/Pictures/1.jpg","/Project/Restaurant/Pictures/2.jpg","/Project/Restaurant/Pictures/3.jpg","/Project/Restaurant/Pictures/4.jpg","/Project/Restaurant/Pictures/5.jpg","/Project/Restaurant/Pictures/6.jpg","/Project/Restaurant/Pictures/7.jpg","/Project/Restaurant/Pictures/8.jpg","/Project/Restaurant/Pictures/9.jpg"],
  },
  {
    title: "Creative Graphic Design Portfolio",
    descriptionPoints: [
      "Showcases creative graphic designs for social media marketing campaigns.",
      "Includes academic promotions, product advertisements, events, and awareness campaigns.",
      "Designs are visually appealing and tailored for each client.",
    ],
    techStack: ["Adobe Photoshop", "Illustrator", "Figma"],
    images: ["/Project/Graphic.jpeg"],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(
      (prev) => (prev + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="portfolio" className="bg-black text-white py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
           All Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mt-4 text-lg md:text-xl"
        >
          Each project is a testament to our dedication, skill, and passion for excellence.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all group shadow-md flex flex-col"
          >
            {project.premium && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-2 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                🌍 International Project
              </motion.div>
            )}

            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-56 object-contain rounded-xl group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <h3 className="text-2xl font-semibold mt-5 text-purple-300">{project.title}</h3>
            <p className="text-gray-400 mt-3 text-base leading-relaxed flex-grow">
              {project.descriptionPoints[0]}
            </p>

            {/* Small rounded View Case Study button on bottom-left */}
            <div className="mt-auto">
              <button
                type="button"
                aria-label={`View Case Study of ${project.title}`}
                onClick={() => openModal(project)}
                className="inline-block mt-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-xs hover:shadow-lg hover:shadow-purple-500/40 transition-all"
              >
                View Case Study
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-[#111] p-6 md:p-10 rounded-3xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={closeModal}
              className="absolute top-5 right-5 text-white p-2 hover:text-purple-500 transition"
            >
              <X size={24} />
            </button>

            <h3 className="text-3xl font-bold text-purple-300 mb-4">{selectedProject.title}</h3>

            {/* Description Points */}
            <ul className="text-gray-400 mb-4 list-disc list-inside">
              {selectedProject.descriptionPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            {selectedProject.techStack && (
              <div className="mb-6">
                <h4 className="text-purple-400 font-semibold mb-2">Tech Stack:</h4>
                <ul className="text-gray-400 list-disc list-inside">
                  {selectedProject.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Carousel */}
            {selectedProject.images.length > 0 && (
              <div className="relative mb-6">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} image`}
                  className="w-full h-72 object-contain rounded-2xl"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
                    >
                      {">"}
                    </button>
                  </>
                )}
              </div>
            )}

            {/* GitHub & Deployment Buttons */}
            <div className="flex gap-4 flex-wrap">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 rounded-full font-semibold text-white hover:bg-purple-500 hover:!text-white transition"

                >
                  GitHub Repo
                </a>
              )}
              {selectedProject.deploy && (
                <a
                  href={selectedProject.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 rounded-full font-semibold text-white hover:bg-purple-500 hover:!text-white transition"


                >
                  Deployment Link
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
