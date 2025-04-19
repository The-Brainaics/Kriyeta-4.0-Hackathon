
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from 'axios';



const  Signup= ()=> {

const navigate=useNavigate();
    
  const [formData, setFormData] = useState({
    fullName: "",
    gmail: "",
    password: "",
    // role: "admin",
  });
 

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    try {
      const response = await axios.post(
        "http://localhost:4000/signup",
        formData, // Pass formData directly
        {
          headers: {
            "Content-Type": "application/json", // Ensure the correct content type
          },
          withCredentials: true, // Include credentials if required
        }
      );
  
      if (response.status !== 200) throw new Error(response.data.message || "Signup failed");
  
      setSuccess("Account created successfully!");
      setFormData({ fullName: "", gmail: "", password: "" }); // Reset form fields

      navigate("/login");

    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };
  return (
    <div className="signup-container">
      <h2 className="signup-title">Patient Sign Up</h2>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="gmail"
            required
            value={formData.gmail}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        {/* <label>
          Role
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
          </select>
        </label> */}

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
