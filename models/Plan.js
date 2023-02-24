const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    title: { type: String, required: true },
    emphasis: { type: String, required: true },
    desc: { type: String, required: true },
    exercises: { type: [], required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    user: { type: String, required: true },
    likes: [],
    saved: [],
});

module.exports = mongoose.model("Plan", PlanSchema);
