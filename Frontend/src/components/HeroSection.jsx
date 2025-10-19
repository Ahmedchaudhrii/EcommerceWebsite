import React, { useState, useEffect } from "react";

const images = [
  "Masafir/public/pictures/Banners/1.jpg",
  "Masafir/public/pictures/Banners/2.jpg",
  "Masafir/public/pictures/Banners/3.jpg",
  "Masafir/public/pictures/Banners/4.jpg",
  "Masafir/public/pictures/Banners/5.jpg",
  "Masafir/public/pictures/Banners/IMG_4146.JPG",
  "Masafir/public/pictures/Banners/IMG_4118.JPG",


];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Welcome to <span className="text-blue-400">Masafir Store</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 md:text-xl">
          Premium products delivered to your doorstep. Shop now and enjoy
          exclusive offers!
        </p>
        <div className="flex mt-6 space-x-4">
          <a
            href="/products"
            className="px-6 py-3 font-medium text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="px-6 py-3 font-medium text-blue-600 transition bg-white rounded-lg shadow-md hover:bg-gray-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-6 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
