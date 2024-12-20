import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { useAuthContext } from "../context/AuthContext";

const ReportsDataTable = () => {
  const { user } = useAuthContext();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      if (user) {
        try {
          const reportsRef = collection(db, "users", user.uid, "reports");
          const reportsSnapshot = await getDocs(reportsRef);
          const reportsData = reportsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setReports(reportsData);
        } catch (error) {
          console.error("Error fetching reports:", error);
        }
      }
      setLoading(false);
    };

    fetchReports();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!reports.length) {
    return <div>No reports found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Reports</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
        <thead className="border-b-2 border-slate-500">
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-3 font-medium">Type of Help</th>
            <th className="text-left p-3 font-medium">Description</th>
            <th className="text-left p-3 font-medium">Urgency</th>
            <th className="text-left p-3 font-medium">Contact</th>
            <th className="text-left p-3 font-medium">Status</th>
            <th className="text-left p-3 font-medium">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-b">
              <td className="p-3">{report.helpType}</td>
              <td className="p-3">{report.description}</td>
              <td className={`p-3 ${report.urgency === "High" ? "text-red-500" : "text-green-500"}`}>{report.urgency}</td>
              <td className="p-3">{report.contact}</td>
              <td className={`p-3 ${report.status === "pending" ? "text-red-500" : "text-green-500"}`}>{report.status}</td>
              <td className="p-3">
                {new Date(report.timestamp?.seconds * 1000).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsDataTable;
