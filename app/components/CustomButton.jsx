import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="bg-customBgColor border-[1px] border-customTextColor2 text-customTextColor2  p-3 rounded-3xl">
      {text}
    </button>
  );
};

export default CustomButton;
