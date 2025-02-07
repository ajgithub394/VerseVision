import mongoose from "mongoose";

//creating the user schema
const userSchema = new mongoose.Schema({
    name : {type : String, required: true},
    emailId : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    creditBalance : {type : Number, default : 5},
});


//creating the user model using the user schema
const userModel = mongoose.models.user || mongoose.model("user",userSchema);
//first it will search for the models with the name user and if not available then only it
//will create a new model

export default userModel;