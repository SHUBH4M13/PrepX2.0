import express from "express"
import  { HandleGetQuestions , HandleCreateQuestion , HandleDeleteQuestion , HandleUpdateQuestion } from "../Controller/Questions"

const QuestionRouter = express.Router();

QuestionRouter
.get("/:examcode" , HandleGetQuestions )
.post("/add" , HandleCreateQuestion )
.delete("/delete" , HandleDeleteQuestion )
.put("/update" , HandleUpdateQuestion )


export default QuestionRouter