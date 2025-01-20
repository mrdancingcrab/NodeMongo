const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;


app.get("/", (req, res) =>{
    res.send("Welcome to my mongoAPI")
});

app.post("/blog", (req,res) =>{
    res.send("This is a post req")
});








mongoose.
connect("mongodb+srv://mrdancingcrab:123456admin@tobiasapi.0oqsv.mongodb.net/Products-API?retryWrites=true&w=majority&appName=TobiasAPI")
.then(() =>{
    console.log("Connected to mongo");
    app.listen(PORT, () => {
        console.log("Yo, my name is André 3000")
    });
    
});