import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import "../components.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>

      <div className="contactSection">
        <div className="left">
          <h1>Let's Talk</h1>
          <p>You Contact me with the help of This form.</p>
          <div className="contactDetails">
            <div className="contactDetail effect">
              <div className="buttons">
                <a
                  href="https://wa.me/8120234419"
                  className="wa"
                  target="_blank"
                >
                  <FaWhatsapp className="icon" />
                </a>

                <a
                  href="https://www.linkedin.com/in/prashant-jain-464837230/"
                  className="li"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </a>

                <a
                  href="https://www.instagram.com/prashant.0002/"
                  className="ig"
                  target="_blank"
                >
                  <FaInstagram className="icon" />
                </a>

                <a
                  href="https://x.com/prashant4419"
                  className="tw"
                  target="_blank"
                >
                  <FaTwitter className="icon" />
                </a>

                <a
                  href="https://github.com/prashantjain0002"
                  className="gh"
                  target="_blank"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
            <form>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" />
                <label htmlFor="">Write Your Message Here </label>
                <textarea name="message" rows="8" placeholder="Enter Your Message"></textarea>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
