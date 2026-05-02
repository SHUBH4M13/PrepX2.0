import reportmodel from "../Models/Report.js"


async function GetReportQuestions(req,res){
    
    try {

        const reported_question = await reportmodel.find({});

        if( reported_question.empty() ){
            return res.status(200).json({
                msg: "No reported Questions found",
              });
        } else {
            return res.status(200).json({
                msg: "Reported Questios",
                data: reported_question
              });
        }
        
    } catch (error) {
        return res.status(500).json({
          msg: "Server error",
        });
    }

}

async function deleteReportedQuestions(req,res){

    try {

        await reportmodel.deleteMany({});

        return res.status(200).json({
            msg: "deleted"
        })
        
    } catch (error) {
        return res.status(500).json({
            msg: "Server error",
          });
    }

}

export {GetReportQuestions , deleteReportedQuestions}