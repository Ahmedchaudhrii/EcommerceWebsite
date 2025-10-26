import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/upload.js";

// ✅ Load environment variables
dotenv.config();

// ✅ Create Express app
const app = express();

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// ✅ Routes
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.json([
    { id: 1, name: "T-shirt", price: 20 },
    { id: 2, name: "Shoes", price: 50 },
    { id: 3, name: "Watch", price: 100 },
  ]);
});

// ✅ Connect to MongoDB and start server
(async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
  }
})();
