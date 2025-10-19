import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Khan",
      role: "Customer",
      image: "https://i.pravatar.cc/150?img=47",
      feedback:
        "I love the quality of these shirts! The fabric feels premium and very comfortable to wear.",
    },
    {
      name: "Ali Raza",
      role: "Customer",
      image: "https://i.pravatar.cc/150?img=12",
      feedback:
        "Amazing service and fast delivery. I will definitely shop again from here!",
    },
    {
      name: "Emily Smith",
      role: "Customer",
      image: "https://i.pravatar.cc/150?img=32",
      feedback:
        "Stylish designs and perfect fitting. Got so many compliments wearing these!",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white shadow-lg rounded-xl"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-3 text-gray-600">“{testimonial.feedback}”</p>
              <div className="flex justify-center mt-3 text-yellow-400">
                {"★".repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
