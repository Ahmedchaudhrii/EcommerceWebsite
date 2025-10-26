import React from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

function ProductWrapper({ product }) {
  const { addToCart } = useCart();

  // Fallback image if none is provided
  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : product.image || "https://via.placeholder.com/150";

  // Format price (assumes price is a number)
  const formattedPrice =
    typeof product.price === "number"
      ? `$${product.price.toFixed(2)}`
      : product.price;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <ProductCard
        name={product.name}
        price={formattedPrice}
        image={imageUrl}
      />
      <button
        onClick={() => addToCart(product)}
        className="w-full px-4 py-2 mt-4 text-white transition bg-black rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductWrapper;
