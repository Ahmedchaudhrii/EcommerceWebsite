import dotenv from "dotenv";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config(); // Load environment variables

await  connectDB();     // Connect to MongoDB

const products = [
  {
    name: "Classic White Shirt",
    price: 2499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    description: "Comfortable classic white shirt.",
    stock: 12
  },
  {
    name: "Casual Blue Shirt",
    price: 3199,
    image: "https://images.unsplash.com/photo-1520975918318-6c88f4652f06?w=800&q=80",
    description: "Stylish blue shirt.",
    stock: 8
  },
  {
    name: "Formal Black Shirt",
    price: 2899,
    image: "https://images.unsplash.com/photo-1584091373506-bfbe50d2e6c2?w=800&q=80",
    description: "Sleek black shirt for events.",
    stock: 10
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
    await Product.deleteMany();
    console.log("🧹 Old products removed");

    await Product.insertMany(products);
    console.log("🌱 Dummy products added!");

    process.exit(); // Exit script successfully
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1); // Exit with error
  }
};

seedProducts();
