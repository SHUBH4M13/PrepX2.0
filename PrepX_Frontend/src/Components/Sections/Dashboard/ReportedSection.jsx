import React, { useEffect, useState } from "react"
import axios from "axios"

export default function ReportedSection() {
    const [reports, setReports] = useState([])

    useEffect(() => {
        fetchReports()
    }, [])

    const fetchReports = async () => {
        try {
            const res = await axios.get("/api/reported")
            setReports(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteReport = async (id) => {
        try {
            await axios.delete(`/api/reported/${id}`)
            fetchReports()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2 className="text-PrimaryGold text-xl mb-4">Reported Questions</h2>

            <div className="space-y-3">
                <div className="bg-darkbg p-3 rounded-lg">
                    <p className="text-sm">Question</p>

                    <button
                        className="mt-2 bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

// {reports.map((r) => (

//   ))}