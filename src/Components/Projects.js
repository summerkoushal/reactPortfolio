import React from 'react'
import ProjectCard from './ProjectCard';
{/* <img src={portfolioimage} />; */}

export default function Projects() {
  return (
    <div style={{margin:'10vw'}}>
      <h3 className="heading ">Projects</h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent:'space-between' }}
        className="project-container"
      >
        <ProjectCard content="Divyaamrit construction website" />
        <ProjectCard content="Personal portfolio project" />
        <ProjectCard content="Hostel Management System" />
        <ProjectCard content="React Calculator" />
      </div>
    </div>
  );
}
