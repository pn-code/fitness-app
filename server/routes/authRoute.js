const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    loginAsGuest,
    logoutUser,
    getUserData,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/guest", loginAsGuest);
router.get("/user", getUserData);
router.get("/logout", logoutUser);

module.exports = router;
