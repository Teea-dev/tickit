import React from "react";
import messageIcon from "../../assets/messageIcon.svg";
import signBackground from "../../assets/signInSVG.svg";
import HorizontalLinearStepper from "../../components/HorizontalLinearStepper";
import { Link } from "react-router-dom";
import "./Signup.scss";
import { Stepper } from "@mui/material";
function Cardpage() {
  return (
    <>
    {/* <Stepper stepperForm={
      [
        
      ]
    } /> */}
      <div className="signup-container">
        <img src={signBackground} className="background" alt="" />
        <div className="signup-wrapper">
          <div className="product-name">
            <h1>TICKITS.</h1>
          </div>
          <HorizontalLinearStepper />
          <div className="signup">
            <h2>How are you planning to use Tickits?</h2>
            <div className="cards">
              <div className="vendor-card">
                <h3>Vendor</h3>
                <p>small story</p>
                {/* <p>For event organizers, venue owners, and event vendors</p> */}
              </div>
              <div className="attendee-card">
                <h3>Attendee</h3>
                <p>Small story</p>
                {/* <p>For event attendees and ticket buyers</p> */}
              </div>
            </div>
            <div className="buttons">
              <Link to="/setpassword" className="next-page">
                <span> Next</span>
              </Link>
              <Link to="/sign-up" className="previous-page">
                <span> Previous</span>
              </Link>
            </div>
            <img src={messageIcon} className="messageIcon" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardpage;
