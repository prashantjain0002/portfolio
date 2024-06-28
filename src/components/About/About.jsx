import React from 'react'
import "../components.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profileImg from "../../assets/profile.jpg"

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="aboutSection">
            <div className="left">
                <img src={profileImg} alt="profileImg" className='image'/>
            </div>
            <div className="right">
                <div className="aboutParagraph">
                    <p>I am Prashant Jain from Shivpuri, India. A detail-oriented professional with experience in various internships and projects. Skilled in Web Development, I am passionate about Website Development and eager to contribute to your team. My goal is to leverage my knowledge and experience to drive innovation and achieve excellence in the projects.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About