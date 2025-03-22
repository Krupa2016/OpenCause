import React from "react";
import video1 from "../assets/video1.mp4"; 
import { Link } from "react-router-dom";
import Maincard from './Maincard';

const HeroSection = () => {
  

  
  return (

    <>
    


    <div className="hero-section">
      {/* Background Video */}
      <video
        className="background-video"
        src={video1} // Replace with your video URL
        autoPlay
        loop
        muted
      ></video>

      {/* Green Overlay */} 
      <div className="green-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>OPEN CAUSE</h1>
        <p>
          Create, contribute, and make a difference in your neighborhood with
          complete transparency.
        </p>


        
        <div className="cta-buttons">
        <Link to="/start-project">
        <button className="cta-btn start-project-btn">Start a Project</button>
      </Link>
      {/* <Link to="/signin" className="signin-btn">
                Sign In
              </Link> */}
           <Link to="/browse">
        <button className="cta-btn browse-projects-btn">Browse Projects</button>
      </Link>
        </div>
      </div>

    </div>
    <Maincard  />
   <h3><i class="fa-brands fa-instagram"></i> Chiragsharma</h3> 
         {/* <Maincard id={2} leftCard={leftCard2} rightCards={rightCards2} /> */}
    </>
    
    
  );
};

export default HeroSection;
