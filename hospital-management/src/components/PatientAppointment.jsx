import React, { useState } from "react";
import "./PatientAppointment.css";

const PatientAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    doctor: "",
    department: "",
    reason: "",
    insuranceId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment data:", formData);
    // You can call an API or service here
  };

  return (
    <div className="appointment-form-container">
      <h2>Book Patient Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input name="fullName" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select name="gender" onChange={handleChange} required>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input name="phone" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Appointment Date</label>
          <input type="date" name="appointmentDate" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Appointment Time</label>
          <input type="time" name="appointmentTime" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Department</label>
          <select name="department" onChange={handleChange} required>
            <option value="">Select</option>
            <option>General Medicine</option>
            <option>Cardiology</option>
            <option>Nephrology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
          </select>
        </div>

        <div className="form-group">
          <label>Doctor</label>
          <input name="doctor" placeholder="Dr. Smith / Dr. Jones..." onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Reason for Visit</label>
          <textarea name="reason" rows="3" onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>Insurance ID</label>
          <input name="insuranceId" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default PatientAppointment;
