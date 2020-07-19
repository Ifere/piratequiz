const mongoose = require('mongoose');
// const url = "mongodb://localhost:27017/nigma";
const live = "mongodb+srv://ifere:haaland2020@cluster0-mvvga.mongodb.net/pirate?retryWrites=true&w=majority";

module.exports = connectDB = () => {
    mongoose.connect(
        live, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
        
    }).then(() => console.log("db connected")).catch(console.log);
    
};