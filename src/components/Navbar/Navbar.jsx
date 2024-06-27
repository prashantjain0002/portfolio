import React from 'react'
import "../components.css"
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <ul className="navMenu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
        </ul>
        <div className="navConnect">
            Resume
        </div>
    </div>
  )
}

export default Navbar