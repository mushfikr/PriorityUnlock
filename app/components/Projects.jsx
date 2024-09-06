import Image from "next/image";
import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button className="bg-red-500 text-white p-2 rounded-full">
          <Image
            src="/assets/encrypt.png"
            alt="Check"
            className="  "
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const projects = [
    {
      image: "/assets/cardImage1.png",
      title: "Social Media Design Solutions",
      description:
        "We create effective content strategies to attract your target audience...",
    },
    {
      image: "/assets/cardImage1.png",

      title: "Marketing Design Services",
      description:
        "Well-designed marketing materials that strengthen your brand...",
    },
    {
      image: "/assets/cardImage1.png",

      title: "Website Design Solutions",
      description:
        "A well-designed website that increases brand credibility...",
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 ">
      {/* Title Section */}
      <h2 className="text-4xl font-bold mb-8">
        <span className="text-red-500">Recent</span> Project
      </h2>

      {/* Projects Section */}
      <div className="flex items-center justify-center space-x-4">
        {/* Left Arrow */}
        <button className="bg-white p-2 rounded-full shadow-lg"></button>

        {/* Project Cards */}
        <div className="flex space-x-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button className="bg-white p-2 rounded-full shadow-lg"></button>
      </div>
    </div>
  );
};

export default RecentProjects;
