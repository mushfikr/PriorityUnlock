/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBtnColor: "#da3940", // Custom color for buttons
        customBtnColor2: "#DA3940",
        customBgColor: "#fbfbfb", // Custom background color
        customBgColor2: "#F6F6F6",
        customBorderColor: "#e3e3e3",
        customInputColor: "#555770",
        customTextColor4: "#868585",

        customTextColor1: "#202020", // Custom text color
        customTextColor2: "#434343",
        customTextColor3: "#6C6C6C",
        customNumColor: "#2D2E30",
      },
      fontFamily: {
        customTextFont: ["Poppins", "sans-serif"], // Custom font for body text
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  plugins: [],
};

// ```js
// // tailwind.config.js
// module.exports = {
// theme: {
// screens: {
// "sm": '640px',
// // => @media (min-width: 648px) { ... }
// 'md': '768px',
// // => @media (min-width: 768px) { ... }
// "lg": '1024px',
// // => @media (min-width: 1024px) { ... }
// 'xl': '1280px',
// // -> @media (min-width: 1280px) {...}
// }
// }
// }
// ```
