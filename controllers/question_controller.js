const Question = require("../models/question_model");

const createQuestion = async (req, res) => { 
    try {
        if (req.body.sn) {
            const num = req.body.sn;
        
        const check = await User.findOne({ sn: num });
        let data;
        if (!check) {
            throw new Error('question already sent');
        } else {
            data = await Question.create(req.body);

        }
        res.json({
            sucess: true,
            data
        })
    }
        
    } catch (error) {
        res.json({
            success: false,
            error:error.message,
        });
    }
};

const updateQuestion = async (req, res) => {
    try {
            const update = req.body;
            const questionNumber = req.body.sn;
            const data =await  User.findOneAndUpdate(questionNumber, { $set: update }, { new: true });
        res.json({
            success: true,
            data,
        });
            
        
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            error: err.message,
        });
    }
};


const fetchQuestions = async (req, res) => { 
    try {
        let filter = req.query;
        const data = await Question.find(filter);
        res.json({
            success: true,
            data
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error,
        });
    }
};




const deleteQuestion = async (req, res) => { 
    try {
        if (req.body.sn) {
            const num = req.body.sn;
            
            const data = await User.finOneAndDelete({ sn: num});
            res.json({
                success: true,
            });
        }

        
        
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            error: err.message,
        });
    }
};

module.exports = {
    createQuestion,
    fetchQuestions,
    updateQuestion,
    deleteQuestion,
}