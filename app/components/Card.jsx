// components/Card.jsx

import Arrowicon from "@/public/assets/Arrowicon";
import Image from "next/image";

const Card = ({ imageSrc, title, bottomImageSrc }) => {
  return (
    <div
      className="relative flex flex-col justify-between min-w-[16rem] min-h-[15rem] rounded-[50px] px-8 py-8"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-customBtnColor2 via-transparent to-black opacity-75 rounded-[50px]"></div>

      {/* Content */}
      <h2 className="relative z-10 text-xl font-customTextFont text-white w-3/4">
        {title}
      </h2>

      {/* Image Icon at Bottom */}
      <div className="relative z-10 flex justify-start">
        <Arrowicon />
      </div>
    </div>
  );
};

export default Card;
