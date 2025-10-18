import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";

app.use("/api/products", productRoutes);


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json([

    { id: 1, name: "T-shirt", price: 20 },
    { id: 2, name: "Shoes", price: 50 },
    { id: 3, name: "Watch", price: 100 }

    ])

});
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
