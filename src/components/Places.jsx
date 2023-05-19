import React from 'react';
import venu from "../assets/venu.png";
import "./Places.scss";
function Places() {
    return (  
        <>
        <div className="places-container">
            
            <h2>Most Visited Place</h2>
            <h4>Most used venues for event</h4>
            <div className="venues">
                <div className="venue-card">
               <img src={venu} alt="" />
               <h3>Sport Garden</h3>
                </div>
                <div className="venue-card">
               <img src={venu} alt="" />
               <h3>Sport Garden</h3>
                </div>
                <div className="venue-card">
               <img src={venu} alt="" />
               <h3>Sport Garden</h3>
                </div>
                <div className="venue-card">
               <img src={venu} alt="" />
               <h3>Sport Garden</h3>
                </div>
                <div className="venue-card">
               <img src={venu} alt="" />
               <h3>Sport Garden</h3>
                </div>
                
            </div>
        </div>
        
        </>
    );
}

export default Places;