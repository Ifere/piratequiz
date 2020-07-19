const express = require("express");
const userHandler = require("../controllers/user_controller");

const api = express.Router();


// C
api.post('/users/create', userHandler.createUser); 


// R
api.get('/leaderboard', userHandler.fetchUsers);

// U
api.put('/users/:name', userHandler.updateUserDetails);

// D
api.delete('/users/:name', userHandler.deleteUser);

module.exports =  api;