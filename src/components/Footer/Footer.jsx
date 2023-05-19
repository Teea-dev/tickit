import React from "react";
import "./Footer.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import facebook from "../../assets/Vector.svg";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="word">
            <h1>TICKITS.</h1>
            <p>
              Never miss a party again! Get your tickets hassle-free with our
              event platform made just for you.
            </p>
            <div className="socials">
              <a href="http://">
                <img src={facebook} alt="" />
              </a>
              <a href="http://">
                <BsInstagram fill="white" />
              </a>
            </div>
          </div>
          <div className="contact-links">
            <div className="contact">
              <h1>Contact Us</h1>
              <p>
                {" "}
                <FaPhoneAlt />
                +234 813 203 6958
              </p>
              <p>
                {" "}
                <BsChatSquareText /> tickits@gmail.com{" "}
              </p>
              <p>
                {" "}
                <IoLocationOutline /> University Of Ibadan
              </p>
            </div>
            <div className="links">
              <h1>Quick Links</h1>
              <ul>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Venue</a>
                </li>
                <li>
                  <a href="#">Create Events</a>
                </li>
                <li>
                  <a href="#"> Terms Of Use</a>
                </li>
                <li>
                  <a href="#"> Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rights">
        <h3>Tickits, 2023| All Rights Reserved</h3>
        <h3>
          Developed by <span className="district">Districts 7</span>
        </h3>
      </div>
    </>
  );
}

export default Footer;
