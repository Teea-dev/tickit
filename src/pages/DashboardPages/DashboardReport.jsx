import React from "react";
import Reportchart from "./Reportchart";
import DashboardLayout from "../../layout/DashboardLayout";
import tiks from "../../assets/group 44.svg";
import dateSvg from "../../assets/dateSvg.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import "./DashboardPages.scss";
function DashboardReport() {
  return (
    <DashboardLayout>
      <h1 className="report">Report</h1>
      <div className="Report-container">
        <div className="chart">
          <div className="head">
            <h1>Ticket Activity</h1>
            <div className="select">
              <h3>This Week</h3>
              <IoMdArrowDropdown className="arrow" />
            </div>
          </div>
          <Reportchart style={{ width: "0" }} />
        </div>
        <div className="report-card">
          <div className="report-card-1">
            <div className="tiks-amount">
              <img src={tiks} alt="" />
              <h1>300</h1>
            </div>
            <div className="total">
              <p>Total Tickets sold</p>
              <div>
                <h3>Jul 2023</h3>
                <IoMdArrowDropdown className="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming">
          <h1>Upcoming Events</h1>
          <div className="date">
            <img src={dateSvg} alt="" />
            <h3>23rd May, 2023</h3>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardReport;
