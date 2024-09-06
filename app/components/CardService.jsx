import CheckIcon from "@/public/assets/icons/CheckIcon";
import ImeiIcon from "@/public/assets/icons/ImeiIcon";
import LocationIcon from "@/public/assets/icons/LocationIcon";
import LockIcon from "@/public/assets/icons/LockIcon";
import React from "react";

const cardServiceData = [
  {
    icon: <LockIcon />,
    title: "Phone Unlocking",
    desc: "Seamless compatibility across devices. Enjoy global carrier freedom. Unlock quickly and effortlessly.",
  },
  {
    icon: <CheckIcon />,
    title: "Carrier Compatibility Check",
    desc: "Verify before unlocking. Prevent compatibility issues. Ensure your device works with the new carrier.",
  },
  {
    icon: <ImeiIcon />,
    title: "IMEI Cleaning",
    desc: "Clear IMEI restrictions. Restore phone usability on all networks. Comprehensive service across major carriers and regions.",
  },
  {
    icon: <LocationIcon />,
    title: "Remote Unlocking",
    desc: "Unlock from home with ease. Simple, step-by-step instructions. Support available every step of the way.",
  },
];
const CardService = () => {
  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-2 gap-x-10 mt-10 ">
      {cardServiceData.map((card, i) => (
        <div
          key={i}
          className={` md:min-w-[256px] md:min-h-[290px] flex flex-col  md:w-100 md:h-[35vh] bg-customBgColor2  gap-4 py-10  p-4 rounded-[45px] ${
            i === 0 ? "md:-mt-12 bg-customBtnColor text-white" : ""
          }`}
        >
          <div className="  flex items-center  justify-center p-2 bg-white w-[60px] h-[60px] rounded-[50%]">
            {card.icon}
          </div>
          <h3 className="ml-4 font-bold">{card.title}</h3>
          <p className="mt-2">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardService;
