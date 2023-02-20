const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journalController")

router.get("/:userId", journalController.getJournalEntries);

router.post("/", journalController.postJournalEntry);

router.delete("/:journalId", journalController.deleteJournalEntry);

router.put("/:journalId", journalController.updateJournalEntry);

module.exports = router;
