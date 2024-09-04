import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    // // <div className="rounded-3xl relative w-full h-64 bg-blue-500 rounded-lg overflow-hidden">
    // <div className="rounded-3xl relative w-100vw h-64 bg-blue-500 clip-path-custom">
    //   <div className="relative w-100vw h-32 bg-blue-500  custom-shape">
    //     Services
    //   </div>
    // </div>
    <div className=" flex flex-col md:flex-row items-center bg-customBgColor2 rounded-[80px] px-16 py-6 ">
      {" "}
      {/* flex flex-col md:flex-row items-center*/}
      {/* Left Section */}
      <div className="flex-1 flex flex-col md:w-1/2 mb-3">
        <h2 className="text-4xl text-customTextFont font-bold text-customTextColor1 ">
          Services We <span className="text-red-500">Provide</span>
        </h2>
        <p className="flex-1  w-[78%] mt-4 text-customTextColor3 font-customTextFont">
          At Priority Unlock, we provide a range of services designed to give
          you the freedom and flexibility you need with your mobile device. Our
          professional and efficient unlocking services cater to various needs,
          ensuring a seamless and hassle-free experience.
        </p>
        <div className="relative mt-6 flex-1">
          <Image
            src="/assets/service.png"
            alt="IMEI Cleaning"
            className="rounded-[20px]"
            width={500}
            height={300}
          />
          {/* <div className="absolute w-[80px] h-[80px] rounded-[50%] bg-white"> */}
          <div className="absolute ml-[85%] -mt-[30%] flex items-center  justify-center p-4 bg-customBtnColor border-customBgColor border-[10px] w-[80px] h-[80px] rounded-[50%]">
            <Image
              src="/assets/pauseIcon.png"
              alt="IMEI Cleaning"
              className="  "
              width={40}
              height={40}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        {/* flex-1 md:w-1/2 flex flex-col gap-4 */}
        {/* First Service */}
        <div className="flex flex-col gap-2 md:w-100 md:h-[35vh] md:-mt-12 py-10 bg-customBtnColor text-white p-4 rounded-[45px]">
          <div className="  flex items-center  justify-center p-4 bg-white w-[60px] h-[60px] rounded-[50%]">
            <Image
              src="/assets/checkmark.png"
              alt="Check"
              className="  "
              width={40}
              height={40}
            />
          </div>
          <h3 className="ml-4 font-bold">Phone Unlocking</h3>

          <p className="mt-2">
            Seamless compatibility across devices. Enjoy global carrier freedom.
            Unlock quickly and effortlessly.
          </p>
        </div>

        {/* Other Services */}
        <div className=" flex flex-col   gap-2 md:w-100 md:h-[35vh]  bg-customBgColor2 p-4 rounded-[20px] ">
          <div className="  flex items-center  justify-center p-4 bg-white w-[60px] h-[60px] rounded-[50%]">
            <Image
              src="/assets/checkmark.png"
              alt="Check"
              className="  "
              width={40}
              height={40}
            />
          </div>

          <h3 className=" font-bold ">
            Carrier Compatibility <br />
            Check
          </h3>

          <p className=" text-gray-600">
            Verify before unlocking. Prevent compatibility issues. Ensure your
            device works with the new carrier.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:w-100 md:h-[35vh] md:-mt-10  bg-customBgColor2 p-4 rounded-[20px] ">
          <div className="  flex items-center  justify-center p-4 bg-white w-[60px] h-[60px] rounded-[50%]">
            <Image
              src="/assets/checkmark.png"
              alt="Check"
              className="  "
              width={40}
              height={40}
            />
          </div>
          <div className="flex items-center">
            <i className="fa fa-id-badge text-red-500"></i>
            <h3 className=" font-bold">IMEI Cleaning</h3>
          </div>
          <p className=" text-gray-600">
            Clear carrier restrictions. Restore phone usability on all networks.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:w-100 md:h-[35vh] md:-mt-10  bg-customBgColor2 p-4 rounded-[20px] ">
          <div className="  flex items-center  justify-center p-4 bg-white w-[60px] h-[60px] rounded-[50%]">
            <Image
              src="/assets/checkmark.png"
              alt="Check"
              className="  "
              width={40}
              height={40}
            />
          </div>
          <h3 className=" font-bold">Remote Unlocking</h3>

          <p className=" text-gray-600">
            Unlock from home with ease. Simple, step-by-step instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
