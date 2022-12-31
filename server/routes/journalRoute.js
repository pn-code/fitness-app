const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");
const { DateTime } = require("luxon");

const client = 'http://localhost:5173/fitness-app/journal'

router.get("/", async (req, res) => {
    const entries = await Entry.find();
    res.json({
        status: "Success",
        entries,
    });
});

router.post("/", async (req, res) => {
    if (req.user) {
        const entryDetail = {
            author: req.user._id,
            date: req.body.date,
            plan: req.body.plan,
            calories: req.body.calories,
            macros: req.body.macros,
            notes: req.body.notes,
        };
        const entry = new Entry(entryDetail).save((err) => {
            if (err) {
                next(err);
            }
        });
        res.redirect(client);
        // res.json({
        //     status: "Success",
        //     entry: entryDetail,
        // });
    }
});

router.delete("/:journalId", async (req, res) => {
    if (req.user) {
        const journalId = req.params.journalId;
        const entry = await Entry.findByIdAndDelete(journalId);
        res.json({
            status: "Success",
            entry,
        });
    }
});

module.exports = router;
