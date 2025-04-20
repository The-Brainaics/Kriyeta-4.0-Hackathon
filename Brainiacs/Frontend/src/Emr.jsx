

import React, { useState } from "react";
import "./Emr.css";

const EMR = () => {
  const [patientRecords, setPatientRecords] = useState([
    {
      id: 1,
      name: "Alice Smith",
      age: 34,
      diagnosis: "Hypertension",
      treatment: "Medication and lifestyle changes",
      lastVisit: "2025-04-05"
    },
    {
      id: 2,
      name: "Bob Johnson",
      age: 58,
      diagnosis: "Type 2 Diabetes",
      treatment: "Insulin therapy and diet management",
      lastVisit: "2025-04-08"
    }
  ]);

  return (
    <div className="emr-container">
      <h2 className="emr-title">Electronic Medical Records</h2>
      <table className="emr-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {patientRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.diagnosis}</td>
              <td>{record.treatment}</td>
              <td>{record.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EMR;
