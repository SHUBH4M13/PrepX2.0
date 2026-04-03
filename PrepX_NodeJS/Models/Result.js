import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.ObjectId,
        ref: "UsersModel",
        required: true
    }, 
    TotalScore: {
        type: Number,
        required: true,
    },
    TimeTaken: {
        type: String,
        required: true
    },
    Suggestion: {
        type: String
    }
})

const ResultModel = mongoose.model("ResultModel" , ResultSchema)

export default ResultModel 