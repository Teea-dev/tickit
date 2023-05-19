import React from "react";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import backroundVector from "../assets/Capa 1.svg";
import "./Testimonial.scss";
import testimonialImage from "../assets/testimonialImage.svg"
import mobileSVG from "../assets/mobileSVG.svg"
import horizontalLine from "../assets/horizontalLine.svg"
function Testimonnials() {
  return (
    <>
      <div className="container">
        <img src={mobileSVG} className="mobileSVG" alt="" />
        <img src={backroundVector} className="testimonial-background" alt="" />
        <div className="header-mobile">

        <img src={horizontalLine} className="horizontalLine" alt="" />
        <h2 >   TESTIMONIALS</h2>
        </div>
        <div className="testimonial-images">
          <img src={testimonialImage} alt="" />
        </div>
        <div className="testimonial">
          <h2 className="header">   TESTIMONIALS</h2>
          <div className="testimonial-body">
            <h2>What our customers say</h2>
            <p>
              This website has completely changed the way I approach
              <p>making money and has allowed me to earn extra daily</p>
              income in my spare time.
            </p>
          </div>
          <div className="customer-info">
            <div>
              <h4>Event Organizer</h4>
              <h2>David Ajala</h2>
            </div>
            <div className="arrows">
              <img src={arrow1} alt="" />
              <img src={arrow2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonnials;
