import QuestionsModel from "../Models/Questions.js";

async function HandleGetQuestions(req,res) {
  const examcode = req.params.examCode;

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

async function HandleCreateQuestion(req, res) {
  try {
      const {
          Examcode,
          Instructions,
          Question,
          ImageLink,
          OptionA,
          OptionB,
          OptionC,
          OptionD,
          CorrectAns,
          Explanation
      } = req.body

      if (!Examcode || !Question || !OptionA || !OptionB || !OptionC || !OptionD) {
          return res.status(400).json({
              success: false,
              msg: "Required fields missing"
          })
      }

      const validOptions = ["A", "B", "C", "D"]
      if (CorrectAns && !validOptions.includes(CorrectAns)) {
          return res.status(400).json({
              success: false,
              msg: "CorrectAns must be A, B, C or D"
          })
      }

      const newQuestion = await QuestionsModel.create({
          Examcode,
          Instructions,
          Question,
          ImageLink,
          OptionA,
          OptionB,
          OptionC,
          OptionD,
          CorrectAns,
          Explanation
      })

      return res.status(201).json({
          success: true,
          msg: "Question created successfully",
          data: newQuestion
      })

  } catch (error) {
      console.log(error)
      return res.status(500).json({
          success: false,
          msg: "Server error"
      })
  }
}

async function HandleDeleteQuestion(req, res) {
    try {
        const { id } = req.body

        const deleted = await QuestionsModel.findByIdAndDelete(id)

        if (!deleted) {
            return res.status(404).json({
                success: false,
                msg: "Question not found"
            })
        }

        return res.status(200).json({
            success: true,
            msg: "Question deleted successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server error"
        })
    }
}

async function HandleUpdateQuestion(req, res) {
  try {
      const { id } = req.body

      const updateData = req.body

      if (updateData.CorrectAns) {
          const validOptions = ["A", "B", "C", "D"]
          if (!validOptions.includes(updateData.CorrectAns)) {
              return res.status(400).json({
                  success: false,
                  msg: "CorrectAns must be A, B, C or D"
              })
          }
      }

      const updated = await QuestionsModel.findByIdAndUpdate(
          id,
          updateData,
          { new: true, runValidators: true }
      )

      if (!updated) {
          return res.status(404).json({
              success: false,
              msg: "Question not found"
          })
      }

      return res.status(200).json({
          success: true,
          msg: "Question updated successfully",
          data: updated
      })

  } catch (error) {
      return res.status(500).json({
          success: false,
          msg: "Server error"
      })
  }
}

export { HandleGetQuestions , HandleCreateQuestion , HandleDeleteQuestion , HandleUpdateQuestion }