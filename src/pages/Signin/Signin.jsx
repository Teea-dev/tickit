import React from "react";
import messageIcon from "../../assets/messageIcon.svg";
import signBackground from "../../assets/signInSVG.svg";
import { Link } from "react-router-dom";
import "./Signin.scss";
function Signin() {
  return (
    <>
      <div className="signin-container">
        <img src={signBackground} className="background" alt="" />
        <div className="signin-wrapper">
          <div className="product-name">
            <h1>TICKITS.</h1>
          </div>
          <div className="signin">
            <h2>Welcome Back!</h2>
            <h3>Continue where you left of</h3>
            <form action="" className="input-wrapper">
              <input type="text" placeholder="Email address" />
              <input type="password" placeholder="Password" />
              <div>
                <p>
                  <Link to="/"  className="forgot-password">Forgot password?</Link>
                </p>
              </div>
              <button className="signin-btn" >Log in</button>
            </form>

            <div className="signup">
              <p>
                Don't have an account yet?{" "}
                <Link to="/sign-up" className="signup-link">
                  <span>Sign up</span>
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

export default Signin;
