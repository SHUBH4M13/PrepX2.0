import express from "express"
import { HandleCreateAcc , HandleLogin , HandleDeleteAccount } from "../Controller/User"
import { HandleGetUserResult } from "../Controller/Results"

const UserRouter = express.Router();

UserRouter
.post("/signup" , HandleCreateAcc )
.get("/login" , HandleLogin )
.delete("/delete" , HandleDeleteAccount )
.get("/results" , HandleGetUserResult )

export default UserRouter