const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.get("/", async (req, res) => {
    const entries = await Entry.find();
    res.json({
        status: "Success",
        entries,
    });
});

router.post("/", async (req, res) => {
    const entryDetail = {
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
});

router.delete("/:journalId", async (req, res) => {
    const journalId = req.params.journalId;
    const entry = await Entry.findByIdAndDelete(journalId);
    res.json({
        status: "Success",
        entry,
    });
});

module.exports = router;