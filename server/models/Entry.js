const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema ({ 
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    plan: String,
    calories: String,
    macros: String,
    notes: String
})

module.exports = mongoose.model("Entry", EntrySchema);