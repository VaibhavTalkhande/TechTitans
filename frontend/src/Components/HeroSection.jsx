import React from "react";
// import img from "../assets/img.png";
//import Heroimg from "../assets/img.gif";
import "../Styling/HeroSection.css";
import img from "../assets/img.gif";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="content">
          <h1 className="heading">
            TechTitan
            <br /> Online School
          </h1>
          <p className="para">
            New School is an aggregator of multimedia educational <br />{" "}
            materials from around the world
          </p>
          <button className="join-btn">Join for free</button>
        </div>
        <img src={img} alt="MyGIF" />
        {/* <img src={img} alt="img" /> */}
      </div>
    </>
  );
};

export default HeroSection;
