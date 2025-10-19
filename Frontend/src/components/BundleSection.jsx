import React from "react";

function BundleSection() {
  return (
    <section className="py-20 bg-white">
      <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
        
        {/* Left: Bundle Image */}
        <div className="flex justify-center">
          <img
            src="/assets/bundle.jpg"
            alt="Shirt Bundle"
            className="object-cover w-full rounded-lg shadow-lg md:w-4/5"
          />
        </div>

        {/* Right: Offer Details */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Get the Complete Shirt Bundle 👕
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            3 Premium Shirts (White, Blue & Black) packed together for one 
            unbeatable price. Look stylish for every occasion!
          </p>

          {/* Pricing */}
          <div className="mt-6">
            <p className="text-xl text-gray-500 line-through">$90</p>
            <p className="text-3xl font-bold text-blue-600">$70 Only</p>
            <p className="mt-1 font-medium text-green-600">Save $20 Today!</p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="px-8 py-3 font-medium text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              Buy Bundle Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BundleSection;
