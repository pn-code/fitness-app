const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose')
const User = mongoose.model("User")

const client = `http://localhost:5173/`
router.post("/register", async (req, res, next) => {
    const userExists = await User.findOne({ username: req.body.username });
    const emailRegistered = await User.findOne({ email: req.body.email });

    if (userExists || emailRegistered) {
        res.send(
            "Email or username already exist in database. Please enter a different email/username."
        );
    } else if (req.body.password != req.body.confirm_password) {
        res.send("Password and confirmed password are not the same.");
    } else {
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            if (err) {
                next(err);
            } else {
                const userDetails = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                };
                const user = new User(userDetails).save((err) => next(err));
                res.json({
                    status: "Success",
                    user: userDetails,
                });
            }
        });
    }
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("User does not exist.");
        if (user) {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.redirect(client);
            });
        }
    })(req, res, next);
});

router.get("/profile", (req, res) => {
    res.json({
        user: req.user,
    });
});

router.get("/log-out", (req, res, next) => {
    req.logOut(function (err) {
        if (err) {
            return next(err);
        }
        res.send("logged-out");
    });
});

module.exports = router;
