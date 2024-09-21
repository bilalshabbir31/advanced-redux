import express from "express";
import dotenv from "dotenv";
import notFound from "./middlewares/errorHandler.js";
import calculateRequestProcessTime from "./middlewares/reqHandler.js";
import productRouter from "./router/productRouter.js";
import connectDB from "./config/db.js";
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
connectDB();
app.use(cors());
app.use(calculateRequestProcessTime);
app.use(express.json());
app.use('/api/products', productRouter);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});
