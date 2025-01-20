require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const Product = require("./models/productModel");
app.use(express.json());


app.get("/", (req, res) =>{
    res.send("Welcome to my mongoAPI")
});

app.post("/blog", (req,res) =>{
    res.send("This is a post req")
});

app.put("/api/product/:id", async (req,res) =>{

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(400).json({message: "product does not exist"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(product);
    }
   
})

app.get("/api/product/:id", async (req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
    }
});

app.get("/api/products", async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.post("/api/product", async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }
});




mongoose.
connect(process.env.MONGO_URI)
.then(() =>{
    console.log("Connected to mongo");
    app.listen(PORT, () => {
        console.log("Yo, my name is André 3000")
    });
    
});