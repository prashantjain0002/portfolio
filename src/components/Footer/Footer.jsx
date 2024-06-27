import React from "react";
import "../components.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="left">
          <img src={logo} alt="logo" />
          <p>Prashant Jain</p>
        </div>
        <div className="right">
          <div className="email">
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footerButton">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footerBottom">
        <p>© 2024 Prashant Jain. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
