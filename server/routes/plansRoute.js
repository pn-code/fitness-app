const express = require("express");
const router = express.Router();
const plansController = require("../controllers/plansController")

router.get("/", plansController.getAllPlans)
router.get("/:userId", plansController.getUserPlans);
router.post("/", plansController.postPlan);
router.delete("/:planId", plansController.deletePlan);
router.put("/:planId", plansController.updatePlan);

module.exports = router;
