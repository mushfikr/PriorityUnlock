import Image from "next/image";
import React from "react";

const Policy = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          We Care About Your{" "}
          <span className="text-red-500">Data, Privacy, and Security</span>
        </h2>
        <p className="text-gray-600 mt-2">
          At Priority Unlock, we prioritize your trust by ensuring the highest
          standards of data protection, privacy, and security. Here’s how we
          safeguard your information:
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8">
        {/* Left Section (Image) */}
        <div className="flex-1">
          <img
            src="/assets/policy.png"
            alt="Data Security"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Section (Text and Icons) */}
        <div className="flex-1 flex flex-col gap-6">
          {/* First Service */}
          <div className="flex items-start gap-4">
            <div className="bg-customBtnColor2 text-white p-4 rounded-full">
              {/* <i className="fa fa-lock"></i> */}
              <Image
                src="/assets/encrypt.png"
                alt="Check"
                className="  "
                width={50}
                height={40}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Advanced Data Encryption</h3>
              <p className="text-gray-600">
                We employ cutting-edge encryption technologies to protect your
                data. All personal information you provide is securely encrypted
                and stored, keeping it safe from unauthorized access.
              </p>
            </div>
          </div>

          {/* Second Service */}
          <div className="flex items-start gap-4">
            <div className="bg-customBtnColor2 text-white p-4 rounded-full">
              {/* <i className="fa fa-lock"></i> */}
              <Image
                src="/assets/encrypt.png"
                alt="Check"
                className="  "
                width={50}
                height={40}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Strict Privacy Policies</h3>
              <p className="text-gray-600">
                Your privacy is our top priority. We adhere to stringent privacy
                laws and regulations, ensuring that your personal information is
                never shared or sold to third parties. Our transparent privacy
                practices guarantee your peace of mind.
              </p>
            </div>
          </div>

          {/* Third Service */}
          <div className="flex items-start gap-4">
            <div className="bg-customBtnColor2 text-white p-4 rounded-full">
              {/* <i className="fa fa-lock"></i> */}
              <Image
                src="/assets/encrypt.png"
                alt="Check"
                className="  "
                width={50}
                height={40}
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Secure Transactions</h3>
              <p className="text-gray-600">
                Our payment processing system uses the latest security protocols
                to protect your financial information. With Priority Unlock, you
                can complete transactions confidently, knowing your payment
                details are secure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-around mt-8 w-full">
        <div className="text-center">
          <h3 className="text-3xl font-bold">20</h3>
          <p className="text-gray-600">Year Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">296</h3>
          <p className="text-gray-600">Business</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">36</h3>
          <p className="text-gray-600">Expert</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">106K+</h3>
          <p className="text-gray-600">Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
