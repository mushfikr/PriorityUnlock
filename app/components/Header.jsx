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
    <header className="my-4 flex items-center justify-between px-3 py-2 md:px-10 bg-customBgColor border-[1px] border-solid border-customBorderColor  rounded-[50px]">
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/logoTwo.png"
          alt="Priority Unlock Logo"
          className="p-0"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold text-red-500">
          Priority <span className="text-black">Unlock</span>
        </h1>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link
          href="/"
          className="text-customTextColor1 font-customTextFont hover:customTextColor2"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-customTextColor1 font-customTextFont hover:customTextColor2"
        >
          Services
        </Link>
        <Link
          href="/faqs"
          className="text-customTextColor1 font-customTextFont hover:customTextColor2"
        >
          FAQs
        </Link>
        <Link
          href="/testimonials"
          className="text-customTextColor1 font-customTextFont hover:customTextColor2"
        >
          Testimonials
        </Link>
        <Link
          href="/contact"
          className="text-customTextColor1 hover:text-red-500"
        >
          Contact Us
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <button className=" md:block py-4 bg-red-500 text-white px-4 py-2 rounded-full">
          Check Order Status
        </button>
        <div className="w-[50px] h-[50px] overflow-hidden rounded-full ">
          <Image
            src="/assets/profile-pic.png"
            alt="Profile Picture"
            className="object-cover w-full h-full"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
