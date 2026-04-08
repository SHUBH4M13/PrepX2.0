import fs from "fs"
import path from "path"

const logFilePath = path.join(process.cwd(), "logs", "app.log")

export function log(message) {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] ${message}\n`

    fs.appendFileSync(logFilePath, logMessage)
}