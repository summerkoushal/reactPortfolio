import React from 'react'
import ProjectCard from './ProjectCard';
import divya from "../assets/divyaamrit.png";
import hostel from "../assets/hostel.png";
import port from "../assets/portfol.png";

export default function Projects() {
  return (
    <>
      <h3 id="projects" className="heading">
        Projects
      </h3>
      <div className="project-container">
        <div className="project-card-container">
          <ProjectCard
            link="https://www.divyaamritconstruction.com/"
            image={divya}
            content="Divyaamrit construction website"
          />
          <ProjectCard
            link="https://github.com/summerkoushal/reactPortfolio"
            image={port}
            content="Personal portfolio project"
          />
          <ProjectCard
            link="https://github.com/summerkoushal/hostel_management_system/tree/demo"
            image={hostel}
            content="Hostel Management System"
          />
          {/* <ProjectCard image={divya} content="React Calculator" /> */}
        </div>
      </div>
    </>
  );
}
