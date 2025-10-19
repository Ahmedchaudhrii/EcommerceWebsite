import React from "react";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: "Rs. 2,499",
      image: "/images/shirt1.jpg", // place your image inside public/images
    },
    {
      id: 2,
      name: "Casual Denim Shirt",
      price: "Rs. 3,199",
      image: "/images/shirt2.jpg",
    },
    {
      id: 3,
      name: "Formal Blue Shirt",
      price: "Rs. 2,899",
      image: "/images/shirt3.jpg",
    },
    {
      id: 4,
      name: "Slim Fit Black Shirt",
      price: "Rs. 3,499",
      image: "/images/shirt4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">
          Shop Our Collection
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-64"
              />

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.price}</p>

                {/* Buttons */}
                <div className="flex justify-center mt-4 space-x-3">
                  <button className="px-4 py-2 text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 text-gray-700 transition bg-gray-200 rounded-lg shadow-md hover:bg-gray-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
