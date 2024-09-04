import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
// import { MailIcon } from "./MailIcon";

const Form = () => {
  return (
    <div className="md:flex-1  max-w-md mx-auto bg-customBgColor p-6 shadow-md rounded-md ">
      <h2 className="text-2xl font-semibold text-center text-customTextColor1 mb-6">
        Start Unlocking Here
      </h2>

      <form>
        <div className="mb-4">
          <label
            htmlFor="imei"
            className="block text-gray-700 font-medium mb-2"
          >
            IMEI
          </label>
          <input
            type="text"
            id="imei"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter IMEI"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="carrier"
            className="block text-gray-700 font-medium mb-2"
          >
            Carrier
          </label>

          <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Apple</option>
            <option>Samsung</option>
            <option>Huawei</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block text-gray-700 font-medium mb-2"
          >
            Brand
          </label>

          <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Grameenphone</option>
            <option>Robi</option>
            <option>Banglalink</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Phone Number"
          />
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
