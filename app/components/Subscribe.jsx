import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-lg shadow-lg">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-sm text-red-500 font-semibold mb-2">
          Subscribe Now
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a <span className="text-red-500">problem</span>? We are here to
          help you
        </h2>
        <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-lg border border-gray-300 w-full md:w-auto"
          />
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
            Submit
          </button>
        </form>
        <p className="text-gray-500 mt-4">
          Already a member?{" "}
          <a href="#" className="text-red-500">
            Sign In
          </a>
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/assets/sub.png"
          alt="Helping hands"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Subscribe;
