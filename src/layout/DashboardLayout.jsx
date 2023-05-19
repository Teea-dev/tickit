import React from "react";
import "./dashboardLayout.scss";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNav from "../components/Dashboard/dashboardNav";
function DashboardLayout(props) {
  return (
    <>
      <DashboardNav />
      <div className="dashboardLayout " >
        <div className="side--bar">
            <Sidebar />
        </div>
       
        <div className="dashboardLayout__content">{props.children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
