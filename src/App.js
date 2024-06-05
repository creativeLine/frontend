import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Nav/NavBar";
import Home from "./components/Pages/Home";
import Employees from "./components/Pages/Employees";
import Salary from "./components/Pages/Salary";
import Logout from './components/Pages/Logout';
import Update from './components/Pages/Update';
import Delete from './components/Pages/Delete';
import Employee from './components/Pages/Employee';
import Attendance from './components/Pages/Attendance/Attendance';
import "./Globle.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Salary" element={<Salary />} />
            <Route path="/Update" element={<Update />} />
            <Route path="/Delete" element={<Delete />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Employee" element={<Employee />} />
            <Route path="/Attendance/*" element={<Attendance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
