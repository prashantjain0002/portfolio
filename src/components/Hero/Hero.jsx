import React from "react";
import "../components.css";
import profileImg from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profileImg} alt="profileImg" className="image"/>
      <h1><span>I am Prashant Jain,</span> Front End Developer based in India. </h1>
      <div className="heroAction">
        <div className="heroConnect"><AnchorLink className="anchorLink" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="heroResume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
