import React, { useState } from "react";
import './SalaryList.css'

const SalarySheet = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleAddEmployee = () => {
    const emp = {
      empCode: "",
      empName: "",
      basicSalary: 0,
      workingDays: 0,
      overTimeDays: 0,
      grossSalary: 0,
      hra: 0,
      convience: 0,
      petrol: 0,
      splallowance: 0,
      eS: 0,
      pF: 0,
      advance: 0,
      netSalary: 0,
      totalAbsent: 0,
      totalPresent: 0,
      currentSalary: 0,
      pendingSalaryLastMonth: 0,
      advance: 0,
    };
    setEmployees([...employees, emp]);
  };

  const handleSearch = () => {
    const foundEmployee = employees.find(
      (employee) => employee.empName === searchTerm
    );
    if (foundEmployee) {
      const totalAbsent = 30 - foundEmployee.workingDays;
      const totalPresent = foundEmployee.workingDays;
      const currentSalary =
        foundEmployee.grossSalary - foundEmployee.advance;
      setSearchResult({
        ...foundEmployee,
        totalAbsent,
        totalPresent,
        currentSalary,
        pendingSalaryLastMonth: foundEmployee.netSalary - foundEmployee.advance,
      });
    } else {
      setSearchResult(null);
    }
  };

  const calculateSalary = () => {
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      grossSalary:
        emp.basicSalary * emp.workingDays +
        emp.basicSalary * 1.5 * emp.overTimeDays +
        emp.hra +
        emp.convience +
        emp.petrol +
        emp.splallowance,
      eS: emp.basicSalary * 0.011,
      pF: emp.basicSalary * 0.111,
      netSalary:
        emp.basicSalary * emp.workingDays +
        emp.basicSalary * 1.5 * emp.overTimeDays +
        emp.hra +
        emp.convience +
        emp.petrol +
        emp.splallowance -
        (emp.basicSalary * 0.011 + emp.basicSalary * 0.111),
    }));
    setEmployees(updatedEmployees);
  };

  return (
    <div className="mainClass">
      <input
        type="text"
        placeholder="Search by Employee Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAddEmployee}>Add Salary</button>
      <button className="btnCalculate" onClick={calculateSalary}>Calculate Salary</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>Emp Code</th>
            <th>Emp Name</th>
            <th>Basic Salary</th>
            <th>Working Days</th>
            <th>Overtime Days</th>
            <th>Gross Salary</th>
            <th>HRA</th>
            <th>Convience</th>
            <th>Petrol</th>
            <th>Splallowance</th>
            <th>E.S 1.1%</th>
            <th>P.F 1.11%</th>
            <th>Advance</th>
            <th>Net Salary</th>
            <th>Total Absent</th>
            <th>Total Present</th>
            <th>Current Salary</th>
            <th>Pending Salary Last Month</th>
          </tr>
        </thead>
        <tbody>
          {searchResult && (
            <tr>
              <td>{searchResult.empCode}</td>
              <td>{searchResult.empName}</td>
              <td contentEditable>{searchResult.basicSalary}</td>
              <td contentEditable>{searchResult.workingDays}</td>
              <td contentEditable>{searchResult.overTimeDays}</td>
              <td>{searchResult.grossSalary}</td>
              <td contentEditable>{searchResult.hra}</td>
              <td contentEditable>{searchResult.convience}</td>
              <td contentEditable>{searchResult.petrol}</td>
              <td contentEditable>{searchResult.splallowance}</td>
              <td>{searchResult.eS}</td>
              <td>{searchResult.pF}</td>
              <td contentEditable>{searchResult.advance}</td>
              <td>{searchResult.netSalary}</td>
              <td>{searchResult.totalAbsent}</td>
              <td>{searchResult.totalPresent}</td>
              <td>{searchResult.currentSalary}</td>
              <td>{searchResult.pendingSalaryLastMonth}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalarySheet;
