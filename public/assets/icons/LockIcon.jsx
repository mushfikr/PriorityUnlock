import React from "react";

const LockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      //   className="w-6 h-6 text-blue-500" // Tailwind class for width, height, and color
    >
      <path
        d="M8.33301 25.5C8.33301 19.0567 13.5564 13.8334 19.9997 13.8334C26.443 13.8334 31.6663 19.0567 31.6663 25.5C31.6663 31.9434 26.443 37.1667 19.9997 37.1667C13.5564 37.1667 8.33301 31.9434 8.33301 25.5Z"
        stroke="#DA3940"
        stroke-width="2.5"
      />
      <path
        d="M12.5 16.3334V11.3334C12.5 7.19124 15.8579 3.83337 20 3.83337C22.6003 3.83337 24.8917 5.15672 26.237 7.16671"
        stroke="#DA3940"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M20 25.5H20.015"
        stroke="#DA3940"
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LockIcon;
