const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        default: "",
    },
    score: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("User", UserSchema);