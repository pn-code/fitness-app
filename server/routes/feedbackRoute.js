const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/", (req, res) => {
    const feedbackDetail = req.body.feedback;
    const feedback = new Feedback(feedbackDetail).save(err => {
        if (err) {
            next(err);
        } else {
            res.json({
                status: "Success",
                feedback: feedbackDetail
            })
        }
    })
})

module.exports = router;