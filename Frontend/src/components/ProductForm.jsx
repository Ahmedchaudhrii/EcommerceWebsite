import { useState, useEffect } from "react";
import axios from "axios";
import ImageUploader from "../components/ImageUploader";

function ProductForm({ onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  // Preload product info
  useEffect(() => {
    setFormData({
      name: "Musāfir Noir",
      price: 4499,
      image: "https://res.cloudinary.com/dogdyxazy/image/upload/v1761299070/IMG_4339_iu1x52.jpg",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (url) => {
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/products", formData);
      onProductAdded(data); // Update UI instantly
      setFormData({ name: "", price: "", image: "" });
    } catch (err) {
      console.error("Error adding product:", err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 mx-auto space-y-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold">Add New Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <ImageUploader onUpload={handleImageUpload} />

      {formData.image && (
        <img
          src={formData.image}
          alt="Uploaded Preview"
          className="object-cover w-48 h-48 border rounded"
        />
      )}

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
