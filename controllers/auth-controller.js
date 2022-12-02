
const { validationResult } = require('express-validator');
const User = require('../models/user-model');

const authLogin= (req,res) =>{

}

const authRegister = async (req,res) =>{
    const {name,lastname,username,password,email,age}  = req.body;

    const user = new User({name,lastname,username,password,email,age});
    await user.save();
    res.json({
        user
    })


}


module.exports ={
    authRegister
}