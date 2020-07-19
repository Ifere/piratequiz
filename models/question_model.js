const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema({
    SN: {
        type: Number,
        required: true,
    },
    Question: {
        type: String,
        default: "",
    },
    Type: {
        type: String,
        default: ""
    },
    Options: {
        type: Array,
        default: []
    },
    Answer: {
        type: String,
        default: "",
    }
});

module.exports = mongoose.model("Question", QuestionSchema);