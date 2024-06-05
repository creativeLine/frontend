import React, { useState, useEffect } from "react";
import './Entries.css'; 

const Entries = () => {
  const [empCode, setEmpCode] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    const now = new Date();
    setDay(now.toLocaleString("en-US", { weekday: 'long' }));
    setDate(now.getDate().toString().padStart(2, '0'));
    setMonth((now.getMonth() + 1).toString().padStart(2, '0'));
    setYear(now.getFullYear().toString());

    const updateTime = () => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleTimeString());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate.getDate().toString().padStart(2, '0'));
    setMonth((selectedDate.getMonth() + 1).toString().padStart(2, '0'));
    setYear(selectedDate.getFullYear().toString());
    setDay(selectedDate.toLocaleString("en-US", { weekday: 'long' }));
  };

  const handleSave = () => {
    console.log({
      empCode,
      time,
      day,
      date,
      month,
      year,
    });

    setEmpCode("");
    setTime("");
    setDay("");
    setDate("");
    setYear("");
    setMonth("");
  };

  const handleCancel = () => {
    setEmpCode("");
    setTime("");
    setDay("");
    setDate("");
    setYear("");
    setMonth("");
  };

  return (
    <div className="attendance-container">
      <h1>Entry Page</h1>
      <div className="entryForm">
        <div className="form-group">
          <label>Emp Code:</label>
          <input
            type="text"
            value={empCode}
            onChange={(e) => setEmpCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            value={time}
            readOnly
          />
        </div>
        {/* <div className="form-group">
          <label>Day:</label>
          <input
            type="text"
            value={day}
            readOnly
          />
        </div> */}
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            onChange={handleDateChange}
          />
        </div>
        {/* <div className="form-group">
          <label>Month:</label>
          <input
            type="text"
            value={month}
            readOnly
          />
        </div> */}
        {/* <div className="form-group">
          <label>Year:</label>
          <input
            type="text"
            value={year}
            readOnly
          />
        </div> */}
     
      </div>
      <div className="buttonbtn">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Clear</button>
        </div>
    </div>
  );
};

export default Entries;
