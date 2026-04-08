import ResultModel from "../Models/Result.js"

async function HandleGetUserResult(req,res){

    const userid = req.user.id;

    try {

        const results = await ResultModel.find({UserID: userid})

        if(!results || results.length === 0){
            return res.status(404).json({
                success: false,
                msg: "Result not found"
            })
        }

        return res.status(200).json({
            success: true,
            msg: "results",
            results
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
}

async function HandleSaveResult(req,res){
    const userid = req.user.id;
    try {

        const { TotalScore , TimeTaken , Suggestion } = req.body

        ResultModel.create({
            UserID: userid,
            TotalScore: TotalScore,
            TimeTaken: TimeTaken,
            Suggestion: Suggestion
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server Error"
        })
    }
}

export { HandleGetUserResult , HandleSaveResult }