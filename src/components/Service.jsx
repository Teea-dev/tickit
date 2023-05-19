import React from "react";
import "./Service.scss";
import steps from "../assets/steps.png";
import backgroundSVG from "../assets/image 1.svg";

function Service() {
  return (
    <>
      <div className="service-container">
      <img src={backgroundSVG} className="backgroundSVG" alt="" />
        <div className="header">
          <h2>Our Services</h2>
          <p>Services we offer to our clients and users</p>
        </div>
        <div className="flow">
         
          <div>
            <h2>Book a ticket</h2>
          </div>
          <div>
            <h2>Create Event</h2>
          </div>
          <div>
            <h2>Get involved</h2>
          </div>
        </div>
        <h2 className="the-how">How it works</h2>
        <div className="instructions">
          <div className="image">
            <img className="steps-image" src={steps} alt="" />
          </div>
          <div className="steps">
            <div className="info">
              Ready to party like a pro? Score the hottest tickets in town,
              <p>without breaking a sweat. Join the fun!</p>
            </div>
            <div className="step1">
              <div className="search">
                <div className="head">

                <span className="one">01</span> Search{" "}
                </div>
              <p>
                Easily find your event via search system with multiple params.
              </p>
              </div>
            </div>
            <div className="step2">
              <div className="book">
                <div className="head">

                <span className="two">02</span> Book an event{" "}
                </div>
              <p>Select the event that you like. Choose Ticket add to cart.</p>
              </div>
            </div>
            <div className="step3">
              <div className="ticket">
                <div className="head">

                <span className="three">03</span>
                 Get the ticket to attend{" "}
                </div>
              <p>
                After booking successfully, You will get ticket in
                 email or
                download in your account
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
