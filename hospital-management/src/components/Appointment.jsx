
import React, { useState } from "react";
import axios from "axios";
import "./Appointment.css"; // your CSS file
import { useNavigate } from "react-router-dom";
 

const AppointmentForm = () => {
  const [patientId, setPatientId] = useState("");
  const [appointmentDateTime, setAppointmentDateTime] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const res = await axios.post(
        "http://localhost:4000/appointments",
        {
          patientId,
          appointmentDateTime,
          reason,
          status,
        },
        { withCredentials: true }
      );

      setMessage("Appointment created successfully!");
      // Reset fields
      setPatientId("");
      setAppointmentDateTime("");
      setReason("");
      setStatus("pending");
      alert("appointment request send");
      navigate("/");
    } catch (err) {
      setMessage(
        err?.response?.data?.message || "Failed to create appointment"
      );
    }
  };

  return (
     
  <div className="appointment-container">
      <h2>Book Appointment</h2>
      {message && <p className="appointment-message">{message}</p>}
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Patient ID:
          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </label>

        <label>
          Appointment Date & Time:
          <input
            type="datetime-local"
            value={appointmentDateTime}
            onChange={(e) => setAppointmentDateTime(e.target.value)}
            required
          />
        </label>

        <label>
          Reason:
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </label>

        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <button type="submit">Create Appointment</button>
      </form>
    </div>
    
  );
};

export default AppointmentForm;
