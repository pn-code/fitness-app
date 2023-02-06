const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");
const { DateTime } = require("luxon");

const client = "http://localhost:5173/fitness-app/journal";

router.get("/", async (req, res) => {
	const entries = await Entry.find();
	res.json({
		status: "Success",
		entries,
	});
});

router.post("/", async (req, res) => {
	if (req.body.userId) {
		const entry = await Entry.create(req.body);
		res.json({
			status: "Success",
			entry
		});
	}
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
