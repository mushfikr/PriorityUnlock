import React from "react";

import "../syles/home.css";
import { Avatar } from "@nextui-org/react";
import Card from "../components/Card"; // Adjust path as needed
import Form from "./Form";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Policy from "./Policy";
import RecentProjects from "./Projects";
import PricingPlan from "./PricingPlan";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Test from "./Test";

const Home = () => {
  return (
    <>
      <div className="hero md:flex">
        {/* Left Section */}
        <div className="heroLeft md:w-1/2 p-6 gap-6 flex flex-col">
          {/* Top Part */}
          <div className="heroLeftTop mb-6 font-customTextFont">
            <h1 className="">
              Your <span className="highlight">Gateway </span> to{" "}
              <span className="highlight">Unrestricted </span> Mobile Freedom
            </h1>
          </div>

          {/* Middle Part */}
          <div className="flex gap-4 mb-6">
            <button className=" ststusButton p-3 flex gap-2 items-center">
              check order status <img src="/assets/arrowIcon.png" />
            </button>
            <div className="clientsButton font-customTextFont flex items-center gap-2 pr-4 pl-2">
              <text className="font-customTextFont">10k+ clients</text>
              <div className="Avatars flex gap-0 items-center">
                <Avatar
                  className="w-[35px] h-[35px] -mr-3"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <Avatar
                  className="w-[35px] h-[35px] -mr-3  "
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <Avatar
                  className="w-[35px] h-[35px] -mr-3"
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                />
                {/* <Avatar className="w-[35px] h-[35px]" name="Joe" /> */}
              </div>
            </div>
          </div>

          {/* Bottom Part */}

          <div className="flex gap-4">
            <Card
              imageSrc="/assets/cardImage1.png" // Replace with your background image path
              title="use your unlocked phone with any network"
            />
            <Card
              imageSrc="/assets/cardImage2.png" // Replace with your background image path
              title="use your unlocked phone with any network"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-10">
          <Form />
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Services />
        <Policy />
        <RecentProjects />
        <PricingPlan />
        {/* <Testimonials /> */}
        <Subscribe />
        {/* <Test /> */}
      </div>
    </>
  );
  // <div className="hero">abc</div>;
};

export default Home;
