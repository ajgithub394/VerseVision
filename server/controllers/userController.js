import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

//controller function for user registration
const registerUser = async (req,res) =>{
    try {
        //extract name,emailId and password from request body
        const {name, emailId, password} = req.body;

        //if name,emailId or password is not available
        if(!name || !emailId || !password){
            return res.json({success : false, message : 'Details are missing...please provide complete details'});
        }

        //ecrypt the password given by the user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //store the user data into the database
        const userData = {
            name,
            emailId,
            password : hashedPassword
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        //now we will generate a token which will be sent in the response
        const token = jwt.sign({id : user._id},process.env.JWT_SECRET);

        //send this token in the response
        res.json({success : true, token, user : {name : user.name}});


    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message});
    }
}


//controller function for user login
const loginUser = async (req,res) =>{
    try {
        //we require only emailId and password for login
        const {emailId, password} = req.body;
        const user = await userModel.findOne({emailId});

        if(!user){
            return res.json({success : false, message : "User doesn't exist"});
        }

        //password matching if user is found
        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
            res.json({success : true, token, user : {name : user.name}})
        }else{
            return res.json({success : false, message : "Incorrect password"});
        }

    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message});
    }
}

//controller function for handling user credits
const userCredits = async (req,res) => {
    try {
        const {userId} = req.body;

        //find the user from userId
        const user = await userModel.findById(userId);
        res.json({success : true, credits : user.creditBalance, user : {name : user.name}});

    } catch (error) {
        console.log(error.message);
        res.json({success : false, message : error.message});
    }
}

export {registerUser, loginUser, userCredits};