import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import "../components.css";
import { projects } from "../../assets/Project_data";

const Project = () => {
  // console.log(projects);
  return (
    <div className="myProject">
      <div className="title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <p className="desc">
        I have worked on a wide range of projects. Frow Web Development and
        Python. Here are some of my Projects.
      </p>
      <div className="cardContainer">
        <div className="projectCard">
          {projects.map((project, index) => (
            <div className="projectCards" key={index}>
              <img src={project.image} alt="Image" />
              <div className="tags">
                {project.tags.map((tag, id) => (
                  <p className="tag" key={id}>
                    {tag}
                  </p>
                ))}
              </div>
              <div className="detail">
                <p className="projectTitle">{project.title}</p>
                <p className="date">{project.date}</p>
                <p className="description">{project.description}</p>
              </div>
              <div className="members"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
