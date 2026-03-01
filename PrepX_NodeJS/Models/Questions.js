import mongoose from "mongoose";

const QuestionsSchema = new mongoose.Schema({
    Examcode : {
        type: String,
        required: true,
    } ,
    Instructions: {
        type: String,
    },
    Question: {
        type: String,
        required: true
    },
    ImageLink: {
        type: String,
    },
    OptionA: {
        type: String,
        required: true
    },
    OptionB: {
        type: String,
        required: true
    },
    OptionC: {
        type: String,
        required: true
    },
    OptionD: {
        type: String,
        required: true
    },
    CorrectAns: {
        type: String,
    },
    Explanation: {
        type: String,
    }
})

const QuestionsModel = mongoose.model("QuestionsModel" , QuestionsSchema )

export default QuestionsModel