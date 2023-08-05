import React from 'react'

export default function Navbar() {
  return (
    <div className="nav-container ">
      <div>
        <span className="nav-logo">Summer Koushal</span>
      </div>
      <div className="nav-link-container">
        <span className="nav-link">About Me</span>
        <span className="nav-link">Skills</span>
        <span className="nav-link">Projects</span>
        <span className="nav-link">Contact Me</span>
      </div>
      <button className="btn btn-dark nav-btn">&#x25BC;</button>
    </div>
  );
}
