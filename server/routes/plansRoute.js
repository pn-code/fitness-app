const express = require("express");
const router = express.Router();
const plansController = require("../controllers/plansController")

router.get("/:userId", plansController.getUserPlans);

router.post("/", plansController.postPlan);

router.delete("/", plansController.deletePlan);

router.put("/:planId", plansController.updatePlan);

module.exports = router;
