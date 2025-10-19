// src/pages/Products.jsx
import React,{useEffect,useState} from "react";
import ProductCard from "../components/ProductCard";
// import { data } from "autoprefixer";

function Products() {
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)


  app.get ("",(req,res)=>{
    res.json([
    { id: 1, name: "Classic White Shirt", price: "$25", image: "Masafir/public/pictures/Catalogue/3/IMG_4675.JPG" },
    { id: 2, name: "Casual Blue Shirt", price: "$30", image: "Masafir/public/pictures/Catalogue/2/IMG_4606.JPG" },
    { id: 3, name: "Formal Black Shirt", price: "$35", image: "/Masafir/public/pictures/Catalogue/1/IMG_4592.JPG" },
    ])
  })

 useEffect( () => {
  fetch("http://localhost:5000/api/products")
  .then( (res)=>{
    if (!res.ok) {
      throw new Error("Failed to fetch products");
      
    } return  res.json();
  })
  
  .then( (data) =>{
    setProduct(data)
    setLoading(false)
  })
  .catch ( (err) => {
    console.error(err);
    setError(err.message);
    setLoading(false);
  })
  
 },[])
  
  if (loading) {
    return <p className="text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }



  return (
    <section className="px-6 py-12 md:px-12 bg-gray-50">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Our Products
      </h2>
      
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard 
            key={product._id || product.id} 
            name={product.name} 
            price={product.price} 
            image={product.image} 
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
