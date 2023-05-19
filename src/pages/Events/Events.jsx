import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import Nav from "../../components/Nav/Nav";
import Event from "../../components/Event/Event";
import Places from "../../components/Places";
import Footer from "../../components/Footer/Footer";
import "./Events.scss"

function Events() {
  return (
    <>
      <Nav />
              
      <div className="events-wrapper">
        <div className="intro">
          <h3>Discover,track, and party on!</h3>
        </div>
        <div className="search">
          <RiSearch2Line fill="white" />{" "}
          <input type="text" placeholder="Search events" />
        </div>
      </div>
      <Event />
      <Places />
      <Footer />
    </>
  );
}

export default Events;
