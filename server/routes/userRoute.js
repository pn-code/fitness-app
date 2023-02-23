const express = require("express");
const router = express.Router();
const { updateUserMeasurements } = require("../controllers/userController");

router.put("/:userId", updateUserMeasurements);

module.exports = router;
