const express = require("express");
const cors = require("cors");

const db = require('./utils/database');

const userRouter = require("./routes/user.route");

const app = express();
const PORT = process.env.PORT || 5000;

//TODO Convert To Typescript

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.json({message: "You have reached funkeraana api"});
});

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});