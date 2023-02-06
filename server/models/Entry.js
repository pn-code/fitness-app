const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
	date: Date,
	plan: String,
	calories: String,
	macros: String,
	notes: String,
});

module.exports = mongoose.model("Entry", EntrySchema);
