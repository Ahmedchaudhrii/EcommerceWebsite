import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function ProductHighlights() {
  const [products, setProducts] = useState([]);

  // Fallback static products
  const staticProducts = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 25,
      image: "/pictures/Catalogue/3/IMG_4675.JPG",
    },
    {
      id: 2,
      name: "Casual Blue Shirt",
      price: 30,
      image: "/pictures/Catalogue/3/IMG_4675.JPG",
    },
    {
      id: 3,
      name: "Formal Black Shirt",
      price: 35,
      image: "/pictures/Catalogue/3/IMG_4675.JPG",
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err.message);
        setProducts(staticProducts); // fallback to static if API fails
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-900">
          Best Sellers
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product._id || product.id}
              name={product.name}
              price={`$${product.price}`}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlights;
