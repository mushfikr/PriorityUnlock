const PricingPlan = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-4xl font-bold mb-8">
        Best Pricing <span className="text-red-500">Plan</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Regular Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Reguler</h3>
          <p className="text-2xl font-bold mb-6">
            $49 <span className="text-sm font-medium">/ Monthly</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li>✓ Basic Branding Package</li>
            <li>✓ Social Media Management</li>
            <li>✓ Performance Reports</li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Choose Package
          </button>
        </div>

        {/* Gold Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Gold</h3>
          <p className="text-2xl font-bold mb-6">
            $69 <span className="text-sm font-medium">/ Monthly</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li>✓ Comprehensive Branding</li>
            <li>✓ Enhanced Social Media Management</li>
            <li>✓ SEO & Website Optimization</li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Choose Package
          </button>
        </div>

        {/* Platinum Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Platinum</h3>
          <p className="text-2xl font-bold mb-6">
            $79 <span className="text-sm font-medium">/ Monthly</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li>✓ Full Branding Suite</li>
            <li>✓ Advanced Digital Marketing</li>
            <li>✓ Custom Analytics & Reporting</li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Choose Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
