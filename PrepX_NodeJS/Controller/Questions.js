import QuestionsModel from "../Models/Questions";

async function HandleGetQuestions(req,res) {
  const examcode = req.params.examcode;

  try {
    const data = await QuestionsModel.find({ Examcode: examcode });
    return res.status(200).json({
      msg: "Success",
      data,
    });
  } catch (error) {
    console.log(examcode);
    return res.status(500).json({
      msg: "Server error",
    });
  }
}

export { HandleGetQuestions }