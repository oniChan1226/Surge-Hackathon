import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";

const AllReports = () => {
  const [reportsData, setReportsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReports = async () => {
      setLoading(true);
      try {
        const usersCollectionRef = collection(db, "users");
        const userSnapshots = await getDocs(usersCollectionRef);

        const allReports = [];
        for (const userDoc of userSnapshots.docs) {
          const userId = userDoc.id;
          const userData = userDoc.data();

          try {
            const reportsCollectionRef = collection(
              db,
              "users",
              userId,
              "reports"
            );
            const reportsSnapshot = await getDocs(reportsCollectionRef);

            if (!reportsSnapshot.empty) {
              const userReports = reportsSnapshot.docs.map((reportDoc) => ({
                id: reportDoc.id,
                ...reportDoc.data(),
                userId,
              }));
              allReports.push(...userReports);
            } else {
              console.log(`user ${userId} does not have reports subcollection`);
            }
          } catch (err) {
            console.error(err);
          }
        }
        setReportsData(allReports);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    return () => fetchAllReports();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!reportsData.length) {
    return <div>No reports found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All User Reports</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
        <thead className="border-b-2 border-slate-500">
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-3 font-medium">User ID</th>
            <th className="text-left p-3 font-medium">User Name</th>
            <th className="text-left p-3 font-medium">Type of Help</th>
            <th className="text-left p-3 font-medium">Description</th>
            <th className="text-left p-3 font-medium">Urgency</th>
            <th className="text-left p-3 font-medium">Contact</th>
            <th className="text-left p-3 font-medium">Status</th>
            <th className="text-left p-3 font-medium">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((report) => (
            <tr key={report.id} className="border-b">
              <td className="p-3">{report.userId}</td>
              <td className="p-3">{report.userName}</td>
              <td className="p-3">{report.helpType}</td>
              <td className="p-3">{report.description}</td>
              <td
                className={`p-3 ${
                  report.urgency === "High" ? "text-red-500" : "text-green-500"
                }`}
              >
                {report.urgency}
              </td>
              <td className="p-3">{report.contact}</td>
              <td
                className={`p-3 ${
                  report.status === "pending"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {report.status}
              </td>
              <td className="p-3">
                {report.timestamp
                  ? new Date(report.timestamp.seconds * 1000).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllReports;
