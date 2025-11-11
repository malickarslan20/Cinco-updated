import React from "react";
import BounceCards from "@/components/BounceCards";

const teamMembers = [
  {
    name: "Malik Arslan",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ali Raza",
    role: "Frontend Engineer",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sara Ahmed",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hassan Mirza",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Zainab Ali",
    role: "QA Engineer",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=600&q=80",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          Our passionate and skilled team brings creativity, innovation, and
          technical expertise to every project we deliver.
        </p>

        {/* --- Bouncing Cards Animation --- */}
        <div className="flex justify-center">
          <BounceCards
            images={teamMembers.map((member) => member.image)}
            containerWidth={700}
            containerHeight={400}
            enableHover={true}
          />
        </div>

        {/* --- Names & Roles Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-20">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-purple-700/40 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-purple-500"
              />
              <h3 className="text-lg font-semibold text-purple-300">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
