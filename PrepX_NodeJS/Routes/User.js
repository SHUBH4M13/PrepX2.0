import express from "express"
import { HandleCreateAcc , HandleLogin , HandleDeleteAccount } from "../Controller/User.js"
import { HandleGetUserResult } from "../Controller/Results.js"

const UserRouter = express.Router();

UserRouter
.post("/signup" , HandleCreateAcc )
.post("/login" , HandleLogin )
.delete("/delete" , HandleDeleteAccount )
.get("/results" , HandleGetUserResult )

export default UserRouter