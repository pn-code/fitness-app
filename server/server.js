const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
require('dotenv').config()

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.get("/", (req, res) => {
    res.send("Hello World.")
})

app.get("/api/plans", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`)
})