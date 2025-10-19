import React from "react";
import { Truck, ShieldCheck, ShoppingBag, Headphones } from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-12 h-12 text-blue-500" />,
      title: "Fast Delivery",
      description: "Get your products delivered quickly and safely at your doorstep.",
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-blue-500" />,
      title: "Premium Quality",
      description: "Only the best products with guaranteed satisfaction.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
      title: "Secure Payments",
      description: "Your payments are encrypted and completely safe.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-500" />,
      title: "24/7 Support",
      description: "Our team is available round the clock to assist you.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl px-6 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Why Choose <span className="text-blue-500">Masafir Store</span>?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          We provide top-notch services to make your shopping experience smooth and reliable.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-xl"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
