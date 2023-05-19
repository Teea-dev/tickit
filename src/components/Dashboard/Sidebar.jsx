import React from 'react';
import { BsLightningChargeFill, BsClockHistory } from "react-icons/bs";
import { MdNewLabel, MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import DashboardNav from './dashboardNav';
function Sidebar() {
  const navigate = useNavigate();
 
  const AsideData = [
    {
      title: "Home",
      icon: <MdSpaceDashboard size={20} />,
      link: "/dashboardhome",
    },
    {
      title: "Events",
      icon: <MdNewLabel size={20} />,
      link: "/scheduledelivery",
    },
    {
      title: "Orders",
      icon: <BsLightningChargeFill size={20} />,
      link: "/dashboardorder",
    },
    {
      title: "Reports",
      icon: <BsClockHistory size={20} />,
      link: "/dashboardreport",
    },
    {
      title: "Finance",
      icon: <BsClockHistory size={20} />,
      link: "/deliveryhistory",
    },
    {
      title: "Settings",
      icon: <BsClockHistory size={20} />,
      link: "/dashboardsettings",
    },
    
  ];

  return (
    <div className="asidebar">
      <div className=" asidebar-1">
        {AsideData.map((asidedata, key) => {
          return (
            <div
              key={key}
              className={
                window.location.pathname === asidedata.link ? "active" : "list"
              }
              onClick={() => {
                 typeof asidedata.link === "function" ? asidedata.link() : navigate(asidedata.link);
              }}
            >
              <div className="asidedata">

              <div>{asidedata.icon}</div>
              <div className="d-none d-lg-block">{asidedata.title}</div>
              </div>
            </div>
          );
        })}
      
      </div>
    </div>
  );
}
export default Sidebar;