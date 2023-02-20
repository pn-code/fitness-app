const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

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

router.delete("/", async (req, res) => {
  const { userId, planUserId, currentPlanId } = req.body;

  if (userId == planUserId) {
    try {
      const plan = await Plan.findByIdAndDelete(currentPlanId);
      res.json({
        status: "Successful",
        plan,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
});

router.put("/", async (req, res) => {
  const { userId, planUserId, currentPlanId } = req.body;

  if (userId == planUserId) {
    try {
      const plan = await Plan.findByIdAndUpdate(currentPlanId);
      res.json({
        status: "Successful",
        plan,
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
});

module.exports = router;
