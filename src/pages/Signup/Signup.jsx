import React from "react";
import messageIcon from "../../assets/messageIcon.svg";
import signBackground from "../../assets/signInSVG.svg";
import HorizontalLinearStepper from "../../components/HorizontalLinearStepper";
import { Link } from "react-router-dom";
import "./Signup.scss";

function Signup() {
  return (
    <>
      <div className="signup-container">
        <img src={signBackground} className="background" alt="" />
        <div className="signup-wrapper">
          <div className="product-name">
            <h1>TICKITS.</h1>
          </div>
          <HorizontalLinearStepper />

          <div className="signup">
            <h2>Create Your Tickits account</h2>

            <h3>Continue where you left of</h3>
            <form action="" className="input-wrapper">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email address" />
              <Link to="/cardpage" className="signin-btn">
                Next
              </Link>
            </form>

            <div className="signin">
              <p>
                Already have an account ?{" "}
                <Link to="/sign-in" className="signup-link">
                  <span>Sign In</span>
                </Link>
              </p>
              <img src={messageIcon} className="messageIcon" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
