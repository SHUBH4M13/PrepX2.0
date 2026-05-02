import {useEffect} from "react"
import ReportedSection from "./ReportedSection"
import QuestionCRUD from "./QuestionCRUD"
import { isAdmin } from "./AdminAuth"
import {useNavigate} from "react-router"

export default function AdminDashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin()) {
      navigate("/login")
    }
  }, [])

  return (
    <div className="bg-darkbg min-h-screen text-white p-6">

      {/* Header */}
      <div className="flex justify-end mb-6">
        <button className="bg-Secondarybg border border-PrimaryGold px-6 py-2 rounded-lg hover:bg-PrimaryGold hover:text-darkbg transition">
          Logout
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left: Reported Questions */}
        <div className="bg-Secondarybg rounded-2xl p-4">
          <ReportedSection />
        </div>

        {/* Right: CRUD */}
        <div className="lg:col-span-2 bg-Secondarybg rounded-2xl p-6">
          <QuestionCRUD />
        </div>

      </div>
    </div>
  )
}