import express from "express";
import { addProduct, getAllProducts, removeProduct } from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.post('/add-product', addProduct);
productRouter.delete('/:id', removeProduct);

export default productRouter;