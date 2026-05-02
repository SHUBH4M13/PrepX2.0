import mongoose from "mongoose";

const reportScehma = new mongoose.Schema({
    
    questionId : {
        type: mongoose.Schema.ObjectId,
        ref: "QuestionsModel",
        required: true
    } ,
    issue: {
        type: String,
        enum: ['WRONG ANSWER' , 'INCORRECT OPTIONS' , 'NO PROPER INSTRUCTIONS' , 'OTHERS' ],
        required : true
    } ,
    note : {
        type: String,
    }

})

const reportmodel = mongoose.model("reportmodel" , reportScehma)

export default reportmodel;