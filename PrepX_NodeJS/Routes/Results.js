import express from "express"
import authenticateJWT from "../Middleware/jwt.js"
import { HandleSaveResult , HandleGetUserResult} from "../Controller/Results.js"

const ResultRouter = express.Router();

ResultRouter
.post("/add" , authenticateJWT ,HandleSaveResult )
// .get("/" , HandleGetUserResult ) already implemented


export default ResultRouter