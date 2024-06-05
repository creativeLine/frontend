import React from "react";
import { useState } from "react";
import Exit from "./Exit";
import Entries from "./Entries";
import Day from "./EMPLOYEETIME/Day";
import Month from "./EMPLOYEETIME/Month";
import Year from "./EMPLOYEETIME/Year";

import "./Attendance.css";

const Attendance = () => {
  const [showExit, setShowExit] = useState(false);
  const [showEntries, setShowEntries] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [view, setView] = useState("day");

  const handleShowExit = () => {
    setShowExit(true);
    setShowButton(false);
  };

  const handleShowEntries = () => {
    setShowEntries(true);
    setShowButton(false);
  };
  const handleViewChange = (e) => {
    setView(e.target.value);
  };

  return (
    <div className="attendance">
      <div className="app-container">
        {" "}
        {/* {btnContainer} */}
        {showEntries && <Entries />}
        {showExit && <Exit />}
        {showButton && (
          <button className="Ebtun" onClick={handleShowExit}>
            Exit
          </button>
        )}
        {showButton && (
          <button className="Ebtun" onClick={handleShowEntries}>
            Entries
          </button>
        )}
      </div>
      <div className="attendance__table">
        <input className="serrchInput" type="text" placeholder="Search..." />
        <button className="btnSearch">Search</button>
        <div className="dropdowns">
          <select className="btnDay" onChange={handleViewChange} value={view}>
            <option value="day">Day</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div>
          {view === "day" && <Day />}
          {view === "month" && <Month />}
          {view === "year" && <Year />}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
