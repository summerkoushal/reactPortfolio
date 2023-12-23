import React from 'react'
import divyaamrit from "../assets/divyaamrit.png";
import portfolioimage from "../assets/portfol.jpeg";

export default function ProjectCard(props) {
  return (
    <>
      <div className="heading-container">
        <div style={{ width: "30vw", margin: "3rem" }} className="project-card">
          <img style={{ width: "100%" }} src={divyaamrit} />
          <br />
                  <p style={{ textAlign: "center" }}>
                      {props.content}
                  </p>
        </div>
      </div>
    </>
  );
}
