const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

const client = "http://localhost:5173/fitness-app/";

router.get("/:userId", async (req, res, next) => {
  if (req.params.userId) {
    const plans = await Plan.find({ userId: req.params.userId });
    res.json({ plans });
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
