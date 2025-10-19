// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div className="overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg">
      <img src={image} alt={name} className="object-cover w-full h-56" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600">{price}</p>
        <button className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
