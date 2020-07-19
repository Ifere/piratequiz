const express = require('express');
const { createQuestion, fetchQuestions, updateQuestion, deleteQuestion } = require("../controllers/question_controller");
const api = express.Router();


// C
api.post('/users', createQuestion); 


// R
api.get('/users', fetchQuestions);

// U
api.put('/users/:id', updateQuestion);

// D
api.delete('/users/:id', deleteQuestion);

module.exports = api;