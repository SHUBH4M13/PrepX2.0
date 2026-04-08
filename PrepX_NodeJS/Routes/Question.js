import express from "express"
import  { HandleGetQuestions , HandleCreateQuestion , HandleDeleteQuestion , HandleUpdateQuestion } from "../Controller/Questions.js"

const QuestionRouter = express.Router();

QuestionRouter
.get("/:examCode" , HandleGetQuestions )
.post("/add" , HandleCreateQuestion )
.delete("/delete" , HandleDeleteQuestion )
.put("/update" , HandleUpdateQuestion )


export default QuestionRouter