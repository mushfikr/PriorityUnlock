import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className=" bg-customBgColor border-[1px] text-[0.8rem] border-customTextColor2 text-customTextColor2  px-3 py-2 rounded-3xl">
      {text}
    </button>
  );
};

export default CustomButton;
