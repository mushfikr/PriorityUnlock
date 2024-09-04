import Image from "next/image";
import React from "react";
import aboutUsImg from "../../public/assets/aboutUsImg.png";
import CustomButton from "./CustomButton";

const AboutUs = () => {
  return (
    <div className="flex flex-col mt-[14rem] p-20">
      <top>About us</top>
      <middle className="text-customTextColor1 mb-4 font-customTextFont text-[3.8rem] font-normal leading-normal">
        Unleashing the Full Potential of Your Brand with Creativity and
        Strategic <br />
        Vision
      </middle>
      <bottom className="flex  flex-col md:flex-row">
        <leftSection className=" flex-1 md:w-1/2">
          <Image
            src={aboutUsImg}
            alt="Icon"
            // width={40}
            // height={40}
            // sizes="100vw"
            className="rounded-3xl"
          />
        </leftSection>
        <rightSection className=" md:w-1/2 flex flex-col items-center  pl-9">
          <div className="text-center">
            <h2 className="text-red-500 text-2xl font-bold font-customTextFont pt-6 ">
              Crafting Brilliance Together
            </h2>
            <div className="p-6 flex  space-x-2">
              <CustomButton text="Innovate" />
              <CustomButton text="Create" />
              <CustomButton text="Elevate" />
              <CustomButton text="Ideas" />
              <CustomButton text="Imagination" />
            </div>
            <div
              className=" text-customTextColor2 font-customTextFont text-left text-2xl

"
            >
              Our mission is to unleash the full potential of your brand,
              combining creativity with strategic vision to achieve
              extraordinary results.
            </div>
          </div>
        </rightSection>
      </bottom>
    </div>
  );
};

export default AboutUs;
