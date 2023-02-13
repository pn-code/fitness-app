const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const MemoryStore = require("memorystore")(session);
require("./passportConfig")(passport);
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
app.use(
    cors({
        origin: "https://fitness.philipnguyen.dev",
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        cookie: { maxAge: 86400000 },
        store: new MemoryStore({
            checkPeriod: 86400000,
        }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
const authRoute = require("./routes/authRoute");
const plansRoute = require("./routes/plansRoute");
const journalRoute = require("./routes/journalRoute");
const feedbackRoute = require("./routes/feedbackRoute");

// Index - User Auth
app.use("/", authRoute);

// Training Planner
app.use("/plans", plansRoute);

// Daily Journals
app.use("/journal", journalRoute);

// Feedback
app.use("/feedback", feedbackRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
});
