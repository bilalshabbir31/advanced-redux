import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    items: {
      type: Array,
      required: true
    },
    totalQuantity: {
      type: Number,
      required: true
    }
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
