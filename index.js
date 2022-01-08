const express = require("express");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "You have reached funkeraana api"});
})

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
})