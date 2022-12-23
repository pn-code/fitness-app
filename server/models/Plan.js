const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema ({ 
    name: String,
    emphasis: String,
    exercises: []
})

module.exports = mongoose.model("Plan", PlanSchema);