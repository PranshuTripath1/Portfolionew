import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Project = ({ projectItem }) => {
  const { name, description, skills, github, linkedIn } = projectItem;
  console.log(projectItem.skills);

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="skillContainer">
        {skills.map((skill) => (
          <span className="skills">{skill}</span>
        ))}
      </div>
      <span className="projectLink">
        <a href={github}>
          <GitHubIcon />
        </a>
      </span>
      <span className="projectLink1">
        <a href={linkedIn}>
          <LinkedInIcon />
        </a>
      </span>
    </div>
  );
};

export default Project;
