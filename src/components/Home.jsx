import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import heroimage from "../assets/heroimage.png";
import vectorImage from "../assets/Capa.svg";
import "./Home.scss";
import Nav from "./Nav/Nav";
import Event from "./Event/Event";
import Service from "./Service";
import Testimonnials from "./Testimonials";
import Places from "./Places";
import Footer from "./Footer/Footer";
function Home() {
  return (
    <>
    <Nav/>
      <div className="home-container">
        <img className="vector" src={vectorImage} alt="" />
        <div className="hero-description">
          <h3>Discover,track,and party on!</h3>
          <h1>
            Unleash Unforgetable experiences.
            <h1>Join the thrill!</h1>
          </h1>
          <div className="search">
            <RiSearch2Line fill="white" />{" "}
            <input type="text" placeholder="Search events" />
          </div>
        </div>
        <div className="image-background">
          <img src={heroimage} className="hero-image" alt="" />
        </div>
        <div className="logos">
            <h2>
                SPONSORS LOGO
            </h2>
        </div>
      </div>
      <Event />
    <Service />
    <Testimonnials/>
    <div className="places">

    <Places/>
    </div>
    <Footer /> 
    </>
  );
}

export default Home;
