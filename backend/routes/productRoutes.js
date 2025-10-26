import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// GET /api/products → fetch all products
router.get("/", getAllProducts);

// POST /api/products → add a new product
router.post("/", createProduct);

// GET /api/products/:id → fetch single product
router.get("/:id", getProductById);

// PUT /api/products/:id → update product
router.put("/:id", updateProduct);

// DELETE /api/products/:id → delete product
router.delete("/:id", deleteProduct);

export default router;
