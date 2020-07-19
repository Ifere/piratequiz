const express = require("express");
const { createUser, fetchUsers, updateUser, deleteUser } = require("../controllers/user_controller");

const api = express.Router();


// C
api.post('/users/create', createUser); 


// R
api.get('/leaderboard', fetchUsers);

// U
api.put('/users', updateUser);

// D
api.delete('/users', deleteUser);

module.exports =  api;