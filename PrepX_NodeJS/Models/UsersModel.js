import mongoose from "mongoose";
import QuestionsModel from "./Questions";

const UserScehma = new mongoose.Schema({
    Username: {
        type: String,
        unqiue: true,
        required: true
    },
    Email:{
        type: String,
        unqiue: true,
        required: true
    }, 
    Password: {
        type:String,
        required: true,
    },
    ProfilePic: {
        type:String,
    },
    TestGiven: {
        type: Number,
        default: 0
    },
    PrevTest: {
        type: mongoose.Schema.ObjectId,
        ref: QuestionsModel
    }
})

const UserModel = mongoose.model("UserModel" , UserScehma )

export default UserModel