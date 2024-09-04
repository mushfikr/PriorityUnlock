// components/Card.jsx

import Image from "next/image";

const Card = ({ imageSrc, title, bottomImageSrc }) => {
  return (
    <div
      className="relative flex flex-col  justify-between max-w-64 min-h-64 rounded-[50px]  px-4 py-6 pl-15"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <!-- Overlay --> */}
      <div class="absolute inset-0 bg-gradient-to-br from-black via-transparent to-customBtnColor2 opacity-75 rounded-[50px] "></div>

      {/* Content */}
      <h2 className="text-xl font-poppins text-white w-3/4">{title}</h2>
      {/* Image Icon at Bottom */}
      <div className="flex justify-start">
        <Image src="/assets/arrowIcon.png" alt="Icon" width={40} height={40} />
      </div>
    </div>
  );
};

export default Card;
