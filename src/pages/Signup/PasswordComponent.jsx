import React, { useState } from "react";
import messageIcon from "../../assets/messageIcon.svg";
import signBackground from "../../assets/signInSVG.svg";
import { Link } from "react-router-dom";
import "./Password.scss";
import HorizontalLinearStepper from "../../components/HorizontalLinearStepper";
import { set, useForm } from "react-hook-form";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

function PasswordComponent() {
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    const { name, value } = e.target;
    setError((prev) => {
      const stateObj = {
        ...prev,
        [name]: "",
      };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else if (input.confirmPassword && value < 8) {
            stateObj["confirmPassword"] =
              " Password must be eight characters, a capital letter and number.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          } else if (input.password && value < 8) {
            stateObj[name] = " Password must be eight characters, a capital letter and number.";
          } else {
            stateObj[name] = "";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };

  return (
    <>
      <div className="password-container">
        <img src={signBackground} className="background" alt="" />
        <div className="wrapper">
          <div className="product-name">
            <h1>TICKITS.</h1>
          </div>
          <HorizontalLinearStepper />

          <div className="input">
            <h2>Create your password</h2>
            <h3>Create a strong and secure password for your account</h3>
            <form action="" className="input-wrapper">
              <div className="password-div">
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={input.password}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  placeholder="Password"
                  //  {...register("password", {min:8,pattern: /^[A-Za-z]+$/i})}
                />
                <div className="eye">
                  {passwordShown ? (
                    <BsEyeSlashFill onClick={() => setPasswordShown(false)} />
                  ) : (
                    <BsEyeFill onClick={() => setPasswordShown(true)} />
                  )}
                </div>
              </div>
              {error.password && <span className="err">{error.password}</span>}

              <p></p>

              <div className="password-div">
                <input
                  type={passwordShown ? "text" : "password"}
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={onInputChange}
                  onBlur={validateInput}
                  placeholder="Confirm Password"
                  //  {...register("password", {min:8,pattern: /^[A-Za-z]+$/i})}
                />
                <div className="eye">
                  {passwordShown ? (
                    <BsEyeSlashFill onClick={() => setPasswordShown(false)} />
                  ) : (
                    <BsEyeFill onClick={() => setPasswordShown(true)} />
                  )}
                </div>
              </div>
              {error.confirmPassword && (
                <span className="err">{error.confirmPassword}</span>
              )}
            </form>
          </div>
          <div className="create-account">
            <Link to="/dashboardhome" className="next-page">
              <span> Create Account</span>
            </Link>
            <Link to="/sign-up" className="previous-page">
              <span> Previous</span>
            </Link>
          </div>
          <img src={messageIcon} className="messageIcon" alt="" />
        </div>
      </div>
    </>
  );
}

export default PasswordComponent;
