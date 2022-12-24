const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Plan = require("./models/Plan");
const User = require("./models/User");
require("dotenv").config();

const client = "http://localhost:5173/fitness-app/";

// Set up default mongoose connection
const mongoDB = process.env.MONGO_URL;
mongoose.set("strictQuery", false);
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

app.post("/api/register", async (req, res, next) => {
    const userExists = await User.findOne({ username: req.body.username });
    const emailRegistered = await User.findOne({ email: req.body.email });

    if (userExists || emailRegistered) {
        res.send(
            "Email or username already exist in database. Please enter a different email/username."
        );
    } else if (req.body.password != req.body.confirm_password) {
        res.send("Password and confirmed password are not the same.");
    } else {
        const userDetails = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        const user = new User(userDetails).save((err) => next(err));
        res.json({
            status: "Success",
            userDetails,
        });
    }
});

// app.post('/api/login', (req, res) => {
//   jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
//     res.json({
//       token
//     });
//   });
// });

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
        name: req.body.name,
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
            // res.json({
            //   status: "Success",
            //   planDetail,
            // });
            res.redirect(client + "my-plans");
        }
    });
});

app.delete("/api/plans/:planId", async (req, res) => {
    const planId = req.params.planId;
    // find and delete a plan
    const plan = await Plan.findByIdAndDelete(planId);
    // return json
    res.json({
        status: "Successful",
        plan,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
});
