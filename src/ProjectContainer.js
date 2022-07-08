import React from "react";
import Project from "./Project";
import "./Project.css";

const projectData = [
  {
    name: "Project 1",
    description: "First Project I've done",
    skills: ["HTML", "Javascript", "React"],
    github: "https://github.com/",
    linkedIn: "https://www.linkedin.com/"
  },
  {
    name: "Project 2",
    description: "Second Project",
    skills: ["HTML", "Javascript", "React"],
    github: "https://github.com/",
    linkedIn: "https://www.linkedin.com/"
  },
  {
    name: "Project 3",
    description: "Third Project",
    skills: ["HTML", "Javascript", "React"],
    github: "https://github.com/",
    linkedIn: "https://www.linkedin.com/"
  }
];

const ProjectContainer = () => {
  return (
    <>
      <div className="prtitle">
        <h2> PROJECTS </h2>
      </div>
      <div className="projectContainer">
        {projectData.map((projectItem) => {
          return <Project projectItem={projectItem} />;
        })}
      </div>
    </>
  );
};

export default ProjectContainer;
