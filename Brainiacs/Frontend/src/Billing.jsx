


import React, { useState } from "react";
import "./Billing.css";

const Billing = () => {
  const [bills, setBills] = useState([
    {
      id: 101,
      patientName: "Alice Smith",
      service: "General Consultation",
      amount: "$150",
      status: "Paid"
    },
    {
      id: 102,
      patientName: "Bob Johnson",
      service: "Blood Test",
      amount: "$80",
      status: "Unpaid"
    }
  ]);

  return (
    <div className="billing-container">
      <h2 className="billing-title">Patient Billing</h2>
      <table className="billing-table">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Patient Name</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.patientName}</td>
              <td>{bill.service}</td>
              <td>{bill.amount}</td>
              <td className={bill.status === "Paid" ? "status-paid" : "status-unpaid"}>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
