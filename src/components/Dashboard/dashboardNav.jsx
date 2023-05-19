import React from "react";
import Logo from "../../assets/Logo (2).svg";
import "./sidebar.scss";
import {RiArrowDropDownLine} from "react-icons/ri";
import{MdNotificationsNone} from "react-icons/md";
function DashboardNav() {
  return (
    <div>
      <div className="dashboardNav">
        <div className="dashboardNav__logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="dashboardNav__links">
          <div className="create">+ Create Event</div>
          <div className="profile">
            <div className="initials">DA</div>
            <div className="name">David Ajala</div>
            <div className="arrow">
                <RiArrowDropDownLine />
            </div>
          </div>

          <div className="notification">
            <MdNotificationsNone />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
