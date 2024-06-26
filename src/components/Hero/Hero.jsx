import React from "react";
import "../components.css";
import profileImg from "../../assets/profile.jpg";
// import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImg} alt="profileImg" className="image"/>
      <h1><span>I am Prashant Jain,</span> Front End Developer based in India. </h1>
      <div className="heroAction">
        <div className="heroConnect">Connect With Me</div>
        <div className="heroResume">My Resume</div>
        {/* <div className="social">
          <ul className="socialIcons">
            <li>
              <a
                href="https://github.com/prashantjain0002"
                target="_blank"
                className="github"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/prashant-jain-464837230/"
                target="_blank"
                className="linkedin"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8120234419"
                target="_blank"
                className="whatsapp"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/prashant.0002/"
                target="_blank"
                className="instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/prashant4419"
                target="_blank"
                className="twitter"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
