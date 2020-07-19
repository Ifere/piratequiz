const db = require("./config/db");
const express = require("express");
const userApi = require("./routes/user_routes");
const questionApi = require("./routes/question_routes");



const app = express();

// connects to db
db();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mount apiRouter on app

app.use('/v1', userApi);
app.use('/v1', questionApi);


app.listen(process.env.PORT || 8080, () => console.log('server running'));