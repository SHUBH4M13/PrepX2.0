import express from "express"
import { HandleSaveResult } from "../Controller/Results"

const ResultRouter = express.Router();

ResultRouter
.post("/add" , HandleSaveResult )

export default ResultRouter