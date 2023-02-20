const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const verifyJWT = require("./middleware/verifyJWT");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL;
mongoose.set("strictQuery", false);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Express Middleware
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES
app.use("/auth", require("./routes/authRoute"));
app.use("/refresh", require("./routes/refreshRoute"));

// PROTECTED ROUTES
app.use(verifyJWT);
app.use("/plans", require("./routes/plansRoute"));
app.use("/journal", require("./routes/journalRoute"));
app.use("/feedback", require("./routes/feedbackRoute"));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
});
