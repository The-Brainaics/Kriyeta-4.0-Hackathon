// filepath: c:\Users\DELL\Desktop\Hospital Management System\hospital-management\src\App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navebar";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Appointment from "./components/Appointment";
import Sidebar from "./Sidebar";
import LoginSignupPageAdmin from "./components/Adminlogin";
// import Navtop from "./components/Navtop";


function App() {
  return (
    <Router>
      <Routes>
       
       <Route path="/" element={<Navbar/>}/>
      
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/appointments" element={<Appointment/>}/> */}

      

        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/admin" element={<LoginSignupPageAdmin />}/>
      
      </Routes>
    </Router>
  );
}

export default App;