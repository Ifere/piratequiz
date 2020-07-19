const User = require("../models/user_model");

const createUser = async (req, res) => { //done
    try {
        if (req.body.name) {
            req.body.name = req.body.name.toLowerCase();
        }
        const check = await User.findOne({ name });
        let data;
        if (!check) {
            throw new Error('Name already taken');
        } else {
            data = await User.create(req.body);

        }
        res.json({
            sucess: true,
            data
        })
        
    } catch (error) {
        res.json({
            success: false,
            error:error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
            const update = req.body;
            const name = req.body.name;
            const data =await  User.findOneAndUpdate(name, { $set: update }, { new: true });
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


const fetchUsers = async (req, res) => { //done
    try {
        let filter = req.query;
        const data = await User.find(filter).sort({ $natural: -1 })
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




const deleteUser = async (req, res) => { //done
    try {
        if (req.body.name) {
            
            const data = await User.finOneAndDelete(name);
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
    createUser,
    fetchUsers,
    updateUser,
    deleteUser,
}