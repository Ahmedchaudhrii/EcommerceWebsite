import { useEffect, useState } from "react";
import axios from "axios";
import ProductWrapper from "../components/ProductWrapper";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err.message);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="py-10 text-center text-gray-600">Loading products...</p>;
  }

  if (error) {
    return <p className="py-10 text-center text-red-500">Error: {error}</p>;
  }

return (
  <section className="px-6 py-12 md:px-12 bg-gray-50">
    <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
      All Products
    </h2>

    <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductWrapper key={product._id || product.id} product={product} />
      ))}
    </div>
  </section>
);

}

export default Products;
