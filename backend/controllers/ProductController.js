import Product from "../models/product.js"

const getAllProducts = async (req, res) => {
  const products = await Product.findOne();
  res.json(products);
}
const addProduct = async (req, res) => {
  try {
    const { items, totalQuantity } = req.body;

    const product = await Product.findOne();
    console.log(product);
    
    if (product === null) {
      await Product.create({ items: items, totalQuantity: totalQuantity }).then(
        (product) => {
          console.log(product);
          console.log("New product is created!");
        }
      );
      return res.status(404).json({ message: "No product found to update" });
    }
    
    const product_id = product._id;
    const updatedProduct = await Product.findByIdAndUpdate(
      product_id,
      { items, totalQuantity }, // Update fields
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {      
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct); // Return the updated product
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const removeProduct = (req, res) => {}
const getProduct = (req, res) => {}

export { getAllProducts, addProduct, removeProduct, getProduct };