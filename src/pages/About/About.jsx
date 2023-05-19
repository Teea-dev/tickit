import React from "react";
import Nav from "../../components/Nav/Nav";
import search from "../../assets/search.svg";
import "./About.scss";
import Footer from "../../components/Footer/Footer";
import { RiSearch2Line } from "react-icons/ri";
function About() {
  return (
    <>
      <Nav />
      <div className="about-wrapper">
        <div className="about-intro">
          <div>
            <h3> Who We are</h3>
            <p>
              Welcome to our platform! We're passionate about connecting people
              to amazing events and experiences. Our mission is to make it easy
              for you to discover, attend, and create unforgettable moments with
              friends and loved ones. Join us and let's make memories!
            </p>
          </div>
          <div></div>
        </div>
        <div className="sponsors">
          <h2> Sponsors logo</h2>
        </div>
        <div className="to-book">
          <div className="heading">
            <h2>How It Works</h2>
            <p>How to book for an event</p>
          </div>
          <div className="about-flow">
            <div className="search">
              {/* <img src={search} alt="" />  */}
              <h2>Search</h2>
              <p>
                Easily find your event via search system with multiple params.
              </p>
            </div>
            <div>
              <h2>Book an Event</h2>
              <p>Select the event that you like. Choose Ticket add to cart.</p>
            </div>
            <div>
              <h2>Get your tickets</h2>
              <p>
                After booking successfully, You will get ticket in email or
                download in your account
              </p>
            </div>
          </div>
        </div>

        <div className="create-flow">
          <div className="header">
            <h2>How To Create an Event</h2>
            <p>You want to sell events tickets? follow this easy steps</p>
          </div>
          <div className="create">
            <div>
              <span>
                <RiSearch2Line />

                <h3>Create Event</h3>
              </span>
              <h4>
                On the website, select “create event” at the top of the right
                side of the website, it will takes you to the sign in page.
              </h4>
            </div>
            <div>
              <span>
                <RiSearch2Line />

                <h3>Login</h3>
              </span>
              <h4>
                Login if you already have an account or select “sign up” to
                create an account. For new account, fill the required details
                and choose “vendors” then click register
              </h4>
            </div>
            <div>
              <span>
                <RiSearch2Line />

                <h3>Verification</h3>
              </span>
              <h4>
                An account verification mail will be sent to your registered
                email address. You can now access your dashboard.
              </h4>
            </div>
            <div>
              <span>
                <RiSearch2Line />

                <h3>Dashboard Access</h3>
              </span>
              <h4>
                On the dashboard, select create event, enter the required
                details of your event and all necessary information
              </h4>
            </div>
            <div>
              <span>
                <RiSearch2Line />
                <h3>Event Created</h3>
              </span>
              <h4>
                Review all details and save the event to proceed. Your event has
                been successfully created
              </h4>
            </div>
            <div>
              <span>
                <RiSearch2Line />

                <h3>Management</h3>
              </span>
              <h4>You can mange all your created events from your dashboard</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
