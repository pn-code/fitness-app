const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    name: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    emphasis: String,
    exercises: [],
});

module.exports = mongoose.model("Plan", PlanSchema);
