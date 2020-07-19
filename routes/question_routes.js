const express = require('express');
const questionHandler = require("../controllers/question_controller");
const api = express.Router();


// C
api.post('/users', questionHandler.createQuestion); 


// R
api.get('/users', questionHandler.fetchQuestions);

// U
api.put('/users/:id', questionHandler.updateQuestions);

// D
api.delete('/users/:id', questionHandler.deleteQuestion);

module.exports = api;