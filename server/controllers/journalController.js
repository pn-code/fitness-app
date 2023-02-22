const Entry = require("../models/Entry");

const getJournalEntries = async (req, res) => {
  const { userId } = req.params;
  const entries = await Entry.find({ userId: userId });
  res.json({
    status: "Success",
    entries,
  });
};

const postJournalEntry = async (req, res) => {
  if (req.body.userId) {
    const entry = await Entry.create(req.body);
    res.json({
      status: "Success",
      entry,
    });
  }
};

const deleteJournalEntry = async (req, res) => {
  const entry = await Entry.findByIdAndDelete(req.params.journalId);
  res.json({
    status: "Success",
    entry,
  });
};

const updateJournalEntry = async (req, res) => {
  if (req.user === req.body.userId) {
    try {
      const entry = await Entry.findByIdAndUpdate(
        req.params.journalId,
        req.body
      );
      res.status(201).json({
        status: "Success",
        entry,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  getJournalEntries,
  postJournalEntry,
  deleteJournalEntry,
  updateJournalEntry,
};
