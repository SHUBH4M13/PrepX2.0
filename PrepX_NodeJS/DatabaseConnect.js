import mongoose from "mongoose";

async function ConnectDB(url){

    await mongoose.connect(url)
    .then(() => {
        console.log("Database Connected")
    }).catch((err) => {
        console.log("Database Connection Failed" , err)
    })

}

export default ConnectDB