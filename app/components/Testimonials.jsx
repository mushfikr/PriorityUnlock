import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="py-16 bg-white flex flex-col items-center">
      <h3 className="text-sm text-red-500 font-semibold mb-2">Testimonials</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="text-red-500">500+</span> Happy Clients Said To Us They
        Are Satisfied
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/path/to/your/image.jpg" // Replace with the actual image path
            alt="Happy Clients"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Testimonials section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-4">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="italic mb-4">
                “Priority Unlock made the entire process so easy and
                stress-free. My phone was unlocked in no time, and their
                customer service was fantastic!”
              </p>
              <div className="flex items-center">
                <Image
                  src=""
                  alt="img"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Jang Wonyoung</h4>
                  <p className="text-gray-500">Korea</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="italic mb-4">
                “Priority Unlock made the entire process so easy and
                stress-free. My phone was unlocked in no time, and their
                customer service was fantastic!”
              </p>
              <div className="flex items-center">
                <Image
                  src=""
                  alt="img"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Jennie Kim</h4>
                  <p className="text-gray-500">USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicator */}
      <div className="flex mt-8 space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default Testimonials;
