import express from "express"
import { HandleCreateAcc , HandleLogin , HandleDeleteAccount , HandleGetUserResult } from "../Controller/User"

const UserRouter = express.Router();

UserRouter
.post("/signup" , HandleCreateAcc )
.get("/login" , HandleLogin )
.delete("/delete" , HandleDeleteAccount )
.get("/results" , HandleGetUserResult )

export default UserRouter