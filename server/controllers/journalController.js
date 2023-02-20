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
  const entry = await Entry.findByIdAndUpdate(req.params.journalId, req.body);
  res.json({
    status: "Success",
    entry,
  });
};

module.exports = {
  getJournalEntries,
  postJournalEntry,
  deleteJournalEntry,
  updateJournalEntry,
};
