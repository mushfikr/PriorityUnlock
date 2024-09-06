import RegularIcon from "@/public/assets/icons/RegularIcon";

const PricingPlan = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-6xl font-bold mb-8 mt-10">
        Best Pricing <span className="text-red-500">Plan</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Regular Plan */}
        <div className="bg-white p-6 border-[1px] border-[#E6E6E6] rounded-3xl text-start">
          <div className="flex flex-row justify-around max-w-[50%] mx-auto">
            <RegularIcon className="p-10 border-[1px] boreder-ash" />
            <h3 className="text-xl font-semibold mb-4">Reguler</h3>
          </div>
          <p className="text-2xl font-bold mb-6">
            $49 <span className="text-sm font-medium">/ Monthly</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li>✓ Basic Branding Package</li>
            <li>✓ Social Media Management</li>
            <li>✓ Performance Reports</li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded min-w-[250px] mx-auto">
            Choose Package
          </button>
        </div>

        {/* Gold Plan */}
        <div className="bg-white p-6 border-[1px] border-[#E6E6E6] rounded-3xl text-start">
          <div className="flex flex-row justify-around max-w-[50%] mx-auto">
            <RegularIcon className="p-10 border-[1px] boreder-ash" />
            <h3 className="text-xl font-semibold mb-4">Gold</h3>
          </div>
          <p className="text-2xl font-bold mb-6">
            $69 <span className="text-sm font-medium">/ Monthly</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li>✓ Comprehensive Branding</li>
            <li>✓ Enhanced Social Media Management</li>
            <li>✓ SEO & Website Optimization</li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded min-w-[250px] mx-auto">
            Choose Package
          </button>
        </div>

        {/* Platinum Plan */}
        <div className="bg-white p-6 border-[1px] border-[#E6E6E6] rounded-3xl text-start">
          <div className="flex flex-row justify-around max-w-[50%] mx-auto">
            <RegularIcon className="p-10 border-[1px] boreder-ash" />
            <h3 className="text-xl font-semibold mb-4">platinum</h3>
          </div>
          <p className="text-2xl font-bold mb-6">
            $79 <span className="text-sm font-medium">/ Monthly</span>
          </p>
          <ul className="space-y-4 mb-6 ">
            <li>✓ Full Branding Suite</li>
            <li>✓ Advanced Digital Marketing</li>
            <li>✓ Custom Analytics & Reporting</li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded min-w-[250px] mx-auto">
            Choose Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
