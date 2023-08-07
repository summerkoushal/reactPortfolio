import React from 'react'

export default function Navbar() {
  return (
    <div className="nav-container bg-black">
      <div>
        <span className="nav-logo">Summer</span>
      </div>
      <div className="nav-link-container">
        <span className="nav-link">About Me</span>
        <span className="nav-link">Skills</span>
        <span className="nav-link">Projects</span>
        <span className="nav-link">Contact Me</span>
      </div>
      <div class="btn-group nav-btn">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle bg-dark"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <button class="dropdown-item bg-black" type="button">
              About Me
            </button>
          </li>
          <li>
            <button class="dropdown-item bg-black" type="button">
              Skills
            </button>
          </li>
          <li>
            <button class="dropdown-item bg-black" type="button">
              Projects
            </button>
          </li>
          <li>
            <button class="dropdown-item bg-black" type="button">
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
