const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("User", UserSchema);