import React from "react";

function ProductHighlights() {
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: "$25",
      image: "Masafir/public/pictures/Catalogue/3/IMG_4675.JPG/",
    },
    {
      id: 2,
      name: "Casual Blue Shirt",
      price: "$30",
      image: "Masafir/public/pictures/Catalogue/1/IMG_4592.JPG",
    },
    {
      id: 3,
      name: "Formal Black Shirt",
      price: "$35",
      image: "Masafir/public/pictures/Catalogue/2/IMG_4606.JPG",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 mx-auto text-center max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">
          Best Sellers
        </h2>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-3">
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
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-2 text-xl font-bold text-blue-600">
                  {product.price}
                </p>

                {/* Buttons */}
                <div className="flex justify-center mt-4 space-x-3">
                  <button className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 text-gray-800 transition bg-gray-200 rounded-lg hover:bg-gray-300">
                    View Details
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

export default ProductHighlights;
