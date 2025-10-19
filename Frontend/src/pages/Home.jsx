import React from "react";
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection";
import ProductHighlights from "../components/ProductHighlights";
import BundleSection from "../components/BundleSection";
import Testimonials from "../components/Testimonials"



function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection/>
      
      <FeaturesSection />
      <ProductHighlights />
      <BundleSection />
      <Testimonials/>
      <section className="py-12 bg-white">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Welcome to Masafir
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            Discover premium products with seamless shopping experience.
          </p>
          <a
            href="/products"
            className="inline-block px-6 py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Replace with <ProductCard /> components later */}
            <div className="p-4 text-center bg-white rounded shadow">
              <p className="text-gray-500">Product 1</p>
            </div>
            <div className="p-4 text-center bg-white rounded shadow">
              <p className="text-gray-500">Product 2</p>
            </div>
            <div className="p-4 text-center bg-white rounded shadow">
              <p className="text-gray-500">Product 3</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
