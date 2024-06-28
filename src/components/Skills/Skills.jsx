import React from "react";
import { skills } from "../../assets/skills_data";
import theme_pattern from "../../assets/theme_pattern.svg";
import "../components.css";

const Skills = () => {
  return (
    <div id="skill" className="skill">
      <div className="title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>

      <p className="desc">
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="skillsContainer">
        {skills.map((skill, index) => (
          <div className="skillBox" key={index}>
            <h5 className="skillTitle">{skill.title}</h5>
            <div className="skillList">
              {skill.skills.map((item, id) => (
                <div className="skillItem" key={id}>
                  <img className="skillImage" src={item.image} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
