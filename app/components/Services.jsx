import CheckIcon from "@/public/assets/icons/CheckIcon";
import ImeiIcon from "@/public/assets/icons/ImeiIcon";
import LocationIcon from "@/public/assets/icons/LocationIcon";
import LockIcon from "@/public/assets/icons/LockIcon";
import PauseIcon from "@/public/assets/icons/PauseIcon";
import Image from "next/image";
import React from "react";
import CardService from "./CardService";

const Services = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center bg-customBgColor2 rounded-[80px] px-16 py-6 ">
      {" "}
      <div className="flex flex-col md:w-1/2 mb-3">
        <h2 className="text-4xl text-customTextFont font-bold text-customTextColor1 ">
          Services We <span className="text-red-500">Provide</span>
        </h2>
        <p className="flex-1  w-[78%] mt-4 text-customTextColor3 font-customTextFont">
          At Priority Unlock, we provide a range of services designed to give
          you the freedom and flexibility you need with your mobile device. Our
          professional and efficient unlocking services cater to various needs,
          ensuring a seamless and hassle-free experience.
        </p>
        <div
          className="  mt-6  w-[26rem] h-[13rem] mx-auto md:mx-0  rounded-3xl flex flex-col items-center justify-center "
          style={{
            backgroundImage: `url("/assets/service.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="ml-[96%] flex items-center  justify-center p-4 bg-customBtnColor border-customBgColor border-[10px] min-w-[80px] min-h-[80px] rounded-[50%]">
            <PauseIcon />
          </div>
        </div>
      </div>
      {/* Right Section */}
      <CardService />
    </div>
  );
};

export default Services;
