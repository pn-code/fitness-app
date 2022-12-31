const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    author: String,
    email: String,
    title: String,
    text: String
})

module.exports = mongoose.model("Feedback", FeedbackSchema);