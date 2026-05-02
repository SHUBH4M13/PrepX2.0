import React, { useState } from "react"
import axios from "axios"

export default function QuestionCRUD() {

  const [form, setForm] = useState({
    Examcode: "",
    Instructions: "",
    Question: "",
    OptionA: "",
    OptionB: "",
    OptionC: "",
    OptionD: "",
    CorrectAns: "",
    Explanation: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await axios.post("/api/questions", form)
      alert("Question Added")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h2 className="text-PrimaryGold text-xl mb-4">Manage Questions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            className="bg-darkbg p-2 rounded border border-gray-600 focus:border-PrimaryGold outline-none"
          />
        ))}

      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-PrimaryGold text-darkbg px-6 py-2 rounded-lg hover:bg-hovergold"
      >
        Add Question
      </button>
    </div>
  )
}