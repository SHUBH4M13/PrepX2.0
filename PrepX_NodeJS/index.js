import express from "express"
import http from "http"
import dotenv from "dotenv"
import cors from "cors"
import Questions from "./Models/Questions.js"
import ConnectDB from "./DatabaseConnect.js"

dotenv.config()

const app = express();
const PORT = 8069

const db_url = process.env.MONGO_URL || `mongodb://127.0.0.1:27017/PrepX`

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

ConnectDB(db_url)

app.get("/:examcode" , async (req,res) => {
    const examcode = req.params.examcode
    console.log(examcode)
    try {
        
    const data = await Questions.find({ Examcode: examcode})

    return res.status(200).json({
        msg: "Success",
        data
    })

    } catch (error) {
        console.log(examcode)
        return res.status(500).json({
            msg: "Server error"
        })
    }
})

server.listen( PORT , () => {
    console.log(`http://localhost:${PORT}`)
})
