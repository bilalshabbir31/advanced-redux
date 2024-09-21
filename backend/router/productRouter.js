import express from "express";
import {
  addProduct,
  getAllProducts,
  getProduct,
  removeProduct,
} from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.put("/add-product", addProduct);
productRouter.delete("/:id", removeProduct);
productRouter.get("/:product_id", getProduct);
export default productRouter;
