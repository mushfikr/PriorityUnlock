import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import ImeiIcon from "@/public/assets/icons/ImeiIcon";
import AppleIcon from "@/public/assets/icons/AppleIcon";
import MessageIcon from "@/public/assets/icons/MessageIcon";
import CarrierIcon from "@/public/assets/icons/CarrierIcon";
import PhoneIcon from "@/public/assets/PhoneIcon";
// import { MailIcon } from "./MailIcon";

const Form = () => {
  return (
    <div className="md:flex-1  md:min-w-[30rem] md:max-h-[40rem] mx-auto bg-customBgColor p-6 shadow-md rounded-3xl ">
      <h2 className="text-2xl font-bold  text-customTextColor1 font-customTextFont mb-6 ">
        Start Unlocking Here
      </h2>

      <form>
        <div className="mb-4 relative">
          <label
            htmlFor="imei"
            className="block text-gray-700 font-medium mb-2"
          >
            IMEI
          </label>
          <input
            type="text"
            id="imei"
            className=" w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-customInputColor placeholder-customInputColor"
            placeholder={`447400580415431`}
          />
          <div className="absolute -mt-[30px] pl-3  ">
            <ImeiIcon />
          </div>
          <div className=" text-customInputColor text-[10px] py-[5px] text-customTextFont">
            Input your device's 15-digit IMEI number, available by dialing
            *#06#.
          </div>
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="brand"
            className="block text-gray-700 font-medium mb-2"
          >
            Brand
          </label>

          <select className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-customInputColor placeholder-customInputColor text-customInputColor">
            <option>Grameenphone</option>
            <option>Robi</option>
            <option>Banglalink</option>
          </select>
          <div className="absolute -mt-[30px] pl-3  ">
            <CarrierIcon />
          </div>
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="carrier"
            className="block text-gray-700 font-medium mb-2"
          >
            Carrier
          </label>

          <select className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 text-customInputColor focus:ring-customInputColor placeholder-customInputColor">
            <option>Apple</option>
            <option>Samsung</option>
            <option>Huawei</option>
          </select>
          <div className="absolute -mt-[30px] pl-3  ">
            <AppleIcon />
          </div>
        </div>

        <div className="mb-4 relative">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-customInputColor placeholder-customInputColor text-customInputColor"
            placeholder="example@example.com"
          />
          <div className="absolute -mt-[30px] pl-3  ">
            <MessageIcon />
          </div>
        </div>

        <div className="mb-4 relative">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-customInputColor placeholder-customInputColor text-customInputColor"
            placeholder="017123456789"
          />
          <div className="absolute -mt-[30px] pl-3  ">
            <PhoneIcon />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-customBtnColor text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Unlock Phone
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
