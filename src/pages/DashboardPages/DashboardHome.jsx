import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import cardsvg from "../../assets/cardsvg.svg";
import "./DashboardPages.scss";
import { Link } from "react-router-dom";
function DashboardHome() {
  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <h1>Welcome Back, David</h1>
        <div className="homecards">
          <div className="card">
            <div className="card__title">
              <h2>Membership Report</h2>
              <div className="content">
                <ul>
                  <li>
                    <h3>Status</h3>
                  </li>

                  <li>
                    <h3>Expiration Date</h3>
                  </li>
                  <li>
                    <h3>Remaining Events</h3>
                  </li>
                  <li>
                    <h3>Posted Events</h3>
                  </li>
                </ul>

                <ul>
                  <li> Active - Renew package</li>
                  <li> Unlimited</li>
                  <li>Unlimited</li>
                  <li>0</li>
                </ul>
                
              </div>
            </div>
          </div>
          <div className="card">
            <img src={cardsvg} alt="" className="cardsvg" />
            <h1>Let's help you <br/>
            market your  <br /> tickets
               </h1>
               <p>
               Try Tickits’s premium marketing feature for 7 days and market your events successfully⁠ — all from one place.
               </p>
              
              <Link className="marketing-feature">
              <p> Explore marketing Feature</p>
              </Link>
          </div>

          <div className="card">
            <h1>Your Next Event</h1>
            <p>Go to events</p>
            <div className="new-event">
              <p>You don't have any events yet. Lets create one!</p>
              <Link className="link"><h4>Create Event</h4></Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardHome;
