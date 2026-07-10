import React from "react";

export default function ProjectCard(props) {
  return (
    <>
      <div className="project-card">
        <img className="project-img" src={props.image} />
        <br />
        <a href={props.link} className="project-caption">{props.content}</a>
      </div>
    </>
  );
}
