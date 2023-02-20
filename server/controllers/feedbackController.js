const Feedback = require("../models/Feedback");

const postFeedback = async (req, res) => {
  const feedback = await Feedback.create(req.body);
  res.status(201).json({ success: true, feedback });
};

module.exports = { postFeedback };
