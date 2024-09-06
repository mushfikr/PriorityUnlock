"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import "../syles/header.css";

const Header = () => {
  const router = useRouter(); // Get router object
  const { pathname } = router; // Get current path

  return (
    <header className="my-4 flex items-center justify-between px-3 py-2 md:px-2 bg-customBgColor border-[1px] border-solid border-customBorderColor  rounded-[50px]">
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/logoTwo.png"
          alt="Priority Unlock Logo"
          className="p-0"
          width={50}
          height={50}
        />
        <h1 className="text-2xl font-bold  text-red-500 font-customTextFont">
          Priority <span className="text-black">Unlock</span>
        </h1>
      </div>
      <nav className="hidden md:flex space-x-8 text-[0.87rem] ">
        <Link
          href="/"
          className="text-customTextColor4 font-bold font-customTextFont  text-[0.87rem]"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-customTextColor4 font-bold font-customTextFont "
        >
          Services
        </Link>
        <Link
          href="/faqs"
          className="text-customTextColor4 font-bold font-customTextFont "
        >
          FAQs
        </Link>
        <Link
          href="/testimonials"
          className="text-customTextColor4 font-bold font-customTextFont  "
        >
          Testimonials
        </Link>
        <Link
          href="/contact"
          className="text-customTextColor4 font-bold  font-customTextFont"
        >
          Contact Us
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <button className=" md:block py-4 bg-red-500 text-white px-4 py-2 rounded-full">
          Check Order Status
        </button>
        <div
          className="w-[50px] h-[50px] overflow-hidden rounded-full"
          style={{
            backgroundImage: `url("/assets/pfp.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <Image
            src="/assets/pfp.png"
            alt="Profile Picture"
            className="object-cover w-full h-full"
            width={40}
            height={40}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
