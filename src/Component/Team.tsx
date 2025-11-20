import React from "react";
// import BounceCards from "@/components/BounceCards";

const teamMembers = [
  {
    name: "Shayan Mirza",
    role: "Co-founder & ML Engineer",
    image: "Shayan.jpeg",
  },
  {
    name: "Zia Ur Rehman",
    role: "Co-founder & Django Developer",
    image: "Zia.jpeg",
  },
  {
    name: "Kashif Ur Rehman",
    role: "CTO & Full Stack Developer",
    image: "Kashif.jpg",
  },
  {
    name: "Saad Ijaz",
    role: "Senior MERN and Agentic AI Developer",
    image: "Saad.jpeg",
  },
  
  {
    name: "Malick Arslan",
    role: "MERN Stack Developer",
    image: "Arslan1.jpg",
  },
  {
    name: "Talha Ayyaz",
    role: "Flutter Developer",
    image: "Talha.jpeg",
  }
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

        {/* --- Bouncing Cards Animation ---
        <div className="flex justify-center">
          <BounceCards
            images={teamMembers.map((member) => member.image)}
            // containerWidth={700}
            // containerHeight={400}
            enableHover={true}
          />
        </div> */}

        {/* --- Names & Roles Grid --- */}
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-10 mt-20">
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
