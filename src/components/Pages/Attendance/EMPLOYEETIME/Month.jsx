import React from "react";
import { useState } from "react";

const Month = () => {
  const [view, setView] = useState("month");
  const handleViewChange = (e) => {
    setView(e.target.value);
  };
  const sampleData = [
    {
      series: 1,
      empCode: "E001",
      empName: "John Doe",
      day: "Monday",
      entries: "9:00 AM",
      exit: "5:00 PM",
      status: "Present",
      absent: 0,
      present: 20,
      halfDay: 2,
      empTotalPresent: 265,
      empTotalAbsent: 100,
      totalDays: 22,
    },
    {
      series: 2,
      empCode: "E002",
      empName: "Jane Smith",
      day: "Tuesday",
      entries: "9:30 AM",
      exit: "5:30 PM",
      status: "Present",
      absent: 1,
      present: 19,
      halfDay: 1,
      totalDays: 21,
      empTotalPresent: 200,
      empTotalAbsent: 110,
    },
  ];

  return (
    <div>
      <div className="mont_container">
        {view === "month" && (
          <table>
            <thead>
              <tr>
                <th>Series</th>
                <th>EmpCode</th>
                <th>EmpName</th>
                <th>Absent</th>
                <th>Present</th>
                <th>HalfDay</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((data, index) => (
                <tr key={index}>
                  <td>{data.series}</td>
                  <td>{data.empCode}</td>
                  <td>{data.empName}</td>
                  <td>{data.absent}</td>
                  <td>{data.present}</td>
                  <td>{data.halfDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default Month;
