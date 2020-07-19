const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema({
    sn: {
        type: Number,
        required: true,
    },
    question: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: ""
    },
    options: {
        type: Array,
        default: []
    },
    answer: {
        type: String,
        default: "",
    }
});

module.exports = mongoose.model("Question", QuestionSchema);