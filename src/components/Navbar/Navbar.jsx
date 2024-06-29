import React, { useRef, useState } from "react";
import "../components.css";
import logo from "../../assets/logo.png";
import underLine from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMenu, IoClose } from "react-icons/io5";
import resume from "../../assets/Resume/Prashant Jain Resume.pdf"

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar" id="home">
      <img src={logo} alt="logo" />
      <IoMenu className="navMobileOpen" onClick={openMenu}/>
      <ul className="navMenu" ref={menuRef}>
        <IoClose className="navMobileClose" onClick={closeMenu}/>
        <li>
          <AnchorLink className="anchorLink" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underLine} alt="underLine" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchorLink" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underLine} alt="underLine" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchorLink" offset={50} href="#skill">
            <p onClick={() => setMenu("skill")}>Skills</p>
          </AnchorLink>
          {menu === "skill" ? <img src={underLine} alt="underLine" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchorLink" offset={50} href="#project">
            <p onClick={() => setMenu("project")}>Projects</p>
          </AnchorLink>
          {menu === "project" ? <img src={underLine} alt="underLine" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchorLink" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Get In Touch</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underLine} alt="underLine" /> : <></>}
        </li>
      </ul>
      <a className="navConnect" href={resume} target="_blank" rel="noreferrer">Resume</a>
    </div>
  );
};

export default Navbar;
