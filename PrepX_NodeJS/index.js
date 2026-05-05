import express from "express"
import http from "http"
import dotenv from "dotenv"
import cors from "cors"
import client from "prom-client"

import ConnectDB from "./DatabaseConnect.js"

import UserRouter from "./Routes/User.js"
import QuestionRouter from "./Routes/Question.js"
import ResultRouter from "./Routes/Results.js"
import { loggerMiddleware } from "./Middleware/logging.js"


dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000
//const db_url = process.env.MONGO_URL_DEV
const db_url = process.env.MONGO_URL_PROD

const server = http.createServer(app);

client.collectDefaultMetrics()

const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
})

app.use((req, res, next) => {
  httpRequestCounter.inc()
  next()
})

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType)
  res.end(await client.register.metrics())
})

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}))

ConnectDB(db_url)

app.use(loggerMiddleware)
app.use("/user" , UserRouter );
app.use("/question" , QuestionRouter )
app.use("/results" , ResultRouter)


server.listen(PORT, "0.0.0.0", () => {
    console.log(`http://localhost:${PORT}`)
})
