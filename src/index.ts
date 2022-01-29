import express from "express";
import cors from "cors";
import upload from "./utils/multerUpload";
import 'dotenv/config';

import userRouter from "./routes/user.route";
import productRouter from "./routes/product.route";
import { getUserBy } from "./utils/db_utils";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/product', productRouter);

//Serves static files from uploads folder on host/uploads/filename.ext
app.use('/uploads', express.static(path.join(__dirname, '../uploads'))); //both work the same app.use(express.static('uploads'));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});