import React from "react";
import Nav from "../../components/Nav/Nav";
import Vector from "../../assets/Vector(1).svg";
import location from "../../assets/Vector (8).svg";
import phone from "../../assets/call-calling.svg";
import contactVector from "../../assets/Layer 1.svg";
import "./Contact.scss";
import Footer from "../../components/Footer/Footer";
function Contact() {
  return (
    <>
      <Nav />
      <div className="contact-container">
        <div className="contact-hero">
          <h2>Contact Us</h2>
          <p>
            You can always reach out to us through our social media platforms or
            <p>message us through our contact support</p>
          </p>
        </div>
        <div className="contact-us">
          <div className="locate">
            <img src={contactVector} className="map" alt="" />
            <div className="contact">
              <h3>Headquaters</h3>
              <div>
                {" "}
                <img src={phone} alt="" />
                <p>+234 813 203 6958</p>
              </div>
              <div>
                {" "}
                <img src={Vector} alt="" />
                <p>tickits@gmail.com </p>
              </div>
              <div>
                {" "}
                <img src={location} alt="" />
                <p>University Of Ibadan</p>
              </div>
            </div>
            <h2>Other branches coming up soon!!</h2>
          </div>
          <div className="contact-form">
            <h2>Send Us A Message</h2>
            <p>
              Can’t find what you’re looking for? Need help? Feel free to send
              us a message.
            </p>
            <form action="" className="form">
              <div className="form-control">
                {/* <div></div> */}
                <label htmlFor="Fullname">Fullname</label>

                <input
                  type="text"
                  name="Fullname"
                  placeholder="David Ajala"
                  id=""
                />

                <label htmlFor="Fullname">Email</label>

                <input
                  type="email"
                  name="Email"
                  placeholder="davidajala@gmail.com"
                  id=""
                />

                <label htmlFor="Fullname">Message</label>

                <input
                  type="text"
                  name="Message"
                  placeholder="send us a message"
                  id=""
                />
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
