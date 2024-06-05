import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Employee.css";

const Employee = () => {
  const [formData, setFormData] = useState({});
  const [submitData, setSubmitData] = useState(null);

  const fields = [
    "Empcode", "EmpName", "EmpCatgCode", "EmpDeptCode", "EmpDesgCode", "EmpUnitCode", "EmpDOJ",
    "EmpDOL", "EmpleftTag", "EmpAge", "EmpImage", "EmpDOB", "EmpGender", "EmpFatherName",
    "EmpMother", "EmpGaurdianRelation", "EmpNationality", "EmpEmail", "EmpRemarks", "EmpHealthINS",
    "EmpTDS", "EmpMiscDed", "EmpPymtMode", "empNominee", "EmpAdharCardNo", "EmpPanNO",
    "EmpMArtialStatus", "EmpNomineeRelation", "EmpNomineeDob", "EmpTeaTag1", "EmpLunchTag",
    "EmpOverTimeTag", "EmpSundaytag", "EmpTimeDedOnlyTag", "EmpTeaTag", "EmpTeaTime2in",
    "EmpTeaBreak1IN", "TeaBreak2Out", "TeaBreak2In", "EmpEPFTag", "EmpEfpftag", "EmpESIDTag",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const obj = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };
  
    try {
      setSubmitData(formData);
      setFormData({});
      const response = await axios.post("https://api.restful-api.dev/objects", obj);
      console.log("Employee created successfully:", response.data);
    } catch (error) {
      console.error("Failed to create employee:", error);
    }
  };
  

  useEffect(() => {
    if (submitData) {
      console.log("Submitting data:", submitData);
    }
  }, [submitData]);

  return (
    <div className="Employee">
      <form className="empForm" id="empForm">
        <div className="column">
          {fields.map((name) => (
            <div className="form-group" key={name}>
              <label>{name}</label>
              <input
                type="text"
                name={name}
                placeholder={name}
                className="empInput"
                onChange={handleInputChange}
                value={formData[name] || ""}             
              />
            </div>
          ))}
        </div>
        
      </form>
      <div className="button-group">
          <button type="button" onClick={handleSubmit}>Save</button>
          <button type="button" onClick={() => setFormData({})}>Cancel</button>
        </div>
    </div>
  );
};

export default Employee;
