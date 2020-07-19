const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema({
    Name: {
        type: String,
        default: "",
    },
    Score: {
        type: Number,
        default: ""
    }
});

module.exports = mongoose.model("User", UserSchema);