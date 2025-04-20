

import { useState,useEffect } from "react";
import "./Sidebar.css";
import PatientAppointment from "./components/Appointment";
import BillingManage from "./Billing";
import Emr from "./Emr";


function Sidebar({ setActiveComponent }) {

    
    
    
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-avatar">V</div>
        <div>
          <pre className="sidebar-name">Welcome, Vishal</pre>
          {/* <p className="sidebar-role">Cardiologist</p> */}
        </div>
      </div>
      <nav className="sidebar-nav">
        <button className="sidebar-button" onClick={() => setActiveComponent("Appointment")}>📅 Appointments</button>
        <button className="sidebar-button" onClick={() => setActiveComponent("EMR")}>📝 EMR</button>
        <button className="sidebar-button" onClick={() => setActiveComponent("Billing")}>💳 Billing</button>
      </nav>
    </div>
  );
}

function Appointment() {
  return (
    <div className="component-box">
      📅 Appointment Component
      <PatientAppointment/>
    </div>
  );
}

function EMR() {
  return (
    <div className="component-box">
      📝 Electronic Medical Record (EMR) Component
      <Emr/>
    </div>
  );
}

function Billing() {
  return (
    <div className="component-box">
      💳 Billing Component
      <BillingManage/>
    </div>
  );
}

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Appointment");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Appointment": return <Appointment />;
      case "EMR": return <EMR />;
      case "Billing": return <Billing />;
      default: return <Appointment />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="component-area">
        {renderComponent()}
      </div>
    </div>
  );
}
