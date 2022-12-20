const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Plan = require("./models/Plan");
require("dotenv").config();

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.get("/api/plans", (req, res, next) => {
  Plan.find({}, (err, plans) => {
    if (err) {
      next(err);
    } else {
      // Success!
      res.json({
        plans,
      });
    }
  });
});

app.post("/api/plans", (req, res, next) => {
  const planDetail = {
    title: req.body.title,
    emphasis: req.body.emphasis,
    exercises: [
      {
        name: req.body.exercise1_name,
        sets: req.body.exercise1_sets,
        reps: req.body.exercise1_reps,
      },
      {
        name: req.body.exercise2_name,
        sets: req.body.exercise2_sets,
        reps: req.body.exercise2_reps,
      },
      {
        name: req.body.exercise3_name,
        sets: req.body.exercise3_sets,
        reps: req.body.exercise3_reps,
      },
      {
        name: req.body.exercise4_name,
        sets: req.body.exercise4_sets,
        reps: req.body.exercise4_reps,
      },
      {
        name: req.body.exercise5_name,
        sets: req.body.exercise5_sets,
        reps: req.body.exercise5_reps,
      },
      {
        name: req.body.exercise6_name,
        sets: req.body.exercise6_sets,
        reps: req.body.exercise6_reps,
      },
      {
        name: req.body.exercise7_name,
        sets: req.body.exercise7_sets,
        reps: req.body.exercise7_reps,
      },
    ],
  };
  const plan = new Plan(planDetail).save((err) => {
    if (err) {
      next(err);
    } else {
      res.json({
        status: "Success",
        planDetail,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}.`);
});
