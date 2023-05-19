import React from "react";
import event from "../../event.json";
import location from "../../assets/location.svg";
import calendar from "../../assets/calendar.svg";
import "./Event.scss";
function Event() {
  return (
    <>
      <div className="events-container">
        <div className="heading">
          <h1>
            Events in 
             <div className="place"> 
             <input type="text" name="" placeholder="Ibadan" id="" /> 
             </div>
          </h1>
        </div>
        <div className="categories">
          <ul>
            <li>All</li>
            <li>For you</li>
            <li> Today</li>
            <li> This Weekend</li>
            <li>Entertainment</li>
            <li>Fashion</li>
            <li>Dinner</li>
            <li>Business</li>
            <li>Health</li>
            <li>Sports & Fitness</li>
          </ul>
        </div>
        <div className="events">
          {Object.keys(event).map((key) => (
            <div className="event-card">
              <div className="card-image">
                <img src={event[key].image} alt="" />
              </div>
              <div className="card" key={key}>
                <div className="event-info">
                  <h3>{event[key].eventName}</h3>
                  <h3>{event[key].category}</h3>
                </div>
                <div className="date">
                  <img src={calendar} alt="" />
                  {event[key].time}
                </div>
                <div className="location">
                  <img src={location} alt="" />
                  {event[key].location}
                </div>

                <div className="pricing">
                  <h2>N{event[key].price}</h2>
                  <button> Get Ticket</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more">
          <h2> See More</h2>
        </div>
      </div>
    </>
  );
}

export default Event;
