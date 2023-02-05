const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

const client = "http://localhost:5173/fitness-app/";

router.get("/", (req, res, next) => {
  if (req.user.userId) {
    Plan.find({}, (err, plans) => {
      if (err) {
        next(err);
      } else {
        res.json({
          plans,
        });
      }
    });
  }
});

router.post("/", async (req, res, next) => {
  if (req.body.userId) {
    const plan = await Plan.create(req.body);
    res.json({ status: "Success", plan });
  }
});

router.delete("/:planId", async (req, res) => {
  if (req.body.userId) {
    const planId = req.params.planId;
    const plan = await Plan.findByIdAndDelete(planId);
    res.json({
      status: "Successful",
      plan,
    });
  }
});

module.exports = router;
