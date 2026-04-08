import express from "express"
import http from "http"
import dotenv from "dotenv"
import cors from "cors"
import ConnectDB from "./DatabaseConnect.js"

import UserRouter from "./Routes/User.js"
import QuestionRouter from "./Routes/Question.js"
import ResultRouter from "./Routes/Results.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000
const db_url = process.env.MONGO_URL

const server = http.createServer(app);

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}))

ConnectDB(db_url)

app.use("/user" , UserRouter );
app.use("/question" , QuestionRouter )
app.use("/results" , ResultRouter)


server.listen(PORT, "0.0.0.0", () => {
    console.log(`http://localhost:${PORT}`)
})
