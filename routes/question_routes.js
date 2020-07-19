const express = require('express');
const { createQuestion, fetchQuestions, updateQuestion, deleteQuestion } = require("../controllers/question_controller");
const api = express.Router();


// C
api.post('/questions', createQuestion); 


// R
api.get('/questions', fetchQuestions);

// U
api.put('/questions', updateQuestion);

// D
api.delete('/questions', deleteQuestion);

module.exports = api;