import express from "express";
import dotenv from "dotenv";
import notFound from "./middlewares/errorHandler.js";
import calculateRequestProcessTime from "./middlewares/reqHandler.js";
import productRouter from "./router/productRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(calculateRequestProcessTime);
app.use(express.json());
app.use(notFound);
app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});
