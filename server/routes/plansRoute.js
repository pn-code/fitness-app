const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

const client = "http://localhost:5173/fitness-app/"

router.get("/", (req, res, next) => {
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

router.post("/", (req, res, next) => {
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
            res.redirect(client + "my-plans");
        }
    });
});

router.delete("/:planId", async (req, res) => {
    const planId = req.params.planId;
    const plan = await Plan.findByIdAndDelete(planId);
    res.json({
        status: "Successful",
        plan,
    });
});

module.exports = router;