const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");
const passport = require("passport");

router.get("/", async (req, res) => {
    if (req.user) {
        const entries = await Entry.find();
        res.json({
            status: "Success",
            entries,
        });
    } else {
        res.sendStatus(403);
    }
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
        res.json({
            status: "Success",
            entry: entryDetail,
        });
    } else {
        res.sendStatus(403);
    }
});

router.delete("/:journalId", async (req, res) => {
    if (req.user) {
        const journalId = req.params.journalId;
        const entry = await Entry.findById(journalId);
        // If currentUser does not match Entry Creator's User, do not allow delete action.
        if (req.user._id != entry.author) {
            return res.statusCode(403);
        } else if (req.user._id == entry.author) {
        // If currentUser and entry creator match, delete entry...
            Entry.findByIdAndDelete(journalId);
            res.json({
                status: "Success",
                entry,
            });
        }
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;
