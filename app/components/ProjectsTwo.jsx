import React from "react";

const ProjectsTwo = () => {
  const cardData = [
    {
      title: "Social Media Design Solutions",
      desc: "We create effective content strategies to attract your target audience.....",
      bgImage: "/assets/cardImageOne.jpg",
    },
    {
      title: "Marketing Design Services",
      desc: "Well-designed marketing materials that strengthen your brand.....",
      bgImage: "/assets/cardImageTwo.jpg",
    },
    {
      title: "Website Design Solutions",
      desc: "A well-designed website that increases brand credibility.....",
      bgImage: "/assets/cardImageThree.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center py-16 mt-[5rem]  ">
      <h2 className="text-6xl font-bold font-customTextFont py-4">
        <span className="text-red-500">Recent</span> Project
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 pt-16 mt-[5rem]">
        {cardData.map((card, i) => (
          <div
            key={i}
            className={` p-2 lg:p-4 min-w-[19.375rem] min-h-[21.5625rem] mx-auto rounded-3xl md:${
              i === 1 ? "transform md:-translate-y-[5rem]" : ""
            }`}
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-end h-full p-2 ">
              <div className="title-text ">{card.title}</div>
              <div className="desc-text max-w-[200px] pt-[1rem]">
                {" "}
                {/* Specific width for text */}
                {card.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTwo;
