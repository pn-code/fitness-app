const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
	title: { type: String, require: true },
	emphasis: { type: String, require: true },
	desc: { type: String, require: true },
	exercises: { type: [], require: true },
	userId: { type: Schema.Types.ObjectId, ref: "User", require: true },
});

module.exports = mongoose.model("Plan", PlanSchema);
