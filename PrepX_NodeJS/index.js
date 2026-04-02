import express from "express"
import http from "http"
import dotenv from "dotenv"
import cors from "cors"
import ConnectDB from "./DatabaseConnect.js"
import UserRouter from "./Routes/User.js"

dotenv.config()

const app = express();
const PORT = 8069
//process.env.MONGO_URL || 
const db_url = `mongodb://127.0.0.1:27017/PrepX`

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

ConnectDB(db_url)

app.use("/user" , UserRouter );

server.listen( PORT , () => {
    console.log(`http://localhost:${PORT}`)
})
