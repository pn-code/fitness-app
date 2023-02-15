const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.get("/:userId", async (req, res) => {
	const { userId } = req.params;
	const entries = await Entry.find({ userId: userId });
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
			entry,
		});
	}
});

router.delete("/:journalId", async (req, res) => {
	const entry = await Entry.findByIdAndDelete(req.params.journalId);
	res.json({
		status: "Success",
		entry,
	});
});

module.exports = router;
