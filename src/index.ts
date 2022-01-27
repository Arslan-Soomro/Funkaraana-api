import express from "express";
import cors from "cors";

import userRouter from "./routes/user.route";
import productRouter from "./routes/product.route";
import { getUserBy } from "./utils/db_utils";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/product', productRouter);

app.get('/', (req, res) => {
    res.json({message: "You have reached funkeraana api"});
});

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});